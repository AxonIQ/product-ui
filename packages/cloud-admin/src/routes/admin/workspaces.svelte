<script lang="ts" context="module">
import { fetchWrapper } from "src/services/fetchWrapper";

  export const load: import("@sveltejs/kit").Load = async ({session, fetch}) => {
    fetchWrapper.setFetchToUse(fetch);
    if (session.token) {
      fetchWrapper.setAuthorizationToken(session.token);
    }

    const spaces = await getAllSpaces();
    return {
      status: 200,
      props: {
        spaces
      },
    }
  }
</script>
<script lang="ts">
import { getAllSpaces } from "src/services/space";

export let spaces: Awaited<ReturnType<typeof getAllSpaces>>
</script>
    
<h1 class="text-2xl font-black mb-6">Workspaces</h1>
{#if spaces}
  <table class="min-w-full w-full table-fixed">
    <thead class="bg-peacock">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">Owner</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black"># Members</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black"># Contexts Created</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Billing Account</th>
      </tr>
    </thead>
    <tbody>
      {#each spaces as space, index}
        <tr class:bg-seal={index % 2 === 1}>
          <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{space.spaceOwner}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{space.name}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{space.accountMembers?.length}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{space.contextsCreated}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{space.billingAccountId}</td>
        </tr>
      {/each}

    </tbody>
  </table>
{/if}