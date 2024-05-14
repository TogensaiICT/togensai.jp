<script lang="ts">
    import Paper from "../Paper.svelte";

    let dates = [
        {id : 'First', name : "1日目"},
        {id : 'Second', name : '2日目'}
    ];
    let date = 'First';
</script>

<svelte:head>
    <title>タイムテーブル</title>
</svelte:head>

<main>
    <Paper title="タイムテーブル">
        <div style="display: flex; justify-content: center">
            <select bind:value={date} id="selector">
                <!--<option>5/17</option>
                <option>5/18</option>-->
                {#each dates as date}
                    <option value={date.id}>{date.name}</option>
                {/each}
            </select>
        </div>

        <div class="tt">
            <div class="nine">⏰9</div>
            <div class="ten">⏰10</div>
            <div class="eleven">⏰11</div>
            <div class="twelve">⏰12</div>
            <div class="thirteen">⏰13</div>
            <div class="fourteen">⏰14</div>
            <div class="fifteen">⏰15</div>

            <div class="arena">
                <h3>アリーナ</h3>
            </div>
            {#if date == 'First'}
                <div class="chorus1">コーラス部<br>9:10-10:10</div>
                <div class="eleventh-drama1">11回生演劇<br>10:30-11:20</div>
                <div class="drama1">演劇部<br>11:40-12:20</div>
                <div class="brass1">吹奏楽部<br>14:00-14:50</div>
            {/if}

            {#if date == 'Second'}
                <div class="brass2">吹奏楽部<br>9:10-10:00</div>
                <div class="eleventh-drama2">11回生演劇<br>10;40-11:30</div>
                <div class="drama2">演劇部<br>12:20-13:10</div>
                <div class="chorus2">コーラス部<br>13:40-14:30</div>
            {/if}

            <div class="stage">
                <h3>ステージ</h3>
            </div>
            {#if date == 'First'}
                <div class="patata1">パタータ<br>9:10-9:40</div>
                <div class="togemanzai1">とげ漫才<br>10:00-10:10</div>
                <div class="isee1">I see<br>10:40-11:00</div>
                <div class="raccoon-friendship1">アライグマの友情<br>11:10-11:30</div>
                <div class="p-and-a1">P and A<br>11:40-12:00</div>
                <div class="asricotta1">AsRicotta<br>12:10-13:50</div>
                <div class="bingo1">ビンゴ大会<br>14:10-14:50</div>
            {/if}

            {#if date == 'Second'}
                <div class="asricotta2">AsRicotta<br>9:10-11:20</div>
                <div class="togemanzai2">とげ漫才<br>11:30-11:40</div>
                <div class="moritatatsuya2">モリタタツヤ<br>12:30-13:00</div>
                <div class="unagipai2">ウナギパイ（仮）<br>13:10-13:40</div>
                <div class="fragment2">Fragment<br>13:50-14:20</div>
                <div class="root-and-5th2">Root & 5th<br>14:30-15:30</div>
            {/if}

            <div class="musicroom">
                <h3>音楽室</h3>
            </div>
            {#if date == 'First'}
                <div class="moritatatsuya1">モリタタツヤ<br>9:30-10:00</div>
                <div class="uranus1">七番目の惑星<br>10:10-10:40</div>
                <div class="fragment1">Fragment<br>10:50-11:20</div>
                <div class="root-and-5th1">Root & 5th<br>11:30-12:00</div>
                <div class="unagipai-kari1">ウナギパイ（仮）<br>12:10-12:40</div>
            {/if}

            {#if date == 'Second'}
                <div class="p-and-a2">P and A<br>10:40-11:00</div>
                <div class="uranus2">七番目の惑星<br>11:10-11:40</div>
                <div class="patata2">パタータ<br>12:20-12:50</div>
            {/if}
        </div>


    </Paper>
</main>

<style>
    #selector {
        text-align-last: center;

        width: 30%;
        background-color: palegreen;
        border-radius: 5px;
        border-color: #1c1d1d;

        font-family: 'RocknRoll One';

        font-size: x-large;

        margin: 3%;
    }

    .tt {
        display: grid;
        grid-template-columns: 0.5fr repeat(3, 1fr);
        grid-template-rows: 1.5fr repeat(36, 0.5fr);
        grid-column-gap: 5px;
        grid-row-gap: 0px;

        & div {
            background-color: palegreen;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 10%;
        }
    }
    
    .nine { grid-area: 2 / 1 / 2 / 1;}
    .ten { grid-area: 8 / 1 / 9 / 1;}
    .eleven { grid-area: 14 / 1 / 15 / 1;}
    .twelve { grid-area: 20 / 1 / 21 / 1;}
    .thirteen { grid-area: 26 / 1 / 27 / 1;}
    .fourteen { grid-area: 32 / 1 / 33 / 1;}
    .fifteen { grid-area: 38 / 1 / 39 / 1;}
    
    
    .arena { grid-area: 1 / 2 / 2 / 3; }
    
    .chorus1 { grid-area: 3 / 2 / 9 / 3; }
    .eleventh-drama1 { grid-area: 11 / 2 / 16 / 3; }
    .drama1 { grid-area: 18 / 2 / 22 / 3; }
    .brass1 { grid-area: 32 / 2 / 37 / 3; }
    
    .brass2 {grid-area: 3 / 2 / 8 / 3;}
    .eleventh-drama2 {grid-area: 12 / 2 / 17 / 3;}
    .drama2 {grid-area: 22 / 2 / 27 / 3;}
    .chorus2 {grid-area: 30 / 2 / 35 / 3;}
    
    .stage { grid-area: 1 / 3 / 2 / 4; }
    
    .patata1 { grid-area: 3 / 3 / 6 / 4; }
    .togemanzai1 { grid-area: 8 / 3 / 9 / 4; }
    .isee1 { grid-area: 12 / 3 / 14 / 4; }
    .raccoon-friendship1 { grid-area: 15 / 3 / 17 / 4; }
    .p-and-a1 { grid-area: 18 / 3 / 20 / 4; }
    .asricotta1 { grid-area: 21 / 3 / 31 / 4; }
    .bingo1 { grid-area: 33 / 3 / 38 / 4; }

    .asricotta2 {grid-area: 3 / 3 / 16 / 4;}
    .togemanzai2 { grid-area: 17 / 3 / 18 / 4; }
    .moritatatsuya2 {grid-area: 23 / 3 / 26 / 4; }
    .unagipai2 { grid-area: 27 / 3 / 30 / 4; }
    .fragment2 {grid-area: 31 / 3 / 34 / 4; }
    .root-and-5th2 {grid-area: 35 / 3 / 38 / 4;}
    
    
    .musicroom { grid-area: 1 / 4 / 2 / 5; }
    
    .moritatatsuya1 { grid-area: 5 / 4 / 8 / 5; }
    .uranus1 { grid-area: 9 / 4 / 12 / 5; }
    .fragment1 { grid-area: 13 / 4 / 16 / 5; }
    .root-and-5th1 { grid-area: 17 / 4 / 20 / 5; }
    .unagipai-kari1 { grid-area: 21 / 4 / 24 / 5; }

    .p-and-a2 {grid-area: 12 / 4 / 14 / 5;}
    .uranus2 {grid-area: 15 / 4 / 18 / 5; }
    .patata2 {grid-area: 22 / 4 / 25 / 5;}

    @media(max-width: 600px) {
        .tt {
            grid-template-columns: 0.7fr repeat(3, 1fr);
        }
    }
</style>