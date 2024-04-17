<script>
    import { createEventDispatcher } from "svelte";

    export let dialog;

    function clickClose() {
        createEventDispatcher()('closeDialog');
    }
</script>


<button>詳細</button>
<dialog bind:this={dialog} id="dialog">
    <slot></slot>

    <button on:click={clickClose} class="close">閉じる</button>
</dialog>

<style>
    .close {
        border-radius: 15px;
    }
</style>