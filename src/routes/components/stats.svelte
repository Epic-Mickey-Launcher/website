<script lang="ts">
    import {GET} from "../library/networking"

    let mods = $state(0);
    let accounts = $state(0);
    let visible = $state(false)

    $effect(async () => {
        let modCount = await GET("mod/count");
        let userCount = await GET("user/count");
        mods = Number(modCount);
        accounts = Number(userCount);
	visible = true;
    });

</script>


{#if visible}
<p style="text-align: center;">Mods Uploaded: {mods} | Accounts Registered: {accounts}</p>
<hr style="width:300px;"/>
<p style="text-align: center;">© 2025 Jonas Kalsvik</p>
{/if}
