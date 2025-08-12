<script lang="ts">
  import DOMPurify from "dompurify";
  import Stats from "../components/stats.svelte";
  import { GetImagePath, ImageType, SERVER_URL } from "../library/networking";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let sanitizedDescription = $state("");
  let modData: any = data.modData;

  $effect(() => {
    sanitizeDescription();
  });

  function sanitizeDescription() {
    sanitizedDescription = DOMPurify.sanitize(data.markdownDescription);
  }

  function OpenWithEML() {
    window.open("eml://openmod?id=" + modData.ID, "_blank");
  }

  function DownloadDirect() {
    window.open(SERVER_URL + "mod/download?id=" + modData.ID, "_blank");
  }
</script>

<svelte:head>
  <title>EML Mod | {modData.Name}</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eml.kalsvik.no" />
  <meta content="#c021d8" data-react-helmet="true" name="theme-color" />
  <meta content={modData.Name} property="og:title" />
  <meta content={modData.ShortDescription} property="og:description" />
  <meta
    content={SERVER_URL + "img/modicon?id=" + modData.ID}
    property="og:image"
  />
</svelte:head>

<div style="display: flex;justify-content: center;flex-direction: column;">
  <h1 style="text-align: center;">{modData.Name}</h1>

  <img
    style="width:128px;text-align: center;"
    src={GetImagePath(modData.ID, ImageType.Mod)}
    alt="mod icon"
  />
  <br />

  <button
    onclick={OpenWithEML}
    style="background-color: purple;width:128px;text-align: center;"
    >Open with EML</button
  >
  <br />
  <button onclick={DownloadDirect} style="width:128px;text-align: center;"
    >Download Directly</button
  >
</div>
<p></p>

<span style="justify-content:center; display: flex;">
  <div
    style="word-wrap: break-word;max-width:700px; min-width:200px; text-align:left;padding:10px;background-color: rgb(20, 20, 20); border-radius: 5px;"
  >
    <span style="">
      {@html sanitizedDescription}
    </span>
  </div>
</span>

<p></p>

<div style="text-align: center;">
  Downloads: {modData.Downloads} | Likes: {modData.CachedLikes}
</div>

<p></p>
<hr />

<Stats></Stats>

<style>
  * {
    text-align: left;
  }

  button {
    background-color: rgb(20, 20, 20);
    border-radius: 2px;
    border: none;
  }
</style>
