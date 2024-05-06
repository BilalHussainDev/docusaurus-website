---
sidebar_position: 1
---

# Tutorial: Tres en Raya

Agrega archivos **Markdown o React** a `src/pages` para crear una **página independiente**:

-   `src/pages/foo/bar.js` → `localhost:3000/foo/bar`
-   `src/pages/foo.md` → `localhost:3000/foo`

## Crea tu primera página en Markdown

Crea un archivo en `src/pages/mi-pagina-markdown.md`:

```mdx title="src/pages/mi-pagina-markdown.md"
# Mi página en Markdown

Esta es una página en Markdown
```

Una nueva página ahora está disponible en [http://localhost:3000/mi-pagina-markdown](http://localhost:3000/mi-pagina-markdown).

## Crea tu primera página en React

Crea un archivo en `src/pages/mi-pagina-react.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
	return (
		<Layout>
			<h1>Mi página en React</h1>
			<p>Esta es una página en React</p>
		</Layout>
	);
}
```

Una nueva página ahora está disponible en [http://localhost:3000/mi-pagina-react](http://localhost:3000/mi-pagina-react).
