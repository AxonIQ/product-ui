<script lang="ts">
  import { page } from '$app/stores';
  import { subscribeToClusters,type ClusterDTO } from "src/services/cluster";
import type { SSEConnection } from 'src/services/sse';
  import { onDestroy, onMount } from "svelte";

  let clusters: ClusterDTO[] = []
  let clusterUpdates: SSEConnection;

  onMount(async () => {
    const clusterUpdates = await subscribeToClusters({spaceId: $page.params?.spaceId});

    clusterUpdates.subscribe('ADDED', (clusterToAdd: ClusterDTO) => {
      if (clusters.find(cluster => clusterToAdd.id === cluster.id)) {
        return;
      }
      
      clusters = [
        ...clusters,
        clusterToAdd
      ];
    })

    clusterUpdates.subscribe('update', (event) => console.log('update', event))
    clusterUpdates.subscribe('UPDATED', (event) => console.log('updated', event))
    
    clusterUpdates.onError((error: any) => console.log('error!', error))
  })

  onDestroy(() => {
    if (clusterUpdates) {
      clusterUpdates.close();
    }
  })
</script>
  
<h1 class="text-2xl font-black mb-6">Clusters</h1>
{#if clusters}
  <table class="min-w-full">
    <thead class="bg-peacock">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">Cluster Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Cluster ID</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Status</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Type</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Region</th>
      </tr>
    </thead>
    <tbody>
      {#each clusters as cluster, index}
        <tr class:bg-seal={index % 2 === 1}>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{cluster.clusterName}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cluster.id}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cluster.clusterStatus}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cluster.clusterType}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cluster.clusterRegion}</td>
        </tr>
      {/each}

    </tbody>
  </table>
{/if}