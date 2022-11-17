<script>
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
  <div
    class="h-[60px] w-[60px] rounded-xl bg-neutral-900 hover:scale-110 md:h-[80px] md:w-[80px] md:rounded-2xl"
  />
{:then data}
  <img async src={data.src} {alt} {...$$restProps} />
{/await}
