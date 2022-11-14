<script>
  import { createEventDispatcher } from "svelte";
  import { fade, scale } from "svelte/transition";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let backdrop;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<aside
  bind:this={backdrop}
  on:click={(e) => (e.target === backdrop ? close() : null)}
  class="fixed inset-0 bg-gray-900/50 pt-[25vh] backdrop-blur-md"
  transition:fade={{ duration: 120 }}
>
  <section
    class="mx-auto w-fit px-3"
    role="dialog"
    aria-modal="true"
    transition:scale={{ duration: 100 }}
  >
    <slot>Lorem ipsum dolor sit amet</slot>
  </section>
</aside>
