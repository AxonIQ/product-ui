<script>
  import { browser } from '$app/env';
  import { parse } from 'cookie';
  import { fetchWrapper } from "src/services/fetchWrapper";
  import "../app.css";

  if (browser) {
    // client-only code here
    fetchWrapper.setFetchToUse(fetch);

    const cookie = parse(window.document.cookie)
      if (cookie.token) {
        fetchWrapper.setAuthorizationToken(cookie.token)
      }
  }
</script>

<slot />