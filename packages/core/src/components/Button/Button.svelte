<script lang="ts">
    export let disabled = false;
    export let variant: "primary" | "secondary" = "primary";
    export let text: string;
    export let onClick: () => void = () => {};

    const variantClasses = {
        'primary': 'bg-peacock text-dove',
        'secondary': 'bg-dove text-rhino'
    }

    $: classesToUse = [
        'h-9 min-w-button rounded-full filter drop-shadow',
        'hover:cursor-pointer hover:drop-shadow-md hover:opacity-75',
        'active:bg-inherit active:color-inherit active:opacity-50 active:drop-shadow-md',
        'focus:outline-none focus:shadow-button',
        variantClasses[variant],
        disabled && 'opacity-50 pointer-events-none',
    ]
    .filter(value => value)
    .join(' ');
    
</script>

<button
    class={classesToUse}
    disabled={disabled}
    on:click={() => onClick()}>
    {#if text}
        <div class="font-bold text-center">
            {#if disabled}
                <span class="opacity-50">{text}</span>
            {:else}
                {text}
            {/if}
        </div>
    {:else}
        <slot />    
    {/if}
</button>