import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */

const config = {
	title: "React",
	// tagline: "The library for web and native user interfaces",
	favicon: "img/logo.svg",
	url: "https://docusaurus-website-bilal.vercel.app",
	baseUrl: "/",

	// GitHub pages deployment config.
	organizationName: "BilalHussainDev", // GitHub user name
	projectName: "docusaurus-website", // Repo name

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// internationalization
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		localeConfigs: {
			en: {
				htmlLang: "en-GB",
			},
			es: {
				label: "Spanish",
			},
		},
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					lastVersion: "current",
					versions: {
						current: {
							label: "1.1.0",
						},
					},
				},
				blog: {
					showReadingTime: false,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			({
				hashed: true,
				language: ["en", "es"],
				searchBarPosition: "left",
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",

			navbar: {
				title: "React",

				logo: {
					alt: "React Logo",
					src: "img/logo.svg",
				},

				items: [
					{
						type: "docsVersionDropdown",
						position: "left",
						dropdownActiveClassDisabled: true,
					},

					{
						type: "search",
						position: "right",
					},

					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "right",
						label: "Learn",
					},

					// { to: "/reference", label: "Reference", position: "right" },

					// { to: "/community", label: "Community", position: "right" },

					{ to: "/blog", label: "Blog", position: "right" },

					{
						to: "https://github.com/facebook/react/releases",
						label: "GitHub",
						position: "right",
					},

					{
						type: "localeDropdown",
						position: "right",
					},
				],
			},

			footer: {
				style: "light",
				links: [
					{
						title: "Meta Open Source",
						items: [
							{
								label: `© ${new Date().getFullYear()}`,
								to: "/",
							},
							{
								label: "uwu?",
								to: "/",
							},
						],
					},

					{
						title: "Learn React",
						items: [
							{
								label: "Intro",
								to: "docs/intro",
							},
							{
								label: "Quick Start",
								to: "docs/category/quick-start",
							},
							{
								label: "Installation",
								to: "docs/category/installation",
							},
							{
								label: "Describing the UI",
								to: "docs/category/describing-the-ui",
							},
						],
					},

					{
						title: "API Reference",
						items: [
							{
								label: "React APIs",
								to: "https://react.dev/reference/react",
							},
							{
								label: "React DOM APIs",
								to: "https://react.dev/reference/react-dom",
							},
						],
					},

					{
						title: "Community",
						items: [
							{
								label: "Code of Conduct",
								to: "https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md",
							},
							{
								label: "Meet the Team",
								to: "https://react.dev/community/team",
							},
							{
								label: "Docs Contributors",
								to: "https://react.dev/community/docs-contributors",
							},
							{
								label: "Acknowledgements",
								to: "https://react.dev/community/acknowledgements",
							},
						],
					},

					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "React Native",
								to: "https://reactnative.dev/",
							},
							{
								label: "Privacy",
								to: "https://opensource.facebook.com/legal/privacy",
							},
							{
								label: "Terms",
								to: "https://opensource.fb.com/legal/terms/",
							},
						],
					},
				],
			},

			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
