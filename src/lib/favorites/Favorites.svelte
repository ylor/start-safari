<script>
  import ImageAsync from "./ImageAsync.svelte";
  import favorites from "./favorites.json";
</script>

<section class="w-full py-10 px-2.5">
  <h1 class="pl-1 md:mb-2">Favorites</h1>
  <ul class="grid grid-cols-4 gap-x-8 gap-y-5 md:grid-cols-6 md:gap-x-5">
    {#each favorites as f (f.url)}
      <li class="pb-1">
        <a
          class="flex max-w-[10ch] flex-col items-center leading-tight"
          href={f.url}
        >
          <ImageAsync
            class="icon w-[60px] transition duration-200 hover:scale-110 md:w-[72px]"
            src="icon/{f.name}.png"
            alt={f.name}
          />
          <span class="pt-1 text-xs font-bold md:font-normal">{f.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>
