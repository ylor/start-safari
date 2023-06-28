import { getTracking, isTracking } from "./parseTracking.js";
import { isUrl } from "./parseUrl.js";

const data = import.meta.glob("../db/*.json", { eager: true });

let db = [];
Object.values(data).forEach((obj) => {
  db = db.concat(obj.default);
  // .sort((a, b) => a.name.localeCompare(b.name));
});

const aliasArray = db.map((site) => site.alias);
const aliasDupes = aliasArray
  .filter((item, index) => index !== aliasArray.indexOf(item))
  .filter(Boolean);
if (aliasDupes.length > 0) {
  console.log("DUPLICATE ALIASES FOUND IN CONFIG:", aliasDupes);
}

const findSiteByAlias = (string) => db.find((site) => site.alias === string);

export default function parseInput(string) {
  const stringLower = string.toLowerCase();

  // BEGIN PARSER

  // handle @ for Twitter
  // Ex: @SwiftOnSecurity
  if (string.startsWith("@")) {
    return `https://twitter.com/${string}`;
  }

  // handle ~ for Tildes
  // Ex: ~tech
  if (string.startsWith("~")) {
    return `https://tildes.net/${string}`;
  }

  // handle $ for stocks
  // Ex: $aapl
  if (string.startsWith("$")) {
    return `https://google.com/finance?q=${string}`;
  }

  // handle r/ for subreddits
  if (stringLower.startsWith("r/")) {
    // handled aliased subreddits
    const subredditAlias = stringLower.match(/r\/\w+/i)[0];
    if (aliasArray.includes(subredditAlias)) {
      // aliased subreddit search
      // r/mm:vega
      if (stringLower.includes(":")) {
        const query = string.split(":")[1].trim();
        return findSiteByAlias(subredditAlias).search_url.replace("{}", query);
      }

      // aliased subreddit with path
      // Ex r/mm || r/mm/new
      if (stringLower.includes("/")) {
        const path = string.split("/").slice(2).join();
        return `${findSiteByAlias(subredditAlias).url}/${path}`;
      }
    }

    // subreddit search
    // Ex: r/mechmarket:vega
    if (string.includes(":")) {
      const subreddit = string.split(":")[0];
      const query = string.split(":")[1].trim();

      return "https://www.reddit.com/[]/search/?q={}&restrict_sr=1"
        .replace("[]", subreddit)
        .replace("{}", query);
    }

    //Ex: r/all
    return `https://reddit.com/${string}`;
  }

  // handle match to aliased site
  // Ex: gb => https://www.giantbomb.com/
  if (aliasArray.includes(stringLower)) {
    return findSiteByAlias(stringLower).url;
  }

  // handle match to alias with search
  // Ex: Search YouTube => 'y:query'
  if (string.includes(":") && aliasArray.includes(stringLower.split(":")[0])) {
    const alias = stringLower.split(":")[0];
    const query = string.split(":")[1].trim();
    // if (findSiteByAlias(alias)) {
    return findSiteByAlias(alias).search_url.replace("{}", query);
    // }
  }

  // handle paths with a matched alias
  // Ex: gb/api => https://www.giantbomb.com/api
  if (string.includes("/") && aliasArray.includes(stringLower.split("/")[0])) {
    const alias = stringLower.split("/")[0];
    const path = string.split("/").slice(1).join("/");
    let site = findSiteByAlias(alias).url;

    return `${site}/${path}`;
  }

  // handle tracking numbers
  if (isTracking(string)) {
    return getTracking(string);
  }

  //  handle localhost/ip/url with optional specified port
  //  Ex: apple.com
  //  Ex: 127.0.1.1/index.html
  //  Ex: localhost:5000
  //  Ex: local:1337 || dev:1337 => localhost: 1337
  if (isUrl(string)) {
    return string;
  }

  // send query to search engine
  // const duckUrl = "https://duckduckgo.com/?q=";
  const googleUrl = "https://google.com/search?q=";
  return googleUrl + string;
}
