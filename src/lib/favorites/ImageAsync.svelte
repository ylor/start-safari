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
  <img bind:this={img} src={data.src} {alt} {...$$restProps} />
{:catch error}
  <ImagePlaceholder />
{/await}

<svg width="0" height="0">
  <defs>
    <clipPath id="squircle" clipPathUnits="objectBoundingBox">
      <path
        d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z"
      />
    </clipPath>
  </defs>
</svg>

<style>
  img {
    /* clip-path: url(#squircle); */
    mask-image: url("/assets/ios-mask.svg");
    mask-size: cover;
  }
</style>
