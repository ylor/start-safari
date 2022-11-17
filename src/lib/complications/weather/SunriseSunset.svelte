<script>
  import Complication from "../Complication.svelte";
  import Loading from "../Loading.svelte";
  import { weather } from "./weather-stores";

  const sunriseSunset = () => {
    const now = new Date().getHours();
    now < 11 || now > 21 ? "sunrise" : "sunset";
  };
</script>

<Complication href="https://www.windy.com/">
  {#await $weather}
    <Loading />
  {:then data}
    {#if sunriseSunset() === "sunrise"}
      🌅 Sunrise {new Date(data.daily.sunrise[0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {:else}
      🌅
      {new Date(data.daily.sunset[0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {/if}
  {:catch error}
    <Loading />
  {/await}
</Complication>
