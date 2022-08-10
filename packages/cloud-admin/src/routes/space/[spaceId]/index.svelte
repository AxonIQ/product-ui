<script lang="ts">
  import { page } from '$app/stores';

</script>
<h1>Hello</h1>

{#if $page.params?.spaceId}
  <h1 class="text-2xl font-black mb-6">Hello from {$page.params?.spaceId}</h1>
{/if}