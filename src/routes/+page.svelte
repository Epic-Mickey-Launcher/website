<script>
  import { onMount } from "svelte";
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

  let rand = Math.floor(Math.random() * bgs.length);

  let randquote = Math.floor(Math.random() * quotes.length);

  let curquote = quotes[randquote];
  /**
   * @type {any[]}
   */

  onMount(async () => {
    document.body.style.background =
      "url(bg/" + bgs[rand] + ") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  });

  /**
   * @param {string} route
   * @param {any} data
   */
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
      const content = await res.json();
      return content;
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
    <h1>{curquote}</h1>
    <a href="" on:click={() => window.open("/download", "_self")}
      >Download Here</a
    >
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
        transform: scale(1.1);
      }
      .scroll {
        width: max-content;
      }
    </style>
  </p>
</main>
