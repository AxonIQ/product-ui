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

<div class="mb-2 flex justify-between items-center mr-5">
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
<ul class="flex flex-col gap-3">
    {#each addedDependencies as addedDep (addedDep.id)}
        <li>
            <Card>
                <div class="grid grid-cols-[1fr_auto] gap-2">
                    <div class="font-bold">{addedDep.name}</div>
                    <div class="text-sm">
                        {addedDep.description}
                    </div>
                    <div class="col-start-2 row-start-1 row-span-2 self-center">
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
