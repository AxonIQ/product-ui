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
  import IconDashboardLogo from "src/components/IconDashboardLogo.svelte";
  import IconLogout from "src/components/IconLogout.svelte";
  import { fetchWrapper } from "src/services/fetchWrapper";
  import { subscribeToSpaces,type SpaceDTO } from "src/services/space";
import type { SSEConnection } from 'src/services/sse';
  import { onDestroy, onMount } from "svelte";

  let spaces: SpaceDTO[] = []
  let selectedWorkspace = ''
  let spaceUpdates: SSEConnection;
  
  onMount(async () => {
    spaceUpdates = await subscribeToSpaces();

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

  onDestroy(() => {
    if (spaceUpdates) {
      spaceUpdates.close();
    }
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
          <DropdownItems
            bind:value={selectedWorkspace}
            on:change={() => {
              window.location.href = `/space/${selectedWorkspace}/dashboard`;
            }}>
            <DropdownItem value="" hidden>Select a workspace</DropdownItem>
            {#each spaces as space}
              <DropdownItem value={space.id}>{space.name}</DropdownItem>
            {/each}
          </DropdownItems>
        </Dropdown>
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