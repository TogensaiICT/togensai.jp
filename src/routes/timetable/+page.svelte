<script>
  import Paper from "../Paper.svelte";

</script>
<main>
    <Paper title="タイムテーブル">
        <div class="tt">
            <div class="parent">
                <div class="div1"> </div>
                <div class="div2"> </div>
                <div class="div3"> </div>
                <div class="div4"> </div>
                <div class="div5"> </div>
                <div class="div6"> </div>
                <div class="div7"> </div>
                <div class="div8"> </div>
                <div class="div9"> </div>
                <div class="div10"> </div>
                <div class="div11"> </div>
                <div class="div12"> </div>
                <div class="div13"> </div>
                <div class="div14"> </div>
                <div class="div15"> </div>
                <div class="div16"> </div>
                <div class="div17"> </div>
                <div class="div18"> </div>
                <div class="div19"> </div>
                <div class="div20"> </div>
                <div class="div21"> </div>
                <div class="div22"> </div>
                <div class="div23"> </div>
                <div class="div24"> </div>
                <div class="div25"> </div>
                <div class="div26"> </div>
                <div class="div27"> </div>
                <div class="div28"> </div>
                </div>
        </div>


    </Paper>
</main>

<style>
        .tt {
display: grid;
grid-template-columns: 1.5fr 0.3fr repeat(3, 1fr);
grid-template-rows: 5fr repeat(37, 1fr);
grid-column-gap: 5px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 39 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
.div4 { grid-area: 8 / 2 / 9 / 3; }
.div5 { grid-area: 14 / 2 / 15 / 3; }
.div6 { grid-area: 20 / 2 / 21 / 3; }
.div7 { grid-area: 26 / 2 / 27 / 3; }
.div8 { grid-area: 32 / 2 / 33 / 3; }
.div9 { grid-area: 38 / 2 / 39 / 3; }
.div10 { grid-area: 1 / 3 / 2 / 4; }
.div11 { grid-area: 3 / 3 / 9 / 4; }
.div12 { grid-area: 11 / 3 / 16 / 4; }
.div13 { grid-area: 18 / 3 / 22 / 4; }
.div14 { grid-area: 32 / 3 / 37 / 4; }
.div15 { grid-area: 1 / 4 / 2 / 5; }
.div16 { grid-area: 3 / 4 / 6 / 5; }
.div17 { grid-area: 8 / 4 / 9 / 5; }
.div18 { grid-area: 12 / 4 / 14 / 5; }
.div19 { grid-area: 15 / 4 / 17 / 5; }
.div20 { grid-area: 18 / 4 / 20 / 5; }
.div21 { grid-area: 21 / 4 / 31 / 5; }
.div22 { grid-area: 33 / 4 / 38 / 5; }
.div23 { grid-area: 1 / 5 / 2 / 6; }
.div24 { grid-area: 5 / 5 / 8 / 6; }
.div25 { grid-area: 9 / 5 / 12 / 6; }
.div26 { grid-area: 13 / 5 / 16 / 6; }
.div27 { grid-area: 17 / 5 / 20 / 6; }
.div28 { grid-area: 21 / 5 / 24 / 6; }

    @media(max-width: 600px) {
        .tt {
            grid-template-columns: 1fr;
        }
    }
</style>