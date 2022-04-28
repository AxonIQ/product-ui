<script lang="ts">
import { Card,Radio } from '@axoniq-product-ui/core';
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
    <div class="grid grid-cols-[auto_1fr] grid-flow-row gap-6 justify-center">
        
        <div class="text-sm">Project</div>
        <div class="flex flex-col gap-2">
            {#each projectTypeData.values as projectTypeItem (projectTypeItem.id) }
                {#if projectTypeItem.tags.format === "project"}
                    <Radio
                        value={projectTypeItem.id}
                        name="projectType"
                        bind:group={projectTypeSelected}
                    >
                        <div class="text-sm">{projectTypeItem.name}</div>
                    </Radio>
                {/if}
            {/each}
        </div>

        <div class="text-sm">Language</div>
        <div class="flex flex-col gap-2">
            {#each projectLanguageData.values as projectLanguageItem (projectLanguageItem.id) }
                <Radio
                    value={projectLanguageItem.id}
                    name="projectLanguage"
                    bind:group={projectLanguageSelected}
                >
                    <div class="text-sm">{projectLanguageItem.name}</div>
                </Radio>
            {/each}
        </div>

        <div class="text-sm">Java</div>
        <div class="flex flex-col gap-2">
            {#each projectJavaVersionData.values as projectJavaVersionItem (projectJavaVersionItem.id) }
                <Radio
                    value={projectJavaVersionItem.id}
                    name="projectJavaVersion"
                    bind:group={projectJavaVersionSelected}
                >
                    <div class="text-sm">{projectJavaVersionItem.name}</div>
                </Radio>
            {/each}
        </div>

        <div class="text-sm">Packaging</div>
        <div class="flex flex-col gap-2">
            {#each projectPackagingData.values as projectPackagingItem (projectPackagingItem.id) }
                <Radio
                    value={projectPackagingItem.id}
                    name="projectPackaging"
                    bind:group={projectPackagingSelected}
                >
                    <div class="text-sm">{projectPackagingItem.name}</div>
                </Radio>
            {/each}
        </div>
    </div>
</div>