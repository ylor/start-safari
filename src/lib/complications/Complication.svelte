<script>
  export let href = null;
</script>

<a
  {href}
  class="flex basis-full rounded-xl bg-neutral-800 py-2 px-4 text-left font-semibold text-zinc-300 transition hover:bg-neutral-900 sm:basis-auto md:text-center"
>
  <aside>
    <slot>Lorem ipsum dolor sit amet</slot>
  </aside>
</a>
