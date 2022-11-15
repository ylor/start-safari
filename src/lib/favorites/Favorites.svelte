<script>
  const favorites = [
    "Grumpy",
    "Hacker",
    "Instagram",
    "Letterboxd",
    "ResetEra",
    "Mastodon",
    "Netflix",
    "Plex",
    "Tildes",
    "Twitter",
    "Twitch",
    "YouTube",
  ];
</script>

<!--
6 items min
12 items max
-->

<section class="py-10">
  <h1 class="pl-1">Favorites</h1>
  <ul
    class="grid grid-cols-4 gap-x-8 gap-y-4 md:grid-cols-6 md:gap-x-5 md:gap-y-2.5 "
  >
    {#each favorites as favorite}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li class="pb-1">
        <a
          class="flex max-w-[10ch] flex-col items-center text-center leading-tight"
          href="#"
        >
          <img
            class="w-[60px] rounded-xl transition-transform hover:scale-110 md:w-[80px] md:rounded-2xl"
            src="{favorite}.png"
            alt={favorite}
          />
          <span class="pt-1 text-xs font-bold md:text-sm md:font-semibold"
            >{favorite}</span
          >
        </a>
      </li>
    {/each}
  </ul>
</section>
