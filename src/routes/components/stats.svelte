<script>
  import { onMount } from "svelte";

  let mods = 0;
  let accounts = 0;

  onMount(async () => {
    let modCount = await GET("mod/count");
    let userCount = await GET("user/count");
    mods = Number(modCount);
    accounts = Number(userCount);
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
  /**
   * @param {string} route
   */
  export async function GET(route) {
    const res = await fetch("https://emlapi.kalsvik.no/" + route);
    const content = await res.text();
    return content;
  }
</script>

<p>Mods Uploaded: {mods} | Accounts Registered: {accounts}</p>

<hr style="width:300px;" />
<p>© 2025 Jonas Kalsvik</p>
