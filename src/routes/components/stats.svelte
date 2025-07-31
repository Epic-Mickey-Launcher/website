<script lang="ts">
    import {GET} from "../library/networking"

    let mods = $state(0);
    let accounts = $state(0);

    $effect(async () => {
        let modCount = await GET("mod/count");
        let userCount = await GET("user/count");
        mods = Number(modCount);
        accounts = Number(userCount);
    });

</script>

<p>Mods Uploaded: {mods} | Accounts Registered: {accounts}</p>
<hr style="width:300px;"/>
<p>© 2025 Jonas Kalsvik</p>
