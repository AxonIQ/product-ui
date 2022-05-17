<script lang="ts">
import { onMount } from "svelte";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import HomeDependencies from "./components/HomeDependencies.svelte";
import HomeMetadata from "./components/HomeMetadata.svelte";
import HomeSettings from "./components/HomeSettings.svelte";
import type { DependenciesValue,InitializerData } from "./dataTypes";
import { getInitialData } from "./services/getInitialData";
import { userSelection } from './userSelectionStore';
import Tailwindcss from '../../../Tailwindcss.svelte';

let dataLoaded = false;
let initialData: InitializerData;
let addedDependencies: DependenciesValue[] = [];

onMount(async() => {
	initialData = await getInitialData();

	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	history.replaceState && history.replaceState(null, '', location.pathname);

	userSelection.set({
		groupId: params.groupId || initialData.groupId.default,
		artifactId: params.artifactId || initialData.artifactId.default,
		baseDir: params.baseDir || initialData.artifactId.default,
		name: params.name || initialData.name.default,
		description: params.description || initialData.description.default,
		packageName: params.packageName || initialData.packageName.default,

		type: params.type || initialData.type.default,
		language: params.language || initialData.language.default,
		javaVersion: params.javaVersion || initialData.javaVersion.default,
		packaging: params.packaging || initialData.packaging.default,
		usingAxonServer: params.usingAxonServer || 'CLOUD',
		axonServerContext: params.axonServerContext || '',

		dependencies: (params.dependencies && params.dependencies.split(',')) || ['axon-starter', 'axon-test'],
	});

	// TODO: remove this one pre-selection when this issue gets resolved: https://github.com/AxonIQ/initializr/issues/25
	let allDependencies = [];
	initialData.dependencies.values.forEach(depWithName => allDependencies = [...allDependencies, ...depWithName.values]);
	addedDependencies = allDependencies.filter(dep => $userSelection.dependencies.indexOf(dep.id) > -1);

	dataLoaded = true;
});

$: $userSelection.baseDir = $userSelection.artifactId;
$: $userSelection.dependencies = addedDependencies.map(dep => dep.id);
</script>

<Tailwindcss />

<!-- Google Tag Manager (noscript) -->

<noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-5QD58ZB"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<!-- End Google Tag Manager (noscript) -->

{#if !dataLoaded}
	<div>Loading...</div>
{:else}
	<div class="h-screen">
		<header class="bg-dove dark:bg-rhino dark:text-dove">
			<Header />
		</header>
		<main class="bg-dove dark:bg-ox dark:text-dove overflow-auto h-full">
			<section class="max-w-screen-lg mx-auto mt-7 px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-[minmax(auto,_672px)_fit-content(320px)] gap-8">
				<HomeMetadata
					bind:groupId={$userSelection.groupId}
					bind:artifactId={$userSelection.artifactId}
					bind:name={$userSelection.name}
					bind:description={$userSelection.description}
					bind:packageName={$userSelection.packageName}
				/>
				<HomeSettings
					projectTypeData={initialData.type}
					projectLanguageData={initialData.language}
					projectJavaVersionData={initialData.javaVersion}
					projectPackagingData={initialData.packaging}

					bind:projectTypeSelected={$userSelection.type}
					bind:projectLanguageSelected={$userSelection.language}
					bind:projectJavaVersionSelected={$userSelection.javaVersion}
					bind:projectPackagingSelected={$userSelection.packaging}
					bind:projectUsingAxonServer={$userSelection.usingAxonServer}
					bind:projectAxonServerContext={$userSelection.axonServerContext}
				/>
				<div class="col-span-full mb-7">
					<HomeDependencies
						dependencyData={initialData.dependencies}

						bind:addedDependencies={addedDependencies}
					/>
				</div>
			</section>
		</main>
		<footer class="sticky bottom-0 bg-dove dark:bg-rhino dark:text-dove">
			<Footer />
		</footer>
	</div>
{/if}
