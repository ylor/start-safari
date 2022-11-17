<script>
  import Complication from "../Complication.svelte";
  import Loading from "../Loading.svelte";
  import { weather } from "./weather-stores";

  const sunriseSunset = () => {
    const now = new Date().getHours();
    if (now < 11 || now > 9) {
      return "sunrise";
    } else {
      return "sunset";
    }
  };
</script>

<Complication href="https://www.windy.com/">
  {#await $weather}
    <Loading />
  {:then data}
    {#if sunriseSunset() === "sunrise"}
      Sunrise 🌅
      {new Date(data.daily.sunrise[0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {:else}
      Sunset 🌅
      {new Date(data.daily.sunset[0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {/if}
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</Complication>
