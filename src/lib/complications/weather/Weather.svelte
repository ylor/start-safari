<script>
  import weatherCode from "./weatherCode";
  import Complication from "../Complication.svelte";
  import Loading from "../Loading.svelte";
  import { weather } from "./weather-stores";
</script>

<Complication href="https://www.windy.com/">
  {#await $weather}
    <Loading />
  {:then data}
    {weatherCode(data.current_weather.weathercode)}
    {Math.round(data.current_weather.temperature)}°
  {:catch error}
    <Loading />
  {/await}
</Complication>
