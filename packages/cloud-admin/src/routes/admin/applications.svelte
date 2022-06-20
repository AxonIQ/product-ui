<script lang="ts">
import { getAllApplications } from "src/services/application";
  import { onMount } from "svelte";
    let applications: Awaited<ReturnType<typeof getAllApplications>>
    
    onMount(async() => {
      applications = await getAllApplications();
    })
  
  </script>
  
  <h1 class="text-2xl font-black mb-6">Applications</h1>
  {#if applications}
    <table class="min-w-full w-full table-fixed">
      <thead class="bg-peacock">
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">Account ID</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Application ID</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Application Name</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Contexts</th>
        </tr>
      </thead>
      <tbody>
        {#each applications as application, index}
          <tr class:bg-seal={index % 2 === 1}>
            <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{application.accountId}</td>
            <td class="px-3 py-4 text-sm text-gray-500">{application.applicationId}</td>
            <td class="px-3 py-4 text-sm text-gray-500">{application.applicationName}</td>
            <td class="px-3 py-4 text-sm text-gray-500">{application.contextIds?.join('\n')}</td>
          </tr>
        {/each}
  
      </tbody>
    </table>
  {/if}