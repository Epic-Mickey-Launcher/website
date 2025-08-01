<script lang="ts">
  import Stats from "../components/stats.svelte";
  import {downloadPageBackgrounds} from "../library/backgrounds.ts";
    import type { PageProps } from './$types';
    let rand = Math.floor(Math.random() * downloadPageBackgrounds.length);

    let {data}: PageProps = $props();
    let memberCount = $state(data.formattedMemberCount);
    let releaseInfo = $state(data.releaseInfo);

    $effect(() => {
        document.body.style.background =
            "url(bg/" + downloadPageBackgrounds[rand].src + ") no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
  })
</script>

<svelte:head>
    <title>Download</title>
</svelte:head>

<main style="display:flex;justify-content:center;height:80vh;">
    <div>
        <h1>Download</h1>
        <h4>Become our {memberCount} member today!</h4>
        <p></p>
        <button class="downloadButton" onclick={() => window.open(releaseInfo.download_url)}
        >Download Latest Version ({releaseInfo.tag_name} {releaseInfo.stability})
        </button
        >
        <p></p>
        <button
                class="downloadButton"
                onclick={() =>
        window.open(
          "https://github.com/Epic-Mickey-Launcher/launcher/releases",
        )}>Other Releases
        </button
        >
    </div>
</main>

<span style="position: fixed; bottom: 0px; left:0px;background-color: rgba(30, 30, 30, 0.5);">{downloadPageBackgrounds[rand].credit}</span>


<style>
    .downloadButton {
        border: none;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.459);
        padding: 30px 50px;
        border-radius: 10px;
        transition-duration: 0.2s;
    }

    .downloadButton:hover {
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.685);
    }
</style>

