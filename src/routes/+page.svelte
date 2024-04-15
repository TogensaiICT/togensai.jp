<script>
	import logo_black from '$lib/images/svelte-welcome.png';
	import welcome from '$lib/images/svelte-welcome.webp';
</script>

<svelte:head>
	<title>第12回兎原祭</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1>第12回兎原祭</h1>
	<picture><img src={logo_black}, alt="第12回兎原祭" /></picture>
	<img src={welcome}, alt="" />
</main>

<style>
	
</style>
