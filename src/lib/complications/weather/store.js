import { readable } from "svelte/store";
import ls from "localstorage-slim";

async function fetchWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=25.46&longitude=-80.48&timezone=auto&temperature_unit=fahrenheit&current_weather=true&daily=sunrise,sunset"
  );
  const data = await response.json();
  ls.set("weather", data, { ttl: 3600 });
  return data;
}

export const weather = readable(ls.get("weather") || fetchWeather());
