<script lang="ts">
</script>

<section class="team">
	<div class="content">
		<div class="textWrapper">
			<h2 class="title">Графический дизайнер, иллюстратор</h2>
			<p class="description">
				Ololo is a team of skilled and passionate developers with a focus on creating innovative and
				user-friendly solutions.
			</p>

			<p class="name">Ololoshechka</p>
		</div>

		<img class="image" src="#" alt="Ololoshechka" />
	</div>
</section>

<style lang="scss">
	.team {
		width: 100%;
		max-width: var(--section-max-width);

		padding: 75px 0 90px;
		display: flex;
	}

	.content {
		width: 100%;
		min-height: 740px;
		padding: 45px 80px;

		position: relative;
		display: flex;

		border: 5px solid var(--dark-blue);
		border-radius: var(--border-radius-section);

		text-align: center;
		color: var(--dark-blue);
		font-size: 24px;

		background: var(--white);

		gap: 80px;
	}

	.textWrapper {
		margin-top: 30px;
	}

	.title {
		width: 100%;
		max-width: 442px;

		font-family: Inter-Bold, sans-serif;
		font-size: var(--large-text);
		text-align: left;
		letter-spacing: var(--large-text-letter-spacing);
		color: var(--red);
	}

	.description {
		margin-top: 45px;

		width: 100%;
		max-width: 683px;

		font-family: Inter-Regular, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		text-align: left;
	}

	.name {
		margin-top: 150px;

		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--extra-large-text);
		letter-spacing: var(--extra-large-text-letter-spacing);
		text-transform: uppercase;
		text-decoration: none;
		text-align: left;
	}

	.image {
		width: 100%;
		max-width: 470px;
		height: 100%;
		max-height: 650px;

		object-fit: cover;

		border: 10px solid var(--amber);
		border-radius: var(--border-radius-section);
	}
</style>
