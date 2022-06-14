<script>
import IconAccounts from "src/components/IconAccounts.svelte";
import IconDashboardLogo from "src/components/IconDashboardLogo.svelte";

</script>
<div class="flex">
  <div class="min-w-[295px] h-screen bg-seal px-4 py-3 text-rhino text-sm shadow-float flex flex-col">
    <div class="mb-10">
      <IconDashboardLogo />
    </div>
    <div class="flex flex-col gap-5">
      <a href="/accounts" class="flex gap-4 items-center">
        <IconAccounts />
        <div>Accounts</div>
      </a>
    </div>
    <div class="mt-auto">
      <a href="/logout">Logout</a>
    </div>
  </div>
  <div class="mx-16 mt-12 w-full">
    <h1 class="text-2xl font-black mb-6">Dashboard</h1>

    <table class="min-w-full">
      <thead class="bg-peacock">
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-dove text-sm font-black sm:pl-6">Name</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Context ID</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Status</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Expiry</th>
          <th scope="col" class="px-3 py-3.5 text-left text-dove text-sm font-black">Credits</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
          </td>
        </tr>
        <tr class="bg-seal">
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
          </td>
        </tr>
        <tr>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
          </td>
        </tr>
        <tr class="bg-seal">
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
          </td>
        </tr>
        <tr>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
          </td>
        </tr>

        <!-- More people... -->
      </tbody>
    </table>
  </div>
</div>