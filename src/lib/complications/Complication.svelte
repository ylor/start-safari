<script>
  export let href = null;
</script>

<a
  {href}
  class="basis-full rounded-xl bg-neutral-800 py-2 px-4 text-left font-semibold text-neutral-300 hover:bg-neutral-900 md:basis-auto md:text-center"
>
  <aside>
    <slot>Lorem ipsum dolor sit amet</slot>
  </aside>
</a>
