---
sidebar_position: 3
---

# Renderizado Condicional

Vamos a traducir `docs/intro.md` a Lorem.

Vamos a traducir `docs/intro.md` a Epsim.

## Traducir un documento

Copia el archivo `docs/intro.md` a la carpeta `i18n/fr`:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
	themeConfig: {
		navbar: {
			items: [
				// highlight-start
				{
					type: "localeDropdown",
				},
				// highlight-end
			],
		},
	},
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

## Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
export default {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
	},
};
```
