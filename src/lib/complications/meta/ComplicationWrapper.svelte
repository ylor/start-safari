<script>
  export let href = null;
</script>

<a
  {href}
  class="basis-full select-none rounded-lg bg-neutral-800 py-2 px-4 text-left font-medium text-neutral-200 transition duration-300 hover:bg-neutral-600 active:bg-neutral-700 md:basis-auto md:text-center"
>
  <aside>
    <slot>Lorem ipsum dolor sit amet</slot>
  </aside>
</a>
