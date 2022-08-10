<script lang="ts">
  import { page } from '$app/stores';
  import { subscribeToContexts,type ContextDTO } from "src/services/context";
  import { formatDate } from "src/services/dateTimeFormatter";
import type { SSEConnection } from 'src/services/sse';
  import { onDestroy, onMount } from "svelte";

  let contexts: ContextDTO[] = []
  let contextUpdates: SSEConnection;

  onMount(async () => {
    contextUpdates = await subscribeToContexts($page.params?.spaceId);

    contextUpdates.subscribe('ADDED', (contextToAdd: ContextDTO) => {
      if (contexts.find(context => contextToAdd.contextId === context.contextId)) {
        return;
      }
      
      contexts = [
        ...contexts,
        contextToAdd
      ];
    })

    contextUpdates.subscribe('update', (event) => console.log('update', event))
    contextUpdates.subscribe('UPDATED', (event) => console.log('updated', event))
    
    contextUpdates.onError((error: any) => console.log('error!', error))
  })

  onDestroy(() => {
    if (contextUpdates) {
      contextUpdates.close();
    }
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