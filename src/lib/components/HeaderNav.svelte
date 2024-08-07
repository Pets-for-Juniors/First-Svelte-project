<script lang="ts">
</script>

<nav class="headerNav">
	<ul class="list">
		<li class="item"><a class="anchor" href="#animals">Животные</a></li>
		<li class="item"><a class="anchor" href="#adoption">Усыновление</a></li>
		<li class="item"><a class="anchor" href="#team">Члены команды</a></li>
		<li class="item"><a class="anchor" href="#contact">Обратная связь</a></li>
	</ul>
</nav>

<style lang="scss">
	.headerNav {
		display: flex;
	}

	.list {
		list-style: none;
		display: flex;
		gap: 80px;
		text-decoration: none;
	}

	.item {
		display: flex;
	}

	.anchor {
		font-family: Inter-Bold, sans-serif;
		font-size: var(--small-text);
		letter-spacing: calc(var(--small-text) * 0.08);
		color: var(--dark-blue);
		text-decoration: none;

		transition:
			font-size 0.3s ease-in-out,
			color 0.3s ease-in-out;

		&:hover {
			color: var(--white);
			font-size: var(--medium-text);
		}
	}
</style>
