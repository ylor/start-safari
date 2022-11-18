<script>
  import Complication from "../ComplicationWrapper.svelte";
  import dateStore from "./store.js";
  const date = dateStore();
</script>

<Complication>
  📅 {$date.toLocaleDateString()}
</Complication>
