<script>
  import Complication from "../Complication.svelte";
  import { weather } from "./weather-stores";
</script>

<Complication>
  <a href="https://www.windy.com/">
    {#await $weather}
      <p class="animate-pulsing" />
    {:then data}
      Sunrise 🌅
      {new Date(data.daily.sunrise[0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {:catch error}
      <p>An error occurred!</p>
    {/await}
  </a>
</Complication>
