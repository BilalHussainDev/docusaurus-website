import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */

const config = {
	title: "React",
	tagline: "The library for web and native user interfaces",
	favicon: "img/logo.svg",
	url: "https://docusaurus-website-bilal.vercel.app",
	baseUrl: "/",

	// GitHub pages deployment config.
	organizationName: "BilalHussainDev", // GitHub user name
	projectName: "docusaurus-website", // Repo name

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
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
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "right",
						label: "Learn",
					},

					// { to: "/reference", label: "Reference", position: "right" },

					// { to: "/community", label: "Community", position: "right" },

					{ to: "/blog", label: "Blog", position: "right" },

					{
						href: "https://github.com/facebook/react/releases",
						label: "GitHub",
						position: "right",
					},
				],
			},

			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/docusaurus",
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/docusaurus",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/docusaurus",
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
								label: "GitHub",
								href: "https://github.com/facebook/docusaurus",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
