<script>
  import Favorites from "@/lib/favorites/Favorites.svelte";
  import Search from "@/lib/search/Search.svelte";
  import FakeWeather from "./lib/complications/weather/Weather.svelte";
  import FakeSunriseSunset from "./lib/complications/weather/SunriseFakeSunset.svelte";
</script>

<main class="flex flex-col items-center">
  <Favorites />
  <section class="flex w-full justify-around gap-3 py-5">
    <FakeWeather />
    <FakeSunriseSunset />
    <Search />
  </section>
</main>

<style>
</style>
