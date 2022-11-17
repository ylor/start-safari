<script>
  import Image from "../util/ImageAsync.svelte";
  import favorites from "./favorites.json";
  import normalizeUrl from "../search/js/normalizeUrl";
</script>

<section class="py-10">
  <h1 class="pl-1">Favorites</h1>
  <ul
    class="grid grid-cols-4 gap-x-8 gap-y-4 md:grid-cols-6 md:gap-x-5 md:gap-y-2.5"
  >
    {#each favorites as f}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li class="pb-1">
        <a
          class="flex max-w-[10ch] flex-col items-center leading-tight"
          href={normalizeUrl(f.url)}
        >
          <Image
            class="w-[60px] rounded-xl transition-transform hover:scale-110 md:w-[80px] md:rounded-2xl"
            src="{f.name}.png"
            alt={f.name}
          />
          <span class="pt-1 text-xs font-bold md:text-sm md:font-semibold"
            >{f.name}</span
          >
        </a>
      </li>
    {/each}
  </ul>
</section>
