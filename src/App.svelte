<script>
  import Favorites from "@/lib/favorites/Favorites.svelte";
  import Search from "@/lib/search/Search.svelte";
  import Weather from "./lib/complications/weather/Weather.svelte";
  import SunriseSunset from "./lib/complications/weather/SunriseSunset.svelte";
  import Complication from "./lib/complications/ComplicationWrapper.svelte";
  import Loading from "./lib/complications/ComplicationPlaceholder.svelte";
  import Complications from "./lib/complications/Complications.svelte";
</script>

<main class="flex flex-col items-center">
  <Favorites />
  <Complications />
</main>
