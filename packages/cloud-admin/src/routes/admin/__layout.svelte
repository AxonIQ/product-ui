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
import IconApplications from "src/components/IconApplications.svelte";
  import IconCluster from "src/components/IconCluster.svelte";
import IconContexts from "src/components/IconContexts.svelte";
  import IconDashboard from "src/components/IconDashboard.svelte";
  import IconDashboardLogo from "src/components/IconDashboardLogo.svelte";
import IconLogout from "src/components/IconLogout.svelte";
import IconReplicationGroup from "src/components/IconReplicationGroup.svelte";
import IconWorkspaces from "src/components/IconWorkspaces.svelte";
  
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
        <a href="/admin/clusters" class="flex gap-4 items-center">
          <IconCluster />
          <div>Clusters</div>
        </a>
        <a href="/admin/contexts" class="flex gap-4 items-center">
          <IconContexts />
          <div>Contexts</div>
        </a>
        <a href="/admin/applications" class="flex gap-4 items-center">
          <IconApplications />
          <div>Applications</div>
        </a>
        <a href="/admin/workspaces" class="flex gap-4 items-center">
          <IconWorkspaces />
          <div>Workspaces</div>
        </a>
        <a href="/admin/replication-groups" class="flex gap-4 items-center">
          <IconReplicationGroup />
          <div>Replication Groups</div>
        </a>
      </div>
      <div class="mt-auto">
        <a href="/logout" class="flex gap-4 items-center">
          <IconLogout />
          <div>Logout</div>
        </a>
      </div>
    </div>
    <div class="mx-16 mt-12 w-full">
      <slot />
    </div>
  </div>