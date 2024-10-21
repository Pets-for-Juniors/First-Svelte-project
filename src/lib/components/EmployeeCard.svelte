<script lang="ts">
	import type { EmployeeDataSource } from '$lib/dataSources/EmployeeDataSource';

	export let employeeDataSource: EmployeeDataSource;
	// export let onPrevEmployee: () => void = () => {};
	// export let onNextEmployee: () => void = () => {};

	// const onNext = () => {
	// 	onNextEmployee();
	// };

	// const onPrev = () => {
	// 	onPrevEmployee();
	// };
</script>

<div class="content">
	<div class="textWrapper">
		<h2 class="title">{employeeDataSource.results[0].job_title}</h2>
		<p class="description">
			{employeeDataSource.results[0].about_person}
		</p>

		<p class="name">{employeeDataSource.results[0].name}</p>
	</div>

	<img class="image" src={employeeDataSource.results[0].photo} alt="Ololoshechka" />
</div>

<style lang="scss">
	.content {
		width: 100%;
		max-height: 740px;
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
		width: 470px;
		height: 650px;

		object-fit: cover;

		border: 10px solid var(--amber);
		border-radius: var(--border-radius-section);
	}
</style>
