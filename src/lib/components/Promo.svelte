<script lang="ts">
	import dogAndCatImage from '$lib/assets/images/dog_and_cat.svg';
	import houseImage from '$lib/assets/images/house.svg';
	import treeImage from '$lib/assets/images/tree.svg';
</script>

<section class="promo">
	<img src={treeImage} class="tree" alt="Дерево" />
	<div class="content">
		<div class="textContainer">
			<h1 class="title">Приют “Петы”</h1>
			<p class="text">
				Приглашает Вас <br /> в сообщество неравнодушных людей, помогающих
				<span>бездомным животным!</span>
			</p>
		</div>

		<img src={houseImage} class="house" alt="Домик" />
		<img src={dogAndCatImage} class="animalsImg" alt="Кошка и собака" />
	</div>
</section>

<style lang="scss">
	.promo {
		width: 100%;
		max-width: var(--section-max-width);

		padding: 60px 0 75px;
		display: flex;
		flex-direction: column;
	}

	.tree {
		position: absolute;
		top: 0;
		right: 0;

		z-index: 1;
	}

	.content {
		width: 100%;
		min-height: 670px;
		position: relative;
		display: flex;
		border-radius: var(--border-radius-section);
		text-align: center;
		color: #ffd700;
		font-size: 24px;
		background: var(--linear-turquoise);
	}

	.house {
		position: absolute;
		bottom: -75px;
		right: 0;

		z-index: 2;
	}

	.textContainer {
		height: fit-content;
		width: 50%;
		display: flex;
		flex-direction: column;
		margin: 225px 0 0 30px;
		text-align: left;

		gap: 45px;

		z-index: 4;
	}

	.title {
		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--extra-large-text);
		letter-spacing: calc(var(--extra-large-text) * 0.08);
		color: var(--amber);

		text-shadow: 4px 8px 4px rgb(0, 0, 0, 0.5);
	}

	.text {
		font-family: Inter-Bold, sans-serif;
		font-size: var(--large-text);
		letter-spacing: calc(var(--large-text) * (-0.02));
		color: var(--white);

		span {
			color: var(--dark-blue);
		}
	}

	.animalsImg {
		position: absolute;
		bottom: 0;
		right: 18.58%;

		z-index: 3;
	}
</style>
