<script lang="ts">
  import { GetBackgrounds } from "../library/backgrounds";

  let background: HTMLDivElement;
  let credit: string = $state("");
  let imgPath: string = $state("");
  let { backgroundType } = $props();

  $effect(() => {
    let backgroundSet = GetBackgrounds(backgroundType);

    if (backgroundSet == null) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * backgroundSet.length);

    imgPath = "bg/" + backgroundSet[randomIndex].src;

    let preload = new Image();
    preload.style.display = "none";
    preload.onload = () => {
      background.style.opacity = "1";
      preload.remove();
    };
    preload.src = imgPath;

    credit = backgroundSet[randomIndex].credit;
  });
</script>

<div class="background-placeholder"></div>
<div
  style="opacity:0;background-image: url({imgPath});"
  bind:this={background}
  class="background"
></div>
<span
  style="position: fixed; bottom: 0px; left:0px;background-color: rgba(30, 30, 30, 0.5);padding: 10px;border-radius: 5px;font-size: 12px;"
  >{credit}</span
>

<style>
  .background {
    opacity: 0;
    transition-duration: 1s;
    transition-property: opacity;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -5;
  }

  .background-placeholder {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: black;
    top: 0px;
    left: 0px;
    z-index: -6;
  }
</style>
