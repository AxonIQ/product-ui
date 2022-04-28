<script lang="ts">
    import { Button,Dialog,Input } from '@axoniq-product-ui/core';
    import { userSelection } from "../../userSelectionStore";
    
    export let visible = false;
    let buttonText = "Copy";

    $: shareableLink = `${location.origin}?${new URLSearchParams($userSelection).toString()}`;
</script>
    
<Dialog
        open={visible}
        onClose={() => visible = false}
    >
    <div slot="title">
        <div class="text-xl font-bold">Share your configuration</div>
    </div>
    <div class="text-sm mb-5">Use this link to share the current configuration. Attributes can be removed from the URL if you want to rely on our defaults.</div>
    <div class="flex gap-2 items-center">
        <div class="w-full">
            <Input
                value={shareableLink} />
        </div>
        <Button onClick={() => {
            navigator.clipboard.writeText(shareableLink);
            buttonText = "Link copied!"
        }}>{buttonText}</Button>
    </div>
</Dialog>
