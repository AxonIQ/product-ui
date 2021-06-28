<script lang="ts">
import { Card, Dialog, Input, Typography } from '@axoniq-product-ui/core';

import type { DataDependencies, DependenciesValue } from "../../dataTypes";
import IconButtonClear from "../IconButonClear/IconButtonClear.svelte";
import IconButtonPlus from '../IconButtonPlus/IconButtonPlus.svelte';
import IconButtonTrash from '../IconButtonTrash/IconButtonTrash.svelte';
import Fuse from 'fuse.js';

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
    <div class="home-add-dependency-dialog__top-bar">
        <Typography size="xl" weight="bold">Add dependencies</Typography>
        
        <div class="home-add-dependency-dialog__search-input">
            <Input
                placeholder="Web, Security, JPA, Actuator, Devtools..."
                bind:value={searchInput}
            />
            <IconButtonClear onClick={() => searchInput = ''}/>
        </div>
    </div>

    <ul class="home-add-dependency-dialog__group-list">
        {#each searchResult as dependencyDataItemWithName (dependencyDataItemWithName.name) }
            <li class="home-add-dependency-dialog__group-item">
                <Typography weight="bold">{dependencyDataItemWithName.name}</Typography>
                <ul class="home-add-dependency-dialog__item-list">
                    {#each dependencyDataItemWithName.values as dependencyItem (dependencyItem.id)}
                        <li>
                            <Card>
                                <div class="home-add-dependency-dialog__item-card">
                                    <Typography weight="bold">{dependencyItem.name}</Typography>
                                    <Typography size="s">
                                        {dependencyItem.description}
                                    </Typography>
                                    <div class="home-add-dependency-dialog__button">
                                        {#if dependencyAlreadyAdded(dependencyItem)}
                                            <IconButtonTrash
                                                disabled={['axon-starter', 'axon-test'].indexOf(dependencyItem.id) > -1}
                                                onClick={() => onRemoveDependency(dependencyItem)}
                                            />
                                        {:else}
                                            <IconButtonPlus
                                                onClick={() => onAddDependency(dependencyItem)}
                                            />
                                        {/if}
                                    </div>
                                </div>
                            </Card>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</Dialog>

<style lang="scss">
    @use "~@axoniq-product-ui/core/stylesheets/colors.scss";
    
    .home-add-dependency-dialog__top-bar {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .home-add-dependency-dialog__search-input {
        display: flex;
        flex-shrink: 0;
        gap: 10px;
        align-items: center;
    }
    .home-add-dependency-dialog__group-list {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        overflow: auto;
        min-height: 640px;
        max-height: 640px;
    }
    .home-add-dependency-dialog__group-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 1px;
        margin-right: 1px;
        margin-bottom: 1px;
        &:not(:last-of-type) {
            margin-bottom: 18px;
        }
    }
    .home-add-dependency-dialog__item-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .home-add-dependency-dialog__item-card {
        display: grid;
        grid-gap: 10px;
    }
    .home-add-dependency-dialog__button {
        grid-column: 2;
        grid-row: 1 / span 2;
        align-self: center;
        justify-self: end;
    }
</style>