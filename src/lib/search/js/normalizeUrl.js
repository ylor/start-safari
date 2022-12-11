export default function (str) {
	str = str.trim();
	str = str.includes("://") ? str : `http://${str}`;

	const urlObject = new URL(str);

	if (urlObject.hostname) {
		// Remove `www.`
		// if (urlObject.hostname.startsWith("www.")) {
		//   urlObject.hostname = urlObject.hostname.replace(/^www\./, "");
		// }

		// Redirect "dev" and "local" to "localhost"
		if (["dev", "local"].includes(urlObject.hostname)) {
			urlObject.hostname = urlObject.hostname.replace(
				/dev|local/gi,
				"localhost",
			);
		}
	}

	// Decode URI octets
	if (urlObject.pathname) {
		urlObject.pathname = decodeURI(urlObject.pathname);
	}

	// Take advantage of `url` normalizations
	str = urlObject.toString();

	// Remove trailing slash if found
	if (str.endsWith("/")) {
		str = str.replace(/\/+$/, "");
	}

	return str;
}
