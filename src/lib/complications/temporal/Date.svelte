<script>
  import Complication from "../meta/ComplicationWrapper.svelte";
  import dateStore from "./store.js";
  import ComplicationIcon from "../meta/ComplicationIcon.svelte";
  import CalenderIcon from "@/assets/icon/calendar.svg?raw";
  const date = dateStore();
</script>

<Complication>
  <ComplicationIcon src={CalenderIcon} />
  {$date.toLocaleDateString()}
</Complication>
