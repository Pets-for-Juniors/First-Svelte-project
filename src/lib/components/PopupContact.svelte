<script lang="ts">
	import { imask } from '@imask/svelte';

	import { scale } from 'svelte/transition';

	import type { MaskRef } from '../../types';
	import Overlay from './Overlay.svelte';
	import MainButton from './_ui/MainButton.svelte';

	export let isPopupContactOpen: boolean;
	export let onClose: () => void;

	const nameOptions = {
		mask: 'ФИО: N',
		lazy: false,
		blocks: {
			N: {
				mask: /^[а-яА-ЯёЁa-zA-Z\s]+$/
			}
		}
	};

	const phoneOptions = {
		mask: 'Тел.: +{7}({9}00)000-00-00',
		lazy: false
	};

	const emailOptions = {
		mask: 'Эл.почта: N{@}D{.}Y',
		lazy: false,
		blocks: {
			N: { mask: /^[a-zA-Z0-9_\.-]+$/ },
			D: { mask: /[a-zA-Z0-9-]+$/ },
			Y: { mask: /[a-zA-Z]+$/ }
		}
	};

	const questionOptions = {
		mask: 'Вопрос: N',
		lazy: false,
		blocks: {
			N: {
				mask: /^[\s\S]+$/
			}
		}
	};

	let nameValue = '';
	let phoneValue = '';
	let emailValue = '';
	let questionValue = '';

	function accept({ detail: maskRef }: { detail: MaskRef }) {
		console.log('accept', maskRef.value);
	}

	function complete({ detail: maskRef }: { detail: MaskRef }) {
		console.log('complete', maskRef.unmaskedValue);
	}
</script>

{#if isPopupContactOpen}
	<Overlay {onClose}>
		<div class="popup" transition:scale={{ duration: 300 }} on:click|stopPropagation>
			<form class="form">
				<p class="text">Пожалуйста, представьтесь!</p>
				<input
					class="input"
					type="text"
					bind:value={nameValue}
					use:imask={nameOptions}
					on:accept={accept}
					on:complete={complete}
				/>

				<div class="wrapper">
					<p class="text">Оставьте ваши контакты для обратной связи*</p>
					<input
						class="input"
						type="text"
						bind:value={phoneValue}
						use:imask={phoneOptions}
						on:accept={accept}
						on:complete={complete}
					/>

					<input
						class="input"
						type="text"
						bind:value={emailValue}
						use:imask={emailOptions}
						on:accept={accept}
						on:complete={complete}
					/>
				</div>

				<p class="info">
					Уважаемые посетители сайта, данная форма для заполнения контактов не является реальной,
					она лишь демонстрирует наши способности.<br /> Спасибо!
				</p>

				<p class="text">Запишите свой вопрос</p>
				<textarea
					class="input"
					bind:value={questionValue}
					use:imask={questionOptions}
					on:accept={accept}
					on:complete={complete}
				/>

				<MainButton text="Отправить" on:click={onClose} />
			</form>
			<button class="closeButton" type="button" on:click={onClose}>X</button>
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

	.closeButton {
		position: absolute;
		top: 40px;
		right: 40px;

		width: 30px;
		height: 30px;
		padding: 0;

		font-family: Inter-SemiBold, sans-serif;
		font-size: var(--small-text);
		color: rgb(163, 163, 163);

		background-color: transparent;
		border: none;
		cursor: pointer;
	}
</style>
