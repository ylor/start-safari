<script>
  import { slide } from "svelte/transition";
  import fetchJsonp from "fetch-jsonp";

  import Complication from "../complications/meta/ComplicationWrapper.svelte";
  import Icon from "../complications/meta/ComplicationIcon.svelte";
  import Modal from "./Modal.svelte";

  import SearchIcon from "@/assets/icon/search.svg?raw";

  import { focusable_children, trap } from "./js/focus";
  import { normalizeUrl } from "./js/parseUrl";
  import parseQuery from "./js/parseQuery";

  let form;
  let input;
  let search = "";
  let suggestions = [];
  let modalVisible = false;

  $: query = search.includes(":") ? search.split(":")[1] : search;

  function handleKeydown(e) {
    const key = e.key;
    const selectors = "a, input";
    if (key === "ArrowDown" || key === "ArrowUp") {
      const group = focusable_children(form);
      key === "ArrowUp" ? group.prev(selectors) : group.next(selectors);
      return;
    }

    switch (key) {
      case "Alt":
      case "Control":
      case "Meta":
      case "Tab":
      case "Shift" && "Tab":
        break;
      case "Escape":
        search ? (search = "") : (modalVisible = false);
        break;
      default:
        if (e.altKey || e.ctrlKey || e.metaKey) {
          if (key !== "v") return; // don't hijack key combos
        }
        if (modalVisible === false) modalVisible = true;
        if (input) input.focus();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<button
  class="flex basis-full md:basis-auto"
  on:click={() => (modalVisible = true)}
>
  <Complication>
    <Icon src={SearchIcon} />
    Search
  </Complication>
</button>

{#if modalVisible}
  <Modal on:close={() => (modalVisible = false)}>
    <!-- svelte-ignore a11y-autofocus -->
    <form
      bind:this={form}
      on:submit|preventDefault={location.assign(
        normalizeUrl(parseQuery(search))
      )}
      use:trap
      autocapitalize="none"
      autocomplete="off"
      autocorrect="off"
      class="divide-y divide-neutral-700 rounded-xl bg-neutral-800/80 ring-1 ring-white/25"
      spellcheck="false"
    >
      <section class="flex items-center">
        <!-- SEARCH BOX -->
        <button type="submit">
          <Icon class="ml-4 mr-2 h-7 w-7 text-neutral-400" src={SearchIcon} />
        </button>
        <input
          bind:this={input}
          bind:value={search}
          on:keyup={fetchJsonp(
            "https://google.com/complete/search?client=firefox&q=" + query
            // "https://duckduckgo.com/ac/?q=" + query + "&type=list", { jsonpCallbackFunction: "autocompleteCallback" }
          )
            .then((response) => response.json())
            .then((data) => (suggestions = data[1].slice(0, 7)))}
          autofocus
          placeholder="Search"
          class="h-12 w-full bg-transparent p-2 text-2xl font-medium placeholder-neutral-600 outline-none selection:bg-blue-400"
        />
      </section>
      <!-- SEARCH SUGGESTSIONS START -->
      {#if suggestions.length > 1}
        <aside class=" max-h-96 overflow-y-auto py-2" transition:slide>
          {#each suggestions as suggestion (suggestion)}
            <a
              class="mx-2 block rounded-lg px-4 py-2 text-lg text-neutral-400 focus:bg-neutral-100/25 focus:text-neutral-100 focus:outline-none"
              href={parseQuery(
                search.includes(":")
                  ? search.split(":")[0] + ":" + suggestion
                  : suggestion
              )}
              on:focus={() =>
                (search = search.includes(":")
                  ? search.split(":")[0] + ":" + suggestion
                  : suggestion)}
              on:mousemove={(event) => event.target.focus()}
            >
              <img
                alt={parseQuery(
                  search.includes(":")
                    ? search.split(":")[0] + ":" + suggestion
                    : suggestion
                )}
                src="https://www.google.com/s2/favicons?domain={new URL(
                  normalizeUrl(
                    parseQuery(
                      search.includes(':')
                        ? search.split(':')[0] + ':' + suggestion
                        : suggestion
                    )
                  )
                ).hostname
                  .split('.')
                  .reverse()
                  .splice(0, 2)
                  .reverse()
                  .join('.')}&sz=64"
                class="mr-3 inline w-8 rounded"
              />
              {@html suggestion.replace(
                search.substring(search.indexOf(":") + 1).match(/.*\S/),
                `<span class="text-neutral-100">${search
                  .substring(search.indexOf(":") + 1)
                  .trim()}</span>`
              )}
            </a>
          {/each}
        </aside>
      {/if}
      <!-- SEARCH SUGGESTSIONS END -->
    </form>
  </Modal>
{/if}
