<script>
  import weatherCode from "./weatherCode";
  import Complication from "../ComplicationWrapper.svelte";
  import Loading from "../ComplicationPlaceholder.svelte";
  import { weather } from "./store";
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
