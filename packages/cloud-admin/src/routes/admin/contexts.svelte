<script lang="ts" context="module">
  export const load: import("@sveltejs/kit").Load = async ({session, fetch}) => {
    fetchWrapper.setFetchToUse(fetch);
    if (session.token) {
      fetchWrapper.setAuthorizationToken(session.token);
    }

    const contexts = await getAllContexts();
    return {
      status: 200,
      props: {
        contexts
      },
    }
  }
</script>
<script lang="ts">
import { getAllContexts } from "src/services/context";
import { formatDate } from "src/services/dateTimeFormatter";
import { fetchWrapper } from "src/services/fetchWrapper";
import { onMount } from "svelte";

export let contexts: Awaited<ReturnType<typeof getAllContexts>>

// export let contexts: Awaited<ReturnType<typeof getAllContexts>>

onMount(async() => {
  const tempContexts = await getAllContexts();
})
</script>

<h1 class="text-2xl font-black mb-6">Contexts</h1>
{#if contexts}
  <table class="min-w-full">
    <thead class="bg-peacock">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">Context Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Context ID</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Status</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Type</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Region</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Creation Date</th>
      </tr>
    </thead>
    <tbody>
      {#each contexts as context, index}
        <tr class:bg-seal={index % 2 === 1}>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{context.contextName}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{context.contextId}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{context.contextStatus}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{context.type}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{context.region}</td>
          {#if context.creationTime && context.creationTime.length > 0}
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDate(context.creationTime)}</td>
          {/if}
        </tr>
      {/each}

    </tbody>
  </table>
{/if}