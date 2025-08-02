<script lang="ts">
  import { GetBackgrounds } from "../library/backgrounds";

  let background: HTMLDivElement;
  let credit: string = $state("");
  let imgPath: string = "";
  let { backgroundType } = $props();

  $effect(() => {
    let backgroundSet = GetBackgrounds(backgroundType);

    if (backgroundSet == null) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * backgroundSet.length);
    imgPath = "bg/" + backgroundSet[randomIndex].src;
    background.style.backgroundImage = `url(${imgPath})`;

    let preload = new Image();
    preload.style.display = "none";
    preload.onload = () => {
      background.style.opacity = "1";
      background.style.transform = "scale(1)";
      preload.remove();
    };
    preload.src = imgPath;

    credit = backgroundSet[randomIndex].credit;
  });
</script>

<div class="background-placeholder"></div>
<div
  style="opacity:0;transform:scale(1.1);"
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
    transition-property: opacity, transform;
    background-size: cover;
    background-position: center;
    transform: scale(1.1);
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
    background-color: rgb(10, 10, 10);
    top: 0px;
    left: 0px;
    z-index: -6;
  }
</style>
