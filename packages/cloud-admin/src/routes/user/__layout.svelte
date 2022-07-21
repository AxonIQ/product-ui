<script lang="ts" context="module">
  export const load: import("@sveltejs/kit").Load = async ({session}) => {
    if (!session.roles?.includes('ROLE_USER')) {
      return {
        status: 302,
        redirect: '/login',
      }
    }
    
    fetchWrapper.setFetchToUse(fetch);
    if (session.token) {
      fetchWrapper.setAuthorizationToken(session.token);
    }

    return {
      status: 200,
    }
  }
</script>

<script lang="ts">
  import { Dropdown,DropdownItem,DropdownItems,DropdownLabel } from '@axoniq-product-ui/core';
  import IconApplications from "src/components/IconApplications.svelte";
  import IconCluster from "src/components/IconCluster.svelte";
  import IconContexts from "src/components/IconContexts.svelte";
  import IconDashboard from "src/components/IconDashboard.svelte";
  import IconDashboardLogo from "src/components/IconDashboardLogo.svelte";
  import IconLogout from "src/components/IconLogout.svelte";
  import IconReplicationGroup from "src/components/IconReplicationGroup.svelte";
  import IconWorkspaces from "src/components/IconWorkspaces.svelte";
  import { fetchWrapper } from "src/services/fetchWrapper";
  import { subscribeToSpaces } from "src/services/space";
  import { onMount } from "svelte";
  
  onMount(async () => {
    const spaceUpdates = await subscribeToSpaces();

    spaceUpdates.subscribe('ADDED', (event) => console.log('added', event))
    spaceUpdates.subscribe('update', (event) => console.log('update', event))
    spaceUpdates.subscribe('UPDATED', (event) => console.log('updated', event))
    
    spaceUpdates.onError((error: any) => console.log('error!', error))
  })

  let selectedWorkspace = ''
  
</script>
  <div class="flex">
    <div class="sticky left-0 top-0 min-w-[295px] h-screen bg-seal px-4 py-3 text-rhino text-sm shadow-float flex flex-col">
      <div class="mb-10">
        <IconDashboardLogo />
      </div>
      <div>
        <Dropdown>
          <DropdownLabel>Workspace</DropdownLabel>
          <DropdownItems bind:value={selectedWorkspace}>
            <DropdownItem value="" hidden>Select a workspace</DropdownItem>
            <DropdownItem value={'Workspace 1'}>Workspace 1</DropdownItem>
            <DropdownItem value={'Workspace 2'}>Workspace 2</DropdownItem>
            <DropdownItem value={'Workspace 3'}>Workspace 3</DropdownItem>
            <DropdownItem value={'Reallly really really long text'}>Reallly really really long text</DropdownItem>
          </DropdownItems>
        </Dropdown>
      </div>
      <div class="flex flex-col gap-5">
        <a href="/user/dashboard" class="flex gap-4 items-center">
          <IconDashboard />
          <div>Dashboard</div>
        </a>
        <a href="/user/clusters" class="flex gap-4 items-center">
          <IconCluster />
          <div>Clusters</div>
        </a>
        <a href="/user/contexts" class="flex gap-4 items-center">
          <IconContexts />
          <div>Contexts</div>
        </a>
        <a href="/user/applications" class="flex gap-4 items-center">
          <IconApplications />
          <div>Applications</div>
        </a>
        <a href="/user/workspaces" class="flex gap-4 items-center">
          <IconWorkspaces />
          <div>Workspaces</div>
        </a>
        <a href="/user/replication-groups" class="flex gap-4 items-center">
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