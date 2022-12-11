<script>
  export let src;
  let data = src;
  export let viewBox = extractViewBox(data);

  export let size = "20px";
  export let width = size;
  export let height = size;

  export let color = "currentColor";
  export let fill = color;
  export const stroke = color;

  $: elements = data.replace(/<svg ([^>]*)>/, "").replace("</svg>", "");

  function extractViewBox(svg) {
    const regex = /viewBox="([\d\- \.]+)"/;
    const res = regex.exec(svg);
    if (!res) return "0 0 20 20"; // default value
    return res[1];
  }
</script>

<svg
  class="mb-[3px] inline h-5"
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  {viewBox}
  {fill}
  {...$$restProps}
>
  {@html elements}
</svg>
