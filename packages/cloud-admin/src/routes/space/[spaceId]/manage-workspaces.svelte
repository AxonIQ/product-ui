<script lang="ts" context="module">

  export const load: import("@sveltejs/kit").Load = async ({params, session}) => {
    const members = await getMembersFromSpace({spaceId: params?.spaceId});
    return {
      status: 200,
      props: {
        members
      },
    }
  }
</script>
<script lang="ts">
import { getMembersFromSpace } from "src/services/space";

export let members: Awaited<ReturnType<typeof getMembersFromSpace>>

</script>
    
<h1 class="text-2xl font-black mb-6">Workspaces members</h1>
{#if members}
  <table class="min-w-full w-full table-fixed">
    <thead class="bg-peacock">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">First Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Last Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Email</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Role</th>
      </tr>
    </thead>
    <tbody>
      {#each members as member, index}
        <tr class:bg-seal={index % 2 === 1}>
          <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{member.firstName}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{member.lastName}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{member.email}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{member.role}</td>
        </tr>
      {/each}

    </tbody>
  </table>
{/if}