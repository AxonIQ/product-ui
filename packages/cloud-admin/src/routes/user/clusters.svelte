<script lang="ts" context="module">
  export const load: import("@sveltejs/kit").Load = async ({session, fetch}) => {
    fetchWrapper.setFetchToUse(fetch);
    if (session.token) {
      fetchWrapper.setAuthorizationToken(session.token);
    }

    const clusters = await getAllClusters();
    return {
      status: 200,
      props: {
        clusters
      },
    }
  }
</script>
<script lang="ts">
  import { getAllClusters } from "src/services/cluster";
  import { fetchWrapper } from "src/services/fetchWrapper";

  export let clusters: Awaited<ReturnType<typeof getAllClusters>>
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