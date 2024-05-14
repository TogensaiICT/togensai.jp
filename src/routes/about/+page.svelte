<svelte:head>
    <title>兎原祭について</title>
</svelte:head>

<main style="padding: 10%;">
    <div>
        <h2>兎原祭について</h2>
        <div id="about-togenfes">
            <p style="width: 70%;">兎原祭は2013年に開催された「神戸大学附属中等教育学校第1回文化祭」をはじまりに、翌年の2014年に「兎原祭」に改称し、今回で12回目を迎えます。<br>「兎原祭」の「兎原」は現在の芦屋市、東灘区、灘区と西宮市の一部からなった「兎原郡」からとられています。<br>そのため、「兎原祭」のマスコットキャラクター「とげたん」もうさぎの形をしていますが、「とげたん」は「うさぎ」ではなく、「うさぎの妖精」だそうです！</p>
            <div style="text-align: center;"><img src="/images/togetan.png" alt="とげたん" id="togetan"></div>
        </div>
    </div>
    <div>
        <h2>テーマについて</h2>

        <div style="text-align: center;"><img src="/images/logo_black.png" alt="ロゴ" id="logo" ></div>
        <p>
            Sparkとは火花、発火点を意味します。<br>
            生徒ひとりひとりの新しいアイデアを尊重し、活気に満ちた兎原祭を作り上げ、そんな兎原祭を通して生徒の笑顔をはじけさせたい。<br>
            その一心で第12回兎原祭を作り上げてきました。<br>
            新しいアイデアがたくさん発案されることを願って、このテーマを設定しました。
        </p>
    </div>
</main>

<style>
    #about-togenfes {
        display: flex;
        width: 100%;
    }

    #togetan {
        width: 100%;
        @media (max-width: 600px) {
            width: 80%;
        }
    }

    #logo {
        width: 30%;
        @media (max-width: 600px) {
            width: 80%;
        }
    }
</style>