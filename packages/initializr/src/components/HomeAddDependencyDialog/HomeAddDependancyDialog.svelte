<script lang="ts">
import { Card,Dialog,Search } from '@axoniq-product-ui/core';
import Fuse from 'fuse.js';
import type { DataDependencies,DependenciesValue } from "../../dataTypes";

export let visible = false;
export let dependencyData: DataDependencies;
export let addedDependencies: DependenciesValue[];
export let onAddDependency: (dependencyItem: DependenciesValue) => void;
export let onRemoveDependency: (dependencyItem: DependenciesValue) => void;

let searchResult = dependencyData.values;
let searchInput = '';

const searchOptions = {
    includeMatches: true,
    includeScore: true,
    keys: ['name', 'values.name'],
}
const fuse = new Fuse(dependencyData.values, searchOptions)

$: {
    if (searchInput.length === 0) {
        searchResult = dependencyData.values;
    } else {
        const fuseSearchResult = fuse.search(searchInput);
        searchResult = [];
        
        searchResult = fuseSearchResult.map(fuseResult => {
            const values = [];

            // If we match the entire group, we add the entire group to the result list.
            if (fuseResult.matches[0].key === 'name') {
                return {
                    name: fuseResult.item.name,
                    values: fuseResult.item.values,
                }
            }

            // Otherwise just get the items of that group, which match the search.
            fuseResult.matches.forEach(match => {
                values.push(fuseResult.item.values[match.refIndex]);
            });

            return {
                name: fuseResult.item.name,
                values,
            }
        });
    }
}

$: dependencyAlreadyAdded = (dependencyItem: DependenciesValue) => {
    const dependencyObject = addedDependencies.find(addedDep => addedDep.id === dependencyItem.id);
    return !!(dependencyObject && dependencyObject.id);
}

</script>

<Dialog
    open={visible}
    onClose={() => visible = false}
>
    <div slot="title">
        <div class="text-xl font-bold">Add dependencies</div>
    </div>
    <Search
        placeholder="Web, Security, JPA, Actuator, Devtools..."
        bind:value={searchInput}
    />

    <ul class="mt-6 overflow-auto max-h-[60vh] flex flex-col gap-8">
        {#each searchResult as dependencyDataItemWithName (dependencyDataItemWithName.name) }
            <li class="flex flex-col gap-4 mx-1 mb-1">
                <div class="font-bold">{dependencyDataItemWithName.name}</div>
                <ul class="flex flex-col gap-4">
                    {#each dependencyDataItemWithName.values as dependencyItem (dependencyItem.id)}
                        <li>
                            <Card>
                                <div class="flex justify-between">
                                    <div
                                        class="font-bold mb-4"
                                        class:opacity-70={['axon-starter', 'axon-test'].indexOf(dependencyItem.id) > -1}>
                                        {dependencyItem.name}
                                    </div>
                                    {#if dependencyAlreadyAdded(dependencyItem)}
                                        <button
                                            class="fill-dove disabled:bg-rhino disabled:opacity-50 bg-fox rounded-full w-6 h-6 flex items-center justify-center"
                                            disabled={['axon-starter', 'axon-test'].indexOf(dependencyItem.id) > -1}
                                            on:click={() => onRemoveDependency(dependencyItem)}
                                        >
                                            <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
                                                <path d="M6.46291 5L8.80666 2.65625C9.11135 2.375 9.11135 1.90625 8.80666 1.625L8.29104 1.10938C8.00979 0.804688 7.54104 0.804688 7.25979 1.10938L4.91604 3.45312L2.54885 1.10938C2.2676 0.804688 1.79885 0.804688 1.5176 1.10938L1.00197 1.625C0.697287 1.90625 0.697287 2.375 1.00197 2.65625L3.34572 5L1.00197 7.36719C0.697287 7.64844 0.697287 8.11719 1.00197 8.39844L1.5176 8.91406C1.79885 9.21875 2.2676 9.21875 2.54885 8.91406L4.91604 6.57031L7.25979 8.91406C7.54104 9.21875 8.00979 9.21875 8.29104 8.91406L8.80666 8.39844C9.11135 8.11719 9.11135 7.64844 8.80666 7.36719L6.46291 5Z"/>
                                            </svg>
                                        </button>
                                    {:else}
                                        <button
                                            class="fill-dove bg-gecko rounded-full w-6 h-6 flex items-center justify-center"
                                            on:click={() => onAddDependency(dependencyItem)}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
                                                <path d="M10.416 4.875H7.04104V1.5C7.04104 1.10156 6.68947 0.75 6.29104 0.75H5.54104C5.11916 0.75 4.79104 1.10156 4.79104 1.5V4.875H1.41604C0.994162 4.875 0.666037 5.22656 0.666037 5.625V6.375C0.666037 6.79688 0.994162 7.125 1.41604 7.125H4.79104V10.5C4.79104 10.9219 5.11916 11.25 5.54104 11.25H6.29104C6.68947 11.25 7.04104 10.9219 7.04104 10.5V7.125H10.416C10.8145 7.125 11.166 6.79688 11.166 6.375V5.625C11.166 5.22656 10.8145 4.875 10.416 4.875Z" />
                                            </svg>
                                        </button>
                                    {/if}
                                </div>
                                <p
                                    class="text-sm pr-6"
                                    class:opacity-70={['axon-starter', 'axon-test'].indexOf(dependencyItem.id) > -1}
                                >{dependencyItem.description}</p>
                            </Card>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</Dialog>
