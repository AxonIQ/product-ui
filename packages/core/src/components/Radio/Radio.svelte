<script lang="ts">

    export let value: string;
    export let label = '';
    export let group: string;
    export let name: string;
</script>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div>
        <label class="cursor-pointer label">
            <input
                type="radio"
                class="radio border-opacity-100 radio-sm border-2" 
                {value}
                {name}
                bind:group={group}
            />
            <span class="label-text">{label}</span> 
        </label>
    </div>
<style lang="scss">
    .label {
        @apply justify-start gap-3 inline-flex;
    }
</style>
