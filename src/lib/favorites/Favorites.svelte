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

<section class="py-4">
  <h1 class="pl-1">Favorites</h1>
  <ul class="grid grid-cols-3 gap-5 md:grid-cols-6 ">
    {#each favorites as favorite}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li class="pb-1">
        <a
          class="flex max-w-[10ch] flex-col items-center text-center leading-tight"
          href="#"
        >
          <img
            class="w-[80px] rounded-2xl transition-transform hover:scale-110"
            src="{favorite}.png"
            alt={favorite}
          />
          <span class="pt-1">{favorite}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>
