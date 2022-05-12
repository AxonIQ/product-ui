<script lang="ts">
import { Button,Card,IconButton } from '@axoniq-product-ui/core';
import type { DataDependencies,DependenciesValue } from "../dataTypes";
import HomeAddDependancyDialog from './HomeAddDependancyDialog.svelte';

export let dependencyData: DataDependencies;
export let addedDependencies: DependenciesValue[] = [];

let addDependenciesVisible = false;

const removeDependency = (currentDependency) => addedDependencies = addedDependencies.filter(dep => dep.id !== currentDependency.id)
</script>

<div class="mb-9 flex gap-8 items-center">
    <div class="text-xl font-bold">Dependencies</div>
    <Button
        onClick={() => addDependenciesVisible = true}
    >Add</Button>

    <HomeAddDependancyDialog
        {dependencyData}
        {addedDependencies}
        onAddDependency={(dependencyItem) => addedDependencies = [...addedDependencies, dependencyItem]}
        onRemoveDependency={(dependencyItem) => removeDependency(dependencyItem)}
        bind:visible={addDependenciesVisible}
    />
</div>
<ul class="grid grid-cols-3 gap-8">
    {#each addedDependencies as addedDep (addedDep.id)}
        <li>
            <Card>
                <div class="h-[162px]">
                    <div class="flex justify-between">
                        <div
                            class="font-bold mb-4"
                            class:opacity-70={['axon-starter', 'axon-test'].indexOf(addedDep.id) > -1}>
                            {addedDep.name}
                        </div>
                        <button
                            class="fill-dove disabled:bg-rhino disabled:opacity-50 bg-fox rounded-full w-6 h-6 flex items-center justify-center"
                            disabled={['axon-starter', 'axon-test'].indexOf(addedDep.id) > -1}
                            on:click={() => removeDependency(addedDep)}
                        >
                            <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
                                <path d="M6.46291 5L8.80666 2.65625C9.11135 2.375 9.11135 1.90625 8.80666 1.625L8.29104 1.10938C8.00979 0.804688 7.54104 0.804688 7.25979 1.10938L4.91604 3.45312L2.54885 1.10938C2.2676 0.804688 1.79885 0.804688 1.5176 1.10938L1.00197 1.625C0.697287 1.90625 0.697287 2.375 1.00197 2.65625L3.34572 5L1.00197 7.36719C0.697287 7.64844 0.697287 8.11719 1.00197 8.39844L1.5176 8.91406C1.79885 9.21875 2.2676 9.21875 2.54885 8.91406L4.91604 6.57031L7.25979 8.91406C7.54104 9.21875 8.00979 9.21875 8.29104 8.91406L8.80666 8.39844C9.11135 8.11719 9.11135 7.64844 8.80666 7.36719L6.46291 5Z"/>
                            </svg>
                        </button>
                    </div>
                    <p
                        class="text-sm line-clamp-4"
                        class:opacity-70={['axon-starter', 'axon-test'].indexOf(addedDep.id) > -1}
                    >{addedDep.description}</p>
                </div>
            </Card>
        </li>
    {/each}
    <li>
        <div class="w-full h-full group hover:cursor-pointer p-6 bg-transparent rounded-2xl border-2 border-dashed border-mouse inline-flex justify-center items-center" on:click={() => addDependenciesVisible = true}>
			<IconButton variant="secondary">
				<div class="fill-rhino">
					<svg class="fill-inherit" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.7619 6.5625H9.69942V1.5C9.69942 0.902344 9.17208 0.375 8.57442 0.375H7.44942C6.81661 0.375 6.32442 0.902344 6.32442 1.5V6.5625H1.26192C0.62911 6.5625 0.136923 7.08984 0.136923 7.6875V8.8125C0.136923 9.44531 0.62911 9.9375 1.26192 9.9375H6.32442V15C6.32442 15.6328 6.81661 16.125 7.44942 16.125H8.57442C9.17208 16.125 9.69942 15.6328 9.69942 15V9.9375H14.7619C15.3596 9.9375 15.8869 9.44531 15.8869 8.8125V7.6875C15.8869 7.08984 15.3596 6.5625 14.7619 6.5625Z"/>
					</svg>
				</div>
			</IconButton>
		</div>
    </li>
</ul>
