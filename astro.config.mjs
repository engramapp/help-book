// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight(
			{
				title: '',
				logo: {
					src: './src/assets/helplogo.png'
				},
				customCss: [
					'./src/styles/docs.css',
				],
				sidebar: [
					{ label: 'Home', link: '/' },
					{
						label: 'Getting Started',
						autogenerate: { directory: 'getting-started' },
					},
					{
						label: 'Cards',
						autogenerate: { directory: 'cards' },
					},
					{
						label: 'Deck Configurations',
						autogenerate: { directory: 'deck-configs' },
					},
					{
						label: 'User Interface',
						autogenerate: { directory: 'user-interface' },
					},
					{
						label: 'Import',
						autogenerate: { directory: 'import' },
					},
					// {
					//   label: 'Linking Notes and Files',
					//   autogenerate: { directory: 'help/linking-notes' },
					// },
					{
						label: 'LLM Usage',
						autogenerate: { directory: 'llm-usage' },
					},
					{
						label: 'Engram Sync',
						autogenerate: { directory: 'sync' },
					},
					{
						label: 'Extending Engram',
						autogenerate: { directory: 'extending-engram' },
					},
					{
						label: 'Engram',
						autogenerate: { directory: 'engram' },
					},
					{
						label: 'Licenses and Payment',
						autogenerate: { directory: 'licenses-and-payment' },
					},
				],
			}
		),
	],
});
