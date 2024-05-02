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
		<img id=main-img src={logo_black} alt="第12回兎原祭" />
		<div class="info">
			<h1 id="title">第12回兎原祭</h1>
			<div id="info-detail">
				<div>
					<div id="date-pc">
						<span style="padding: 3%;">DATE:<br /> 2024/</span><span class="info-large">5/17</span><span><br>(Fri)</span> <span style="padding: 3%;">–</span>
						<span class="info-large">5/18</span><span style="padding: 3%"><br>(Sat)</span>
					</div> 

					<div id="date-smartphone">
						DATE:<br>

						<div style="display: flex; align-items:center"><span style="padding: 10%;">2024/</span><div><span class="info-large">5/17</span>(Fri) – <br> <span class="info-large">5/18</span>(Sat) . </div></div>

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

	<div class="concept-news">
		<!---<div style="width: 50%;">-->
			<Card title="コンセプト" nolink='true'>
				<blockquote cite="https://compling.upol.cz/ntumc/cgi-bin/wn-gridx.cgi?gridmode=wnja">
					<div style="font-family: 'Playfair Display';">Spark</div>
					<div style="display: flex; font-size: 80%;">
						<ol>
							<li>耀き 閃光 スパーク</li>
							<li>放電</li>
							<li>ある特質の小さいが目立った量でこれから強くなるだろうもの</li>
							<li>火花</li>
						</ol>
					</div>
					<footer style="font-size: 60%; text-align: right">——情報通信研究機構<br><cite>"日本語 Wordnet"</cite></footer>
				</blockquote>

				<a href="/about" style="display:flex; justify-content:center">詳細はこちら</a>
			</Card>
		<!--</div>-->
		<!---<div style="width: 50%; font-size: 95%">-->
			<Card title="お知らせ" nolink='true'>
				<ul>
					<li><a href="/access">アクセス方法の説明を掲載しました！</a>（2024/5/2）</li>
					<li>兎原祭の来場予約が4/20より始まります！<a href="/reservation">方法はこちら</a></li>
					<li>Webサイトを公開しました（2024/4/17）</li>
				</ul>
			</Card>
		<!---</div>-->
	</div>

	<!-- <Card title="ご注意">

	</Card> -->
	<Card title="本校SNS" nolink="true">
		<div style="text-align: center; aspect-ratio: 16/9;"><iframe style="width: 100%;height:100%" src="https://www.youtube.com/embed/WWjVN1fp-3Q?si=xpkXsj-KIh7YCmQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
	</Card>
</main>

<style>

	main {
		padding: 5%;
	}
	.top {
		width: 100%;
		display: flex;

		& #main-img {
			width: 40%;
		}

		& #title {
			text-align: center;
		}

		& #info {
			margin-top: 10%;
			width: 60%
		}

		& #info-detail {
			display:flex;
			justify-content: center;
			margin: 3%;
			word-break: keep-all;
			text-align: center;
		}

		& #date-pc {
			display: flex; align-items: center;
		}

		& #date-smartphone {
			display: none;
		}
		@media (max-width: 600px) {
			display: block;
			& #main-img {
				width: 80%;
				text-align: center;
				display: block;
				margin: auto;
			}

			& #info {
				width: 100%;
			}

			& #date-pc {
				display: none;
			}

			& #date-smartphone {
				display: block;
			}
		}

		font-family: "M PLUS 2";
		font-variation-settings: "wght" 200;
	}
	/* #main-img {
		@media (min-width: 600px) {
			width: 40%;
		}
	} */

	.info-large {
		font-size: 300%;
		font-variation-settings: 'wght' 100;
	}

	.concept-news {
		display: flex;
		width: 100%;
		justify-content: center;

		@media (max-width: 600px) {
			display: block;
		}
	}
</style>
