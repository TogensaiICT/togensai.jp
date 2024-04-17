<script>
    export let title = "";
</script>

<div class="paper">
    <h1 style="text-align: center;">{title}</h1>
    <slot></slot>
</div>

<style>
    .paper {
        background-color: bisque;
        padding: 5%;
        margin: 5%;

        word-break: break-all;
        border-radius: 60px;
    }
</style>