<script>
    import {writable, readable} from 'svelte/store';

    export const difference = writable();
    const targetTime = new Date('2024-05-17T09:00:00+09:00').getTime();
    difference.set(targetTime - Date.now());
    function update() {
        setInterval(()=>{difference.set(targetTime - Date.now())}, 1);
    }

    update();
    $: days = parseInt(days) < 0 ? String(Math.floor($difference / 1000 / 60 / 60 / 24)).padStart(2, '0') : String(0);
    $: hours = parseInt(hours) < 0 ? String(Math.floor($difference / 1000 / 60 / 60 % 24)).padStart(2, '0') : String(0);
    $: minutes = parseInt(minutes) < 0 ? String(Math.floor($difference / 1000 / 60 % 60)).padStart(2, '0') : String(0);
    $: seconds = parseInt(seconds) < 0 ? String(Math.floor($difference / 1000 % 60)).padStart(2, '0') : String(0);
    $: milliSeconds = parseInt(milliSeconds) < 0 ? String(Math.floor($difference)).slice(-3, -1) : String(0);
</script>

<div class="countdown">
    兎原祭まで…<wbr />
    <span id="day">{days}日</span>
    <span id="hours">{hours}時間</span>
    <span id="minutes">{minutes}分</span>
    <span id="seconds">{seconds}秒</span>
    <span id="milliSeconds">{milliSeconds}</span>
</div>

<style>
    .countdown {
        font-size: x-large;
        text-align: center;
        word-break: keep-all;
    }
</style>