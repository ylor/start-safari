<script>
  import weatherCode from "./weatherCode";
  import Complication from "../Complication.svelte";

  import { weather } from "./weather-stores";
</script>

<Complication>
  <a href="https://www.windy.com/">
    {#await $weather}
      <p class="animate-pulsing" />
    {:then data}
      {weatherCode(data.current_weather.weathercode)}
      {Math.round(data.current_weather.temperature)}
    {:catch error}
      <p>An error occurred!</p>
    {/await}
  </a>
</Complication>
