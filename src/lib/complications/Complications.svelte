<script>
  import Date from "./temporal/Date.svelte";
  import Search from "../search/Search.svelte";
  import SunriseSunset from "./weather/SunriseSunset.svelte";
  import Time from "./temporal/Time.svelte";
  import Weather from "./weather/Weather.svelte";
</script>

<section class="flex flex-wrap gap-2 px-3">
  <Date />
  <Time />
  <Weather />
  <SunriseSunset />
  <Search />
</section>
