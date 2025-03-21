<script>
  import {onMount} from "svelte";
  import Stats from "./components/stats.svelte";

  let bgs = [
    "main/back1.webp",
    "main/back2.webp",
    "main/back3.jpg",
    "main/back4.webp",
    "main/back5.png",
    "main/back6.png",
    "main/back7.png",
    "main/back8.png",
    "main/back9.png",
    "main/back10.png",
    "main/back11.png",
    "main/back12.png",
    "main/back13.png",
    "main/back14.png",
    "main/back5.webp",
    "main/back6.webp",
    "main/back7.webp",
    "main/back8.webp",
    "main/back9.webp",
    "main/back15.jpg"
  ];

  let quotes = [
    "A new way to experience Epic Mickey.",
    "A must have for playing Epic Mickey.",
    "A must have for modding Epic Mickey.",
    "The easiest way to play Epic Mickey.",
    "An amazing way to relive your childhood.",
  ];

  let randomBackgroundIndex = Math.floor(Math.random() * bgs.length);
  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  let currentQuote = quotes[randomQuoteIndex];
  /**
   * @type {any[]}
   */

  onMount(async () => {
    document.body.style.background =
      "url(bg/" + bgs[randomBackgroundIndex] + ") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  });

  async function POST(route, data, isJson = false) {
    const res = await fetch("https://emlapi.kalsvik.no/" + route, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    if (isJson) {
      return await res.json();
    }

    return res.text();
  }
</script>

<svelte:head>
  <title>Epic Mickey Launcher</title>
</svelte:head>

<main
  style="width:100%;height:88vh; display:flex;align-items:center;flex-direction:column;"
>
  <div style="position:relative;margin-top: 40vh;">
    <h1>{currentQuote}</h1>
    <button on:click={() => window.open("/download")} class="downloadButton">Download Here</button>
    <p>
      <button
        on:click={() => window.open("https://discord.gg/EGb3qXVwrv")}
        class="socialicons"
        ><img style="width:30px;" alt="" src="discord.svg" /></button
      >
      <button
        on:click={() => window.open("https://bsky.app/profile/kalsvik.no")}
        class="socialicons"
        ><img style="width:30px;" alt="" src="bsky.svg" /></button
      >
      <button
        on:click={() => window.open("https://www.youtube.com/@jonaswkk")}
        class="socialicons"
        ><img style="width:30px;" alt="" src="youtube.svg" /></button
      >
      <button
        on:click={() => window.open("https://github.com/Epic-Mickey-Launcher")}
        class="socialicons"
        ><img style="width:30px;" alt="" src="github.svg" /></button
      >
    </p>
  </div>

  <p style="margin-top:400px;">
    <span>
      <span style="font-size:30px;">Support for every Epic Mickey game</span>
      <br />
      <span>(Not Including Epic Mickey 2 on XBOX, Wii U or PS3)</span>
      <p>
        <img
          src="gamesmenu.png"
          alt=""
          style="width:50%;border-radius:8px;filter:drop-shadow(1px 1px 10px black)"
        />
      </p></span
    >

    <span>
      <span style="font-size:30px;">Mod Market</span>
      <br />
      <span>Various mods available for all supported games.</span>
      <p>
        <img
          src="modmarket.png"
          alt=""
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
          src="profilepage.png"
          alt=""
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
          src="modmanagement.png"
          alt=""
          style="width:50%;border-radius:8px;filter:drop-shadow(1px 1px 10px black)"
        />
      </p>
    </span>

    <Stats></Stats>

    <style>
      body {
        background: url("bg/back1.webp");
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
      .scroll {
        width: max-content;
      }
      .downloadButton {
        transition-duration: 0.3s;
        font-weight:bold;width:300px;height:80px;border:none;border-radius:10px;background-color:rgb(20,20,20, 0.5);backdrop-filter:blur(5px);font-size: 20px;
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
  </p>
</main>
