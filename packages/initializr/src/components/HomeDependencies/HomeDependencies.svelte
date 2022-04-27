<script lang="ts">
import { Card } from '@axoniq-product-ui/core';
import type { DataDependencies,DependenciesValue } from "../../dataTypes";
import HomeAddDependancyDialog from '../HomeAddDependencyDialog/HomeAddDependancyDialog.svelte';
import IconButtonPlus from '../IconButtonPlus/IconButtonPlus.svelte';
import IconButtonTrash from '../IconButtonTrash/IconButtonTrash.svelte';

export let dependencyData: DataDependencies;
export let addedDependencies: DependenciesValue[] = [];

let addDependenciesVisible = false;

const removeDependency = (currentDependency) => addedDependencies = addedDependencies.filter(dep => dep.id !== currentDependency.id)
</script>

<div class="home-dependencies__heading">
    <div class="text-xl font-bold">Dependencies</div>
    <IconButtonPlus onClick={() => addDependenciesVisible = true}/>

    <HomeAddDependancyDialog
        {dependencyData}
        {addedDependencies}
        onAddDependency={(dependencyItem) => {addedDependencies = [...addedDependencies, dependencyItem]}}
        onRemoveDependency={(dependencyItem) => removeDependency(dependencyItem)}
        bind:visible={addDependenciesVisible}
    />
</div>
<ul class="home-dependencies__list">
    {#each addedDependencies as addedDep (addedDep.id)}
        <li>
            <Card>
                <div class="home-dependencies__item">
                    <div class="font-bold">{addedDep.name}</div>
                    <div class="text-sm">
                        {addedDep.description}
                    </div>
                    <div class="home-dependencies__remove-button">
                        <IconButtonTrash
                            disabled={['axon-starter', 'axon-test'].indexOf(addedDep.id) > -1}
                            onClick={() => removeDependency(addedDep)}
                        />
                    </div>
                </div>
            </Card>
        </li>
    {/each}
</ul>

<style lang="scss">
    .home-dependencies__heading {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 25px;
    }
    .home-dependencies__list {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        row-gap: 10px;
    }
    .home-dependencies__item {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 10px;
    }
    .home-dependencies__remove-button {
        grid-column: 2;
        grid-row: 1 / span 2;
        align-self: center;
    }
</style>
