<header>
	<a href="/" id="link-to-top">第12回兎原祭</a>
	
	<div class="menu">
		<a href="/reservation" style="color: #fbeaf5;">エントリーガイド</a>
	</div>
</header>

<style>
	header {
		display: flex;
		background-color: #14ea5b;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1001;
		box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.5);
		font-variation-settings: "wght" 700;
		align-items: center;
	}

	#link-to-top {
		color: #fbeaf5;
		font-weight: bold;
		font-size: 120%;
		margin: 1%;

		@media (max-width) {
			font-size: 25px;
		}
	}

	.menu {
		display: flex;
		margin: 1% 1% 1% 1%;
		margin-left: auto;
		padding: 1% 2% 1% 2%;
		justify-content: right;
		color: #fbeaf5;
		background-color: #03501c;
		font-weight: bold;
		font-variation-settings: "wght" 400;
		border-radius: 15px;

		& :hover {
			background-color: #023512;
		}
	}
</style>