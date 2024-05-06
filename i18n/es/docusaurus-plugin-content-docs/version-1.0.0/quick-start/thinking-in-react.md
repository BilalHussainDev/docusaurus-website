---
sidebar_position: 2
---

# Pensando en React

Los documentos son **grupos de páginas** conectadas:

-   **versionado**
-   una **barra lateral**
-   **navegación anterior/siguiente**

## Configura la Barra Lateral

Docusaurus automáticamente **crea una barra lateral** desde la carpeta `docs`.

Añade metadatos para personalizar la etiqueta y posición de la barra lateral:

```md title="docs/hola.md" {1-4}
---
sidebar_label: "¡Hola!"
sidebar_position: 3
---

# Hola

¡Este es mi **primer documento de Docusaurus**!
```

También es posible crear tu propia barra lateral explícitamente en `sidebars.js`:

```js title="sidebars.js"
export default {
	tutorialSidebar: [
		"intro",
		// highlight-next-line
		"hello",
		{
			type: "category",
			label: "Tutorial",
			items: ["tutorial-basics/create-a-document"],
		},
	],
};
```

## Crea tu primer Documento

Crea un archivo Markdown en docs/hola.md:

```md title="docs/hello.md"
# Hola

¡Este es mi **primer documento de Docusaurus**!
```

Un nuevo documento ahora está disponible [http://localhost:3000/docs/hola](http://localhost:3000/docs/hola).
