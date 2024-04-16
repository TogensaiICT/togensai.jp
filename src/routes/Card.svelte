<script>
    export let title = "";
    export let ref = "/";
    export let nolink = 'false';
</script>

{#if nolink != 'true'}
<a href={ref} style="margin: 5%;">
    <div class="card">
        {#if title != ""}
            <h1 style="font-family: 'RocknRoll One'; font-weight: 400;">{title}</h1>
        {/if}

        <div style="margin: 5%;">
            <slot></slot>
        </div>
    </div>
</a>
{:else}
<div class="card" style="margin: 5%;">
    {#if title != ""}
        <h1 style="font-family: 'RocknRoll One'; font-weight: 400;">{title}</h1>
    {/if}

    <div style="margin: 5%;">
        <slot></slot>
    </div>
</div>
{/if}

<style>
    .card {
        background-color: whitesmoke;
        box-shadow: 1px 1px 10px 0.1px rgba(0, 0, 0, 0.5);
        transition: 10s;

        padding: 1%;
        @media (min-width: 600px) {
            width: 80%;
            margin: auto;
        }

        & h1 {
            text-align: center;
        }
    }
</style>