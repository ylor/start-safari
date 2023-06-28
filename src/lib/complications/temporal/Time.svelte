<script>
  import Complication from "../meta/ComplicationWrapper.svelte";
  import Icon from "@/lib/complications/meta/ComplicationIcon.svelte";
  import clockIcon from "@/assets/icon/clock.svg?raw";
  import clockStore from "./store.js";
  const clock = clockStore();
</script>

<Complication>
  <Icon src={clockIcon} />
  {$clock.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })}
</Complication>
