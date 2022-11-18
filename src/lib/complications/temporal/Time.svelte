<script>
  import Complication from "../ComplicationWrapper.svelte";
  import clockStore from "./store.js";
  const clock = clockStore();
</script>

<Complication>
  ⌚ {$clock.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })}
</Complication>
