<script lang="ts">
    import { Card,Input } from '@axoniq-product-ui/core';

    export let groupId = '';
    export let artifactId = '';
    export let name = '';
    export let description = '';
    export let packageName = '';
</script>

<div class="home-metadata mb-8">
    <div class="flex items-center mb-2 h-12">
        <div class="text-xl font-bold">Application metadata</div>
    </div>
    <Card>
        <div class="home-metadata__items grid grid-cols-[1fr_auto] grid-flow-row justify-center gap-6">
            
            <div class="text-sm">GroupID</div>
            <Input placeholder="com.example" bind:value={groupId} />
            
            <div class="text-sm">ArtifactID</div>
            <Input placeholder="Axon Demo" bind:value={artifactId}/>
            
            <div class="text-sm">Name</div>
            <Input placeholder="Axon Demo" bind:value={name}/>
            
            <div class="text-sm">Description</div>
            <Input placeholder="Demo project for Axon" bind:value={description} />
            
            <div class="text-sm">Package</div>
            <Input placeholder="com.example.axon" bind:value={packageName}/>
    </div>
    </Card>
</div>
