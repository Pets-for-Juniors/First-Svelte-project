import App from './lib/components/App.svelte';
import './styles/index.scss';

const target = document.getElementById('root');
if (!target) throw new Error('Root element not found');

const app = new App({
	target: target
});

export default app;
