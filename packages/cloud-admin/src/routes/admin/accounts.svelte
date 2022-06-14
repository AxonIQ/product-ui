<script lang="ts">
import { getAllAccounts } from "src/services/account";
import { onMount } from "svelte";
  // export let accounts;
  let accounts: Awaited<ReturnType<typeof getAllAccounts>>
  
  onMount(async() => {
    accounts = await getAllAccounts();
    console.log(accounts);
  })

</script>

<h1 class="text-2xl font-black mb-6">Accounts</h1>
{#if accounts}
  <table class="min-w-full">
    <thead class="bg-peacock">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">First Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Last Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Email</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Organization</th>
        <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Role</th>
      </tr>
    </thead>
    <tbody>
      {#each accounts as account, index}
        <tr class:bg-seal={index % 2 === 1}>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{account.details?.firstName}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{account.details?.lastName}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{account.details?.email}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{account.details?.organisationName}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{account.details?.role}</td>
        </tr>
      {/each}

    </tbody>
  </table>
{/if}