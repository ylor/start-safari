<script>
  import ImagePlaceholder from "./ImagePlaceholder.svelte";

  export let src;
  export let alt;

  let img;
  const toBeSquircles = document.querySelectorAll(img);

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

<style>
  @supports (mask-size: cover) or (-webkit-mask-size: cover) {
    img {
      border-radius: 0;
      mask-image: url("/assets/ios-mask.svg");
      mask-size: cover;
    }
  }

  img {
    border-radius: 22.5%;
  }
</style>
