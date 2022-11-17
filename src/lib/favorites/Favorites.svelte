<script>
  import Image from "./ImageAsync.svelte";
  import favorites from "./favorites.json";
  import normalizeUrl from "../search/js/normalizeUrl";
  import ImagePlaceholder from "./ImagePlaceholder.svelte";
</script>

<section class="py-10">
  <h1 class="pl-1 md:mb-2">Favorites</h1>
  <ul class="grid grid-cols-4 gap-x-8 gap-y-5 md:grid-cols-6 md:gap-x-5">
    {#each favorites as f}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li class="pb-1">
        <a
          class="flex max-w-[10ch] flex-col items-center leading-tight"
          href={normalizeUrl(f.url)}
        >
          <Image
            class="w-[60px] rounded-xl transition-transform hover:scale-110 md:w-[72px] md:rounded-xl"
            src="icon/{f.name}.png"
            alt={f.name}
          />
          <span class="pt-1 text-xs font-bold md:font-normal">{f.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>
