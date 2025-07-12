<script lang="ts">
  import Stats from "../components/stats.svelte";

  let bgs = ["download/back1.jpg", "download/back2.jpg", "download/back3.png", "download/back4.png", "download/back5.png", "download/back6.png", "download/back7.png", "download/back8.png", "download/back9.png", "download/back10.png", "download/back11.png", "download/back12.png", "download/back13.png", "download/back14.png", "download/back16.jpg"];
    let rand = Math.floor(Math.random() * bgs.length);

    let tag_name = $state("");
    let download_url = $state("");
    let stability = $state("stable");
    let memberCount = $state(0);
    let memberCountSuffix = $state("")

    $effect(() => {
        document.body.style.background =
            "url(bg/" + bgs[rand] + ") no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        fetch("https://api.github.com/repos/Epic-Mickey-Launcher/launcher/releases")
            .then((response) => response.json())
            .then((json) => {
                tag_name = json[0].tag_name;
                download_url = json[0].html_url;
                if (json[0].prerelease) {
                    stability = "unstable";
                }
            });

        fetch("https://emlapi.kalsvik.no/user/count").then(async (response) => {
            let count = await response.text();
            memberCount = Number(count);

	    let futureMemberCount = (memberCount + 1).toString();
	    if (futureMemberCount.endsWith("1")) {
		memberCountSuffix = "st";
	    }
	    else if (futureMemberCount.endsWith("2")) {
		memberCountSuffix = "nd";
	    }
	    else if (futureMemberCount.endsWith("3")) {
		memberCountSuffix = "rd";
	    }
	    else {
		memberCountSuffix = "th";
	    }
	    
        });
    });

</script>

<svelte:head>
    <title>Download</title>
</svelte:head>

<main style="display:flex;justify-content:center;height:80vh;">
    <div>
        <h1>Download</h1>
        <h4>Become our {memberCount + 1}{memberCountSuffix} member today!</h4>
        <p></p>
        <button class="downloadButton" onclick={() => window.open(download_url)}
        >Download Latest Version ({tag_name} {stability})
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

<Stats></Stats>

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

