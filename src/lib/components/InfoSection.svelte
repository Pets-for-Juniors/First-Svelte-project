<script lang="ts">
	import catWithHand from '$lib/assets/images/cat_with_hand.png';
	import girlWithDog from '$lib/assets/images/girl_with_dog.png';
</script>

<section class="infoSection">
	<h2 class="title">Итак, о главном - усыновление!</h2>
	<div class="content">
		<div class="textContainer">
			<p class="text">Усыновление - важный шаг не только для хозяина, но и для питомца!</p>
			<ol class="list">
				Чтобы обеспечить новому члену семьи хорошие условия, обязательно изучите:
				<li class="item">“Условия содержания собак в квартире”</li>
				<li class="item">“Условия содержания кошек в квартире”</li>
				<li class="item">“Правила усыновления животных из приюта”</li>
				<li class="item">“Возможные сложности содержания домашнего питомца”</li>
			</ol>
			<img
				src={catWithHand}
				class="catWithHand"
				alt="Кот, показывающий вверх указательным пальцем"
			/>
		</div>
		<img src={girlWithDog} class="girlWithDog" alt="Девушка с собакой" />
	</div>
</section>

<style lang="scss">
	.infoSection {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-top: 75px;
		background-color: var(--turquoise);
	}

	.title {
		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--extra-large-text);
		letter-spacing: calc(var(--extra-large-text) * 0.08);
		color: var(--amber);
	}

	.content {
		width: 100%;
		max-width: var(--section-max-width);
		margin-top: 75px;
		display: flex;
		align-items: left;
		text-align: left;
	}

	.textContainer {
		width: 100%;
		max-width: 945px;
	}

	.text {
		font-family: Inter-Bold, sans-serif;
		font-size: var(--large-text);
		letter-spacing: calc(var(--large-text) * 0.08);
		color: var(--dark-blue);
	}

	.list {
		margin-top: 45px;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
		font-family: Inter-Regular, sans-serif;
		font-size: var(--small-text);
		letter-spacing: calc(var(--small-text) * 0.08);
		color: var(--white);

		list-style-position: inside;
	}

	.item {
		font-family: Inter-LightItalic, sans-serif;
		position: relative;
		transition:
			text-decoration-color 0.3s ease,
			text-underline-offset 0.3s ease;

		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 0;

		&:hover {
			cursor: pointer;
			text-decoration-color: currentColor;
			text-underline-offset: 10px;
		}
	}

	.catWithHand {
		margin-top: 76px;
		margin-left: 95px;
	}
</style>
