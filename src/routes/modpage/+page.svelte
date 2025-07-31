<script lang="ts">

    interface Mod {
  		ID: string;
  		Author: string;
  		Version: number;
  		Video: string;
 		Game: string;
  		Platform: string;
  		Downloads: number;
  		Published: boolean;
  		Name: string;
  		Description: string;
 	 	Dependencies: string[];
  		CachedLikes: number;
  		Verified: boolean;
    }

    import Stats from "../components/stats.svelte";
    import { POST, GET, GetImagePath, ImageType, SERVER_URL } from "../library/networking"

    let modData: Mod = $state();

    $effect(async () => {
	const urlParams = new URLSearchParams(window.location.search);
	if (!urlParams.has("id")) 
		    return
	const id = urlParams.get("id");
	modData = await POST("mod/get", {ID: id}, true);
    })

    function OpenWithEML() {
	window.open("eml://openmod?id=" + modData.ID, "_blank")
    }

    function DownloadDirect() {
	window.open(SERVER_URL + "mod/download?id=" + modData.ID, "_blank")
    }

    
</script>

<svelte:head>
{#if modData != null} 
	<meta content={modData.Name} property="og:title" />
	<meta content={modData.Description} property="og:description" />
	<meta content={SERVER_URL + "mod/download?id=" + modData.ID} property="og:image" />
	<meta content="#c021d8" data-react-helmet="true" name="theme-color" />
{/if}
</svelte:head>

{#if modData != null} 

	<h1>{modData.Name}</h1>

	<img style="width:128px;" src={GetImagePath(modData.ID, ImageType.Mod)} alt="mod icon">
	<br/>

	<button onclick={DownloadDirect} style="width:128px;">Download Directly</button>
		<br/>
	<button onclick={OpenWithEML} style="background-color: purple;width:128px;">Open with EML</button>
	
	<p></p>

	<span style="justify-content:center; display: flex;">
		<div style="word-wrap: break-word;max-width:700px; min-width:200px; text-align:left;padding:10px;background-color: rgb(20, 20, 20); border-radius: 5px;">
		<span style="">
		{modData.Description}
		</span>
		</div>
	</span>

	<p></p>

	<span>Downloads: {modData.Downloads} | Likes: {modData.CachedLikes}</span>

	<p></p>
{:else}
<h1>Loading...</h1>
{/if}

<hr>


<Stats></Stats>

<style>


button {
background-color: rgb(20, 20, 20);
	border-radius: 2px;
	border:none;
}

</style>
