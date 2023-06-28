<script>
  import Complication from "../meta/ComplicationWrapper.svelte";
  import Loading from "../meta/ComplicationPlaceholder.svelte";
  import ComplicationIcon from "../meta/ComplicationIcon.svelte";
  import SunriseIcon from "@/assets/icon/sunrise.svg?raw";
  import SunsetIcon from "@/assets/icon/sunset.svg?raw";
  import { weather } from "./store";

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
      <ComplicationIcon src={SunriseIcon} /> Sunrise {new Date(
        data.daily.sunrise[0]
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {:else}
      <ComplicationIcon class="inline mb-1" src={SunsetIcon} />
      {new Date(data.daily.sunset[0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}
    {/if}
  {:catch error}
    <Loading />
  {/await}
</Complication>
