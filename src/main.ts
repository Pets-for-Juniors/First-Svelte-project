import App from './components/App.svelte';
import './styles/global.scss';

const target = document.getElementById('app');
if (!target) throw new Error('Root element not found');

const app = new App({
	target: target
});

export default app;
