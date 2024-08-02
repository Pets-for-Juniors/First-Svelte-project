module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	plugins: ['prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended' // должен быть последним
	],
	ignorePatterns: ['build', '.eslintrc.js', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2023,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 2,
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-unused-vars': 'on',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'css-modules/no-unused-class': [1, { camelCase: true }],
		'css-modules/no-undef-class': [2, { camelCase: true }]
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte/svelte'
		}
	]
};
