<script lang="ts">
    import Paper from "../Paper.svelte";

    type Date = 
        |"First"
        |"second_am"
        |"second_pm";
</script>
<main>
    <Paper title="タイムテーブル">
        <select>
            <option>5/17</option>
            <option>5/18 午前の部</option>
            <option>5/19 午後の部</option>
        </select>
        <div class="tt">
            <div class="date">
                <h2></h2>
            </div>
            <div class="time"></div>
            <div class="nine">9:00</div>
            <div class="ten">10:00</div>
            <div class="eleven">11:00</div>
            <div class="twelve">12:00</div>
            <div class="thirteen">13:00</div>
            <div class="fourteen">14:00</div>
            <div class="fifteen">15:00</div>
            <div class="arena">
                <h3>アリーナ</h3>
            </div>
            <div class="chorus">コーラス部<br>9:10-10:10</div>
            <div class="eleventh-drama">11回生演劇<br>10:30-11:20</div>
            <div class="drama">演劇部<br>11:40-12:20</div>
            <div class="brass">吹奏楽部<br>14:00-14:50</div>
            <div class="stage">
                <h3>ステージ</h3>
            </div>
            <div class="patata">パタータ<br>9:10-9:40</div>
            <div class="togemanzai">とげ漫才<br>10:00-10:10</div>
            <div class="isee">I see<br>10:40-11:00</div>
            <div class="raccoon-friendship">アライグマの友情<br>11:10-11:30</div>
            <div class="p-and-a">P and A<br>11:40-12:00</div>
            <div class="asricotta">AsRicotta<br>12:10-13:50</div>
            <div class="bingo">ビンゴ大会<br>14:10-14:50</div>
            <div class="musicroom">
                <h3>音楽室</h3>
            </div>
            <div class="moritatatsuya">モリタタツヤ<br>9:30-10:00</div>
            <div class="uranus">七番目の惑星<br>10:10-10:40</div>
            <div class="fragment">Fragment<br>10:50-11:20</div>
            <div class="root-and-5th">Root & 5th<br>11:30-12:00</div>
            <div class="unagipai-kari">ウナギパイ（仮）<br>12:10-12:40</div>
        </div>


    </Paper>
</main>

<style>
    .tt {
        display: grid;
        grid-template-columns: 1.5fr 0.3fr repeat(3, 1fr);
        grid-template-rows: 2fr repeat(37, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 0px;

        & div {
            background-color: aqua;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .date { grid-area: 1 / 1 / 39 / 2; }
    .time { grid-area: 1 / 2 / 2 / 3; }
    .nine { grid-area: 2 / 2 / 3 / 3; }
    .ten { grid-area: 8 / 2 / 9 / 3; }
    .eleven { grid-area: 14 / 2 / 15 / 3; }
    .twelve { grid-area: 20 / 2 / 21 / 3; }
    .thirteen { grid-area: 26 / 2 / 27 / 3; }
    .fourteen { grid-area: 32 / 2 / 33 / 3; }
    .fifteen { grid-area: 38 / 2 / 39 / 3; }
    .arena { grid-area: 1 / 3 / 2 / 4; }
    .chorus { grid-area: 3 / 3 / 9 / 4; }
    .eleventh-drama { grid-area: 11 / 3 / 16 / 4; }
    .drama { grid-area: 18 / 3 / 22 / 4; }
    .brass { grid-area: 32 / 3 / 37 / 4; }
    .stage { grid-area: 1 / 4 / 2 / 5; }
    .patata { grid-area: 3 / 4 / 6 / 5; }
    .togemanzai { grid-area: 8 / 4 / 9 / 5; }
    .isee { grid-area: 12 / 4 / 14 / 5; }
    .raccoon-friendship { grid-area: 15 / 4 / 17 / 5; }
    .p-and-a { grid-area: 18 / 4 / 20 / 5; }
    .asricotta { grid-area: 21 / 4 / 31 / 5; }
    .bingo { grid-area: 33 / 4 / 38 / 5; }
    .musicroom { grid-area: 1 / 5 / 2 / 6; }
    .moritatatsuya { grid-area: 5 / 5 / 8 / 6; }
    .uranus { grid-area: 9 / 5 / 12 / 6; }
    .fragment { grid-area: 13 / 5 / 16 / 6; }
    .root-and-5th { grid-area: 17 / 5 / 20 / 6; }
    .unagipai-kari { grid-area: 21 / 5 / 24 / 6; }

    @media(max-width: 600px) {
        .tt {
            grid-template-columns: 1fr;
        }
    }
</style>