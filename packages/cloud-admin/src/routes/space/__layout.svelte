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
  import { subscribeToSpaces, type SpaceDTO } from "src/services/space";
  import { onMount } from "svelte";

  let spaces: SpaceDTO[] = []
  let selectedWorkspace = ''
  
  onMount(async () => {
    const spaceUpdates = await subscribeToSpaces();

    spaceUpdates.subscribe('ADDED', (spaceToAdd: SpaceDTO) => {
      if (spaces.find(space => spaceToAdd.id === space.id)) {
        return;
      }
      
      spaces = [
        ...spaces,
        spaceToAdd
      ];
    })

    spaceUpdates.subscribe('update', (event) => console.log('update', event))
    spaceUpdates.subscribe('UPDATED', (event) => console.log('updated', event))
    
    spaceUpdates.onError((error: any) => console.log('error!', error))
  })
  
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
            {#each spaces as space}
              <DropdownItem value={space.id}>{space.name}</DropdownItem>
            {/each}
          </DropdownItems>
        </Dropdown>
      </div>
      <div class="flex flex-col gap-5">
        <a href="space/dashboard" class="flex gap-4 items-center">
          <IconDashboard />
          <div>Dashboard</div>
        </a>
        <a href="space/clusters" class="flex gap-4 items-center">
          <IconCluster />
          <div>Clusters</div>
        </a>
        <a href="space/contexts" class="flex gap-4 items-center">
          <IconContexts />
          <div>Contexts</div>
        </a>
        <a href="space/applications" class="flex gap-4 items-center">
          <IconApplications />
          <div>Applications</div>
        </a>
        <a href="space/workspaces" class="flex gap-4 items-center">
          <IconWorkspaces />
          <div>Workspaces</div>
        </a>
        <a href="space/replication-groups" class="flex gap-4 items-center">
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