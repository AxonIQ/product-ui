<script lang="ts">
    import { Card,Input } from '@axoniq-product-ui/core';

    export let groupId = '';
    export let artifactId = '';
    export let name = '';
    export let description = '';
    export let packageName = '';
</script>

<div class="home-metadata">
    <div class="home-metadata__heading">
        <div class="text-xl font-bold">Application metadata</div>
    </div>
    <Card>
        <div class="home-metadata__items">
            
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

<style lang="scss">
    .home-metadata__heading {
        display: flex;
        align-items: center;
        height: 48px;
        margin-bottom: 10px;
    }
    .home-metadata {
        margin-bottom: 32px;
    }
    .home-metadata__items {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-auto-flow: row;
        grid-gap: 24px;

        align-items: center;
        justify-content: center;
    }
</style>