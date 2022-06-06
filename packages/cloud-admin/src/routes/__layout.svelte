<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { parse } from 'cookie';

  import "../app.css";
import { fetchWrapper } from "src/services/fetchWrapper";
  onMount(({}) => {
    const cookie = parse(window.document.cookie)
    if (cookie.token) {
      fetchWrapper.setAuthorizationToken(cookie.token)
    }
  })
</script>

<slot />