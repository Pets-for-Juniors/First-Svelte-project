<script lang="ts">
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
		</div>
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
		flex-direction: column;
		align-items: left;
		text-align: left;
		gap: 45px;
	}

	.textContainer {
		width: 100%;
		max-width: 870px;
	}

	.text {
		font-family: Inter-Bold, sans-serif;
		font-size: var(--large-text);
		letter-spacing: calc(var(--large-text) * 0.08);
		color: var(--dark-blue);
	}

	.list {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 30px;
		font-family: Inter-SemiBold, sans-serif;
		font-size: var(--small-text);
		letter-spacing: calc(var(--small-text) * 0.08);
		color: var(--white);

		list-style-position: inside;
	}

	.item {
		font-family: Inter-LightItalic, sans-serif;
		text-decoration: underline;
		text-underline-offset: 10px;
	}
</style>
