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
</script>

<div class="home-settings">
    <div class="home-settings__heading">
        <div class="text-xl font-bold">Settings</div>
    </div>
    <Card>
        <div class="home-settings__items">
            
            <div class="text-sm">Project</div>
            <div class="home-settings__radio-wrapper">
                {#each projectTypeData.values as projectTypeItem (projectTypeItem.id) }
                    {#if projectTypeItem.tags.format === "project"}
                        <Radio
                            value={projectTypeItem.id}
                            name="projectType"
                            bind:group={projectTypeSelected}
                        >
                            {projectTypeItem.name}
                        </Radio>
                    {/if}
                {/each}
            </div>

            <div class="text-sm">Language</div>
            <div class="home-settings__radio-wrapper">
                {#each projectLanguageData.values as projectLanguageItem (projectLanguageItem.id) }
                    <Radio
                        value={projectLanguageItem.id}
                        name="projectLanguage"
                        bind:group={projectLanguageSelected}
                    >
                        {projectLanguageItem.name}
                    </Radio>
                {/each}
            </div>

            <div class="text-sm">Java</div>
            <div class="home-settings__radio-wrapper">
                {#each projectJavaVersionData.values as projectJavaVersionItem (projectJavaVersionItem.id) }
                    <Radio
                        value={projectJavaVersionItem.id}
                        name="projectJavaVersion"
                        bind:group={projectJavaVersionSelected}
                    >
                        {projectJavaVersionItem.name}
                    </Radio>
                {/each}
            </div>

            <div class="text-sm">Packaging</div>
            <div class="home-settings__radio-wrapper">
                {#each projectPackagingData.values as projectPackagingItem (projectPackagingItem.id) }
                    <Radio
                        value={projectPackagingItem.id}
                        name="projectPackaging"
                        bind:group={projectPackagingSelected}
                    >
                        {projectPackagingItem.name}
                    </Radio>
                {/each}
            </div>
        </div>
    </Card>
</div>

<style lang="scss">
    .home-settings {
        margin-bottom: 60px;
    }
    .home-settings__heading {
        display: flex;
        align-items: center;
        height: 48px;
        margin-bottom: 10px;
    }
    .home-settings__items {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-flow: row;
        grid-gap: 24px;

        justify-content: center;
    }
    .home-settings__radio-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>