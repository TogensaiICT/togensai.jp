<script>
    import {writable, readable} from 'svelte/store';

    export const difference = writable();
    const targetTime = new Date('2024-05-17T09:00:00+09:00').getTime();
    difference.set(targetTime - Date.now());
    function update() {
        setInterval(()=>{difference.set(targetTime - Date.now())}, 1);
    }

    update();
    $: days = String(Math.floor($difference / 1000 / 60 / 60 / 24)).padStart(2, '0');
    $: hours = String(Math.floor($difference / 1000 / 60 / 60 % 24)).padStart(2, '0');
    $: minutes = String(Math.floor($difference / 1000 / 60 % 60)).padStart(2, '0');
    $: seconds = String(Math.floor($difference / 1000 % 60)).padStart(2, '0');
    $: milliSeconds = String(Math.floor($difference % 100)).padStart(2, '0');
</script>

<div class="countdown">
    兎原祭まで…
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
    }
</style>