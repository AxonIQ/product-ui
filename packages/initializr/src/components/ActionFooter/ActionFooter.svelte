<script lang="ts">
    import { Button } from '@axoniq-product-ui/core';
import { rootUrl } from '../../services/rootUrl';
    import { userSelection } from "../../userSelectionStore";
    import ActionFooterShareDialog from "../ActionFooterShareDialog/ActionFooterShareDialog.svelte";

let shareVisible = false;

const defaultHeaders = new Headers();
defaultHeaders.append("Content-Type", "application/zip");
defaultHeaders.append("Content-Disposition", "attachment");

async function download() {
    const fileLink = document.createElement('a');
    fileLink.href = `${rootUrl}/starter.zip?${new URLSearchParams($userSelection).toString()}`;
    fileLink.click();
}

</script>
    <div class="action-footer">
        <Button
            text="Download"
            onClick={() => download()}
        />
        <Button
            text="Share"
            onClick={() => shareVisible = true}
            variant="secondary" />
    </div>
    <ActionFooterShareDialog bind:visible={shareVisible}/>

<style lang="scss">
    @use "~@axoniq-product-ui/core/stylesheets/colors.scss";

    .action-footer {
        display: flex;
        align-items: center;
        gap: 40px;
    }
</style>