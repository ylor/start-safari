<script>
  import Favorites from "@/lib/favorites/Favorites.svelte";
  import Search from "@/lib/search/Search.svelte";
  import FakeWeather from "./lib/complications/weather/Weather.svelte";
  import FakeSunriseSunset from "./lib/complications/weather/SunriseFakeSunset.svelte";
  import Complication from "./lib/complications/Complication.svelte";
</script>

<main class="flex flex-col items-center">
  <Favorites />
  <section class="flex flex-wrap gap-3 px-3">
    <FakeWeather />
    <FakeSunriseSunset />
    <Search />
  </section>
</main>

<style>
</style>
