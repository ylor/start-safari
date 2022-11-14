<script>
  import weatherCode from "./weatherCode";
  import Complication from "../Complication.svelte";
  import Loading from "../Loading.svelte";
  import { weather } from "./weather-stores";
</script>

<Complication>
  {#await $weather}
    <Loading />
  {:then data}
    <a href="https://www.windy.com/">
      {weatherCode(data.current_weather.weathercode)}
      {Math.round(data.current_weather.temperature)}°
    </a>
  {/await}
</Complication>
