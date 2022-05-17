<script lang="ts">
    import { Input } from '@axoniq-product-ui/core';

    export let groupId = '';
    export let artifactId = '';
    export let name = '';
    export let description = '';
    export let packageName = '';
</script>

<div class="mb-8">
    <div class="flex items-center mb-2 h-12">
        <div class="text-xl font-bold">Application metadata</div>
    </div>
        <div class="flex flex-col justify-center gap-6">
            
            <Input placeholder="com.example" bind:value={groupId} label="GroupID"/>
            <Input placeholder="Axon Demo" bind:value={artifactId} label="ArtifactID"/>
            <Input placeholder="Axon Demo" bind:value={name} label="Name"/>
            <Input placeholder="Demo project for Axon" bind:value={description} label="Description"/>
            <Input placeholder="com.example.axon" bind:value={packageName} label="Package"/>
    </div>
</div>
