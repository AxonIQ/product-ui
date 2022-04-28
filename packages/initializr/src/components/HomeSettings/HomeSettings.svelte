<script lang="ts">
import { Radio, Dropdown, DropdownItems, DropdownLabel, DropdownItem } from '@axoniq-product-ui/core';
import type { DataType,SettingsItem } from "../../dataTypes";

    export let projectTypeData: DataType;
    export let projectTypeSelected = '';

    export let projectLanguageData: SettingsItem;
    export let projectLanguageSelected = '';
    
    export let projectJavaVersionData: SettingsItem;
    export let projectJavaVersionSelected = '';

    export let projectPackagingData: SettingsItem;
    export let projectPackagingSelected = '';

    export let projectUsingAxonServer = 'EE';

    export let projectAxonServerContext = '';

</script>

<div class="mb-14">
    <div class="flex items-center mb-2 h-12">
        <div class="text-xl font-bold">Settings</div>
    </div>
    <div class="flex flex-col gap-6 justify-center">
        <Dropdown>
            <DropdownLabel>Project</DropdownLabel>
            <DropdownItems bind:value={projectTypeSelected}>
                {#each projectTypeData.values as projectTypeItem (projectTypeItem.id) }
                    {#if projectTypeItem.tags.format === "project"}
                        <DropdownItem value={projectTypeItem.id}>{projectTypeItem.name}</DropdownItem>
                    {/if}
                {/each}
            </DropdownItems>
        </Dropdown>
        <Dropdown>
            <DropdownLabel>Language</DropdownLabel>
            <DropdownItems bind:value={projectLanguageSelected}>
                {#each projectLanguageData.values as projectLanguageItem (projectLanguageItem.id) }
                    <DropdownItem value={projectLanguageItem.id}>{projectLanguageItem.name}</DropdownItem>
                {/each}
            </DropdownItems>
        </Dropdown>
        <Dropdown>
            <DropdownLabel>Java</DropdownLabel>
            <DropdownItems bind:value={projectJavaVersionSelected}>
                {#each projectJavaVersionData.values as projectJavaVersionItem (projectJavaVersionItem.id) }
                    <DropdownItem value={projectJavaVersionItem.id}>{projectJavaVersionItem.name}</DropdownItem>
                {/each}
            </DropdownItems>
        </Dropdown>
        <Dropdown>
            <DropdownLabel>Packaging</DropdownLabel>
            <DropdownItems bind:value={projectPackagingSelected}>
                {#each projectPackagingData.values as projectPackagingItem (projectPackagingItem.id) }
                    <DropdownItem value={projectPackagingItem.id}>{projectPackagingItem.name}</DropdownItem>
                {/each}
            </DropdownItems>
        </Dropdown>
    </div>
</div>