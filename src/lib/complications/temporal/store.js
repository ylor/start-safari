import { readable } from "svelte/store";

export default function (options = {}) {
  const initial = new Date();

  // return a readable store
  return readable(initial, (set) => {
    // the `update` function sets the latest date
    const update = () => set(new Date());

    // setup an interval timer to update the store's value every x milliseconds
    const interval = setInterval(update, options.interval || 1000);

    // return a cleanup function,
    // it will stop the timer when the store is destroyed
    return () => clearInterval(interval);
  });
}
