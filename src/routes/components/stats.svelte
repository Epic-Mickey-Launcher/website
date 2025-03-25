<script lang="ts">

    let mods = $state(0);
    let accounts = $state(0);

    $effect(async () => {
        let modCount = await GET("mod/count");
        let userCount = await GET("user/count");
        mods = Number(modCount);
        accounts = Number(userCount);
    });

    async function POST(route: string, data: any, isJson = false) {
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

    export async function GET(route) {
        const res = await fetch("https://emlapi.kalsvik.no/" + route);
        return await res.text();
    }
</script>

<p>Mods Uploaded: {mods} | Accounts Registered: {accounts}</p>
<hr style="width:300px;"/>
<p>© 2025 Jonas Kalsvik</p>
