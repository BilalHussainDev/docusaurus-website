---
sidebar_position: 2
---

# Thinking in React

Documents are **groups of pages** connected:

-   **versioning**
-   a **sidebar**
-   **previous/next navigation**

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

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

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).
