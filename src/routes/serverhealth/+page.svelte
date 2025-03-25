<script lang="ts">
    import Stats from "../components/stats.svelte";

    let status = $state("Getting Status...");
    let ping = $state(0);

    async function SetData() {
        try {
            let time_at_send = new Date();
            let response = await fetch("https://emlapi.kalsvik.no/server/ping");
            let time_at_receive = new Date(Number(response));
            let ms = time_at_send.getTime() - time_at_receive.getTime();
            ping = new Date(ms).getMilliseconds();
            status = "Healthy!";
        } catch {
            status = "Cannot Contact!";
        }
    }

    $effect(() => {
        SetData();
    });
</script>

<h1>{status}</h1>
<h2>Ping: {ping}ms</h2>
<Stats></Stats>

