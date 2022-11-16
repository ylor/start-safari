<script>
  import Complication from "../Complication.svelte";
  import Loading from "../Loading.svelte";
  import { weather } from "./weather-stores";
</script>

<Complication href="https://www.windy.com/">
  {#await $weather}
    <Loading />
  {:then data}
    Sunrise 🌅
    {new Date(data.daily.sunrise[0]).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })}
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</Complication>
