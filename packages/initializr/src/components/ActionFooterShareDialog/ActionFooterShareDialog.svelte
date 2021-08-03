<script lang="ts">
    import { userSelection } from "../../userSelectionStore";
    import { Button, Dialog, Input, Typography } from '@axoniq-product-ui/core';
    
    export let visible = false;
    let buttonText = "Copy";

    $: shareableLink = `${location.origin}?${new URLSearchParams($userSelection).toString()}`;
</script>
    
    <Dialog
        open={visible}
        onClose={() => visible = false}
    >
    <div slot="title">
        <Typography size="xl" weight="bold">Share your configuration</Typography>
    </div>
    <Typography size="s">Use this link to share the current configuration. Attributes can be removed from the URL if you want to rely on our defaults.</Typography>
    <div class="action-footer-share-dialog__input">
        <Input
            value={shareableLink} />
        <Button text={buttonText} onClick={() => {
            navigator.clipboard.writeText(shareableLink);
            buttonText = "Link copied!"
        }}/>
    </div>
    </Dialog>
    
<style lang="scss">
    .action-footer-share-dialog__input {
        display: flex;
        gap: 10px;
        align-items: center;
    }
</style>
