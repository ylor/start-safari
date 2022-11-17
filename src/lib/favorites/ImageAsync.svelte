<script>
  import ImagePlaceholder from "./ImagePlaceholder.svelte";

  export let src;
  export let alt;

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }

  let promise = loadImage(src);
</script>

{#await promise}
  <ImagePlaceholder />
{:then data}
  <img src={data.src} {alt} {...$$restProps} />
{:catch error}
  <ImagePlaceholder />
{/await}
