<svelte:options accessors/>

<div style="grid-row:1;width:200px; height:300px; background: rgb(2,0,36);background: linear-gradient(39deg, rgba(2,0,36,1) 0%, rgba(29,29,29,1) 0%, rgba(89,89,89,1) 100%);border-radius:20px;filter:drop-shadow(0 0 5px black);text-align:center;align-self:center;display:inline-block;">
    <img style="margin-top:24px; width:150px; height:150px;border-radius:20px;filter:drop-shadow(0 0 2px black);" src={modimg}>
    <p>{modtitle}</p>
    <p style="font-size:10px;">{author}</p>
</div>

<script>
    export let author = "";
    export let modtitle = "";
    export let modimg = "";
</script>