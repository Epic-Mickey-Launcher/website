<script lang="ts">
  import Background from "./components/background.svelte";
  import Stats from "./components/stats.svelte";
  import { BackgroundSetType } from "./library/backgrounds";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <meta property="og:title" content="Epic Mickey Launcher" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eml.kalsvik.no" />
  <meta property="og:image" content="https://eml.kalsvik.no/favicon.png" />
  <meta
    property="og:description"
    content="Mod Installer & Launcher for all mainline Epic Mickey games."
  />
  <meta name="theme-color" content="#c021d8" />
  <title>Epic Mickey Launcher</title>
</svelte:head>

<Background backgroundType={BackgroundSetType.Main}></Background>

<main
  style="width:100%;height:88vh; display:flex;align-items:center;flex-direction:column;"
>
  <div style="position:relative;margin-top: 40vh;">
    <h1>{data.currentQuote}</h1>
    <button
      class="downloadButton"
      onclick={() => window.open("/download", "_self")}>Download Here</button
    >
    <p>
      <button
        class="socialicons"
        onclick={() => window.open("https://discord.gg/EGb3qXVwrv")}
        ><img alt="" src="discord.svg" style="width:30px;" /></button
      >
      <button
        class="socialicons"
        onclick={() => window.open("https://bsky.app/profile/kalsvik.no")}
        ><img alt="" src="bsky.svg" style="width:30px;" /></button
      >
      <button
        class="socialicons"
        onclick={() => window.open("https://www.youtube.com/@jonaswkk")}
        ><img alt="" src="youtube.svg" style="width:30px;" /></button
      >
      <button
        class="socialicons"
        onclick={() => window.open("https://github.com/Epic-Mickey-Launcher")}
        ><img alt="" src="github.svg" style="width:30px;" /></button
      >
    </p>
  </div>

  <div
    style="margin-top:400px;text-align: center;display:flex;flex-direction: column;"
  >
    <span>
      <span style="font-size:30px;">Support for every Epic Mickey game</span>
      <br />
      <span>(Not Including Epic Mickey 2 on XBOX, Wii U or PS3)</span>
      <p>
        <img
          alt=""
          src="gamesmenu.png"
          style="width:50%;border-radius:8px;filter:drop-shadow(1px 1px 10px black)"
        />
      </p></span
    >

    <span>
      <span style="font-size:30px;">Mod Index</span>
      <br />
      <span>Various mods available for all supported games.</span>
      <p>
        <img
          alt=""
          src="modmarket.png"
          style="width:50%;border-radius:8px;filter:drop-shadow(1px 1px 10px black)"
        />
      </p>
    </span>

    <span>
      <span style="font-size:30px;">Networking Features</span>
      <br />
      <span
        >Upload your own mods, Send comments, Vote on mods & customize your
        profile with an EML Account.</span
      >
      <p>
        <img
          alt=""
          src="profilepage.png"
          style="width:50%;border-radius:8px;filter:drop-shadow(1px 1px 10px black)"
        />
      </p>
    </span>

    <span>
      <span style="font-size:30px;">Robust Mod Management</span>
      <br />
      <span>Easily Disable/Enable mods with one click.</span>
      <p>
        <img
          alt=""
          src="modmanagement.png"
          style="width:50%;border-radius:8px;filter:drop-shadow(1px 1px 10px black)"
        />
      </p>
    </span>
  </div>

  <Stats></Stats>

  <style>
    * {
      text-align: center;
    }
    body {
      background-repeat: no-repeat;
      background-size: cover;
    }

    .socialicons {
      border: none;
      background-color: transparent;
      margin-bottom: 30px;
      transition-duration: 0.2s;
    }

    .socialicons:hover {
      transform: scale(1.3);
    }

    .downloadButton {
      transition-duration: 0.3s;
      font-weight: bold;
      text-align: center;
      width: 300px;
      height: 80px;
      border: none;
      border-radius: 10px;
      background-color: rgb(20, 20, 20, 0.5);
      backdrop-filter: blur(5px);
      font-size: 20px;
    }

    .downloadButton:hover {
      font-size: 25px;
      transform: scale(1.1);
    }

    .downloadButton:active {
      font-size: 25px;
      transform: scale(0.9);
    }
  </style>
</main>
