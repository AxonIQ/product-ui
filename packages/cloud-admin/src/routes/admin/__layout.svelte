<script lang="ts" context="module">
  export const load: import("@sveltejs/kit").Load = async ({session}) => {
    if (!session.roles?.includes('ROLE_USER')) {
      return {
        status: 302,
        redirect: '/login',
      }
    }
    return {
      status: 200
    }
  }
</script>

<script>
  import IconAccounts from "src/components/IconAccounts.svelte";
import IconDashboard from "src/components/IconDashboard.svelte";
  import IconDashboardLogo from "src/components/IconDashboardLogo.svelte";
  
  </script>
  <div class="flex">
    <div class="sticky left-0 top-0 min-w-[295px] h-screen bg-seal px-4 py-3 text-rhino text-sm shadow-float flex flex-col">
      <div class="mb-10">
        <IconDashboardLogo />
      </div>
      <div class="flex flex-col gap-5">
        <a href="/admin/dashboard" class="flex gap-4 items-center">
          <IconDashboard />
          <div>Dashboard</div>
        </a>
        <a href="/admin/accounts" class="flex gap-4 items-center">
          <IconAccounts />
          <div>Accounts</div>
        </a>
      </div>
      <div class="mt-auto">
        <a href="/logout">Logout</a>
      </div>
    </div>
    <div class="mx-16 mt-12 w-full">
      <slot />
    </div>
  </div>