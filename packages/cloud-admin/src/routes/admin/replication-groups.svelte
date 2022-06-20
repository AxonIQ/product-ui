<script lang="ts">
import { getAllReplicationGroups } from "src/services/replicationGroup";
import { onMount } from "svelte";

  let replicationGroups: Awaited<ReturnType<typeof getAllReplicationGroups>>
    
  onMount(async() => {
    replicationGroups = await getAllReplicationGroups();
  })
</script>
    
<h1 class="text-2xl font-black mb-6">Replication Groups</h1>
{#if replicationGroups}
  <table class="min-w-full w-full table-fixed">
    <thead class="bg-peacock">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Context Type</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black"># Contexts Created</th>
      </tr>
    </thead>
    <tbody>
      {#each replicationGroups as replicationGroup, index}
        <tr class:bg-seal={index % 2 === 1}>
          <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{replicationGroup.name}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{replicationGroup.contextType}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{replicationGroup.contextsCreated}</td>
        </tr>
      {/each}

    </tbody>
  </table>
{/if}