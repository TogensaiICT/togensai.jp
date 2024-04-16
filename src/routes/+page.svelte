<script>
	import logo_black from '$lib/images/logo_black.svg';
	import Countdown from './Countdown.svelte';
    import Card from './Card.svelte';
</script>

<svelte:head>
	<title>第12回兎原祭</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div class="top">
		<img id=main-img style="width: 40%; text-align: center" src={logo_black} alt="第12回兎原祭" />
		<div style="margin-top: 10%; width: 60%">
			<h1 style="text-align: center;">第12回兎原祭</h1>
			<div style="display:flex; justify-content: center">
				<div>
					<div>
						DATE: 2024/<span class="info-large">5/17</span>(Fri) –
						<span class="info-large">5/18</span>(Sat)
					</div>
					<div>
						OPEN 9:00 – CLOSE 15:00
					</div>
					<div>
						@Kobe University Secondary School
					</div>
				</div>
			</div>
		</div>
	</div>

	<Countdown></Countdown>

	<div style="display: flex; width: 100%; justify-content: center">
		<!---<div style="width: 50%;">-->
			<Card title="コンセプト" nolink='true'>
				<blockquote cite="https://compling.upol.cz/ntumc/cgi-bin/wn-gridx.cgi?gridmode=wnja">
					<div style="font-family: 'Playfair Display';">Spark</div>
					<div style="display: flex; font-size: 80%;">
						<div>名</div>
						<ol>
							<li>耀き 閃光 スパーク</li>
							<li>放電</li>
							<li>ある特質の小さいが目立った量でこれから強くなるだろうもの</li>
							<li>火花</li>
						</ol>
					</div>
					<footer style="font-size: 60%; text-align: right">——情報通信研究機構<br><cite>"日本語 Wordnet"</cite></footer>
				</blockquote>
			</Card>
		<!--</div>-->
		<!---<div style="width: 50%; font-size: 95%">-->
			<Card title="お知らせ" nolink='true'>
				<ul>
					<li>兎原祭の来場予約が4/20より始まります！</li>
					<li>Webサイトを公開しました（2024/4/17）</li>
				</ul>
			</Card>
		<!---</div>-->
	</div>

	<Card title="ご注意">

	</Card>
	<Card title="本校SNS">
		<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/WWjVN1fp-3Q?si=xpkXsj-KIh7YCmQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
	</Card>
</main>

<style>

	main {
		padding: 5%;
	}
	.top {
		width: 100%;
		@media (min-width: 600px) {
			display: flex;
		}
		font-family: "M PLUS 2";
		font-variation-settings: "wght" 200;
	}
	#main-img {
		@media (min-width: 600px) {
			width: 40%;
		}
	}

	.info {}

	.info-large {
		font-size: 300%;
		font-variation-settings: 'wght' 100;
	}
</style>
