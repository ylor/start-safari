<script>
  export let href = null;
</script>

<a
  {href}
  class="basis-full rounded-lg bg-neutral-900 py-2 px-4 text-left font-medium text-neutral-200 transition duration-300 hover:bg-neutral-600 md:basis-auto md:text-center"
>
  <aside>
    <slot>Lorem ipsum dolor sit amet</slot>
  </aside>
</a>
