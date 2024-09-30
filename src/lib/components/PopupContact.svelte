<script lang="ts">
	import { imask } from '@imask/svelte';
	import { scale } from 'svelte/transition';

	import Overlay from './Overlay.svelte';
	import MainButton from './_ui/MainButton.svelte';

	export let isPopupContactOpen: boolean;
	export let onClose: () => void;

	const options = {
		mask: '{8}000000',
		lazy: false
	};

	let value = '';

	function accept($event: CustomEvent<{ value: string }>) {
		const maskRef = $event.detail;
		console.log('accept', maskRef.value);
		value = maskRef.value;
	}

	function complete(event: CustomEvent<{ unmaskedValue: string }>) {
		const maskRef = event.detail;
		console.log('complete', maskRef.unmaskedValue);
	}
</script>

{#if isPopupContactOpen}
	<Overlay {onClose}>
		<div class="popup" transition:scale={{ duration: 300 }} on:click|stopPropagation>
			<form class="form">
				<p class="text">Пожалуйста, представьтесь!</p>
				<input {value} use:imask={options} on:accept={accept} on:complete={complete} />

				<div class="wrapper">
					<p class="text">Оставьте ваши контакты для обратной связи*</p>
					<input class="input" type="text" placeholder="Тел.: +7(9  ) " />
					<input class="input" type="text" placeholder="Эл.почта: " />
				</div>

				<p class="info">
					Уважаемые посетители сайта, данная форма для заполнения контактов не является реальной,
					она лишь демонстрирует наши способности.<br /> Спасибо!
				</p>

				<p class="text">Запишите свой вопрос</p>
				<textarea class="input" placeholder="Вопрос:" />

				<MainButton text="Отправить" on:click={onClose} />
			</form>
		</div>
	</Overlay>
{/if}

<style lang="scss">
	.popup {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		max-width: 1060px;
		height: fit-content;
		min-height: 751px;
		margin: 100px auto;
		padding: 57px 80px 30px;

		background: var(--white);
		border-radius: var(--border-radius-section);

		overflow: clip;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;

		gap: 30px;
	}

	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 15px;
		gap: 30px;
	}

	.text {
		font-family: Inter-SemiBold, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--dark-blue);

		align-self: first baseline;
	}

	.input {
		width: 100%;
		padding: 14px 20px;

		font-family: Inter-SemiBold, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);

		background-color: var(--turquoise);

		border: none;
		outline: none;
		border-radius: var(--border-radius-button);

		&::placeholder {
			font-family: Inter-SemiBold, sans-serif;
			font-size: var(--small-text);
			letter-spacing: var(--small-text-letter-spacing);
			color: var(--white);
		}
	}

	textarea {
		resize: none;
	}

	.info {
		width: 100%;
		max-width: 735px;

		font-family: Inter-LightItalic, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		text-align: right;
		color: var(--dark-blue);

		align-self: last baseline;
	}
</style>
