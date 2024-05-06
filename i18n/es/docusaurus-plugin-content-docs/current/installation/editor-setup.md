---
sidebar_position: 3
---

# Configuración del Editor

Docusaurus crea una **página para cada entrada del blog**, pero también una **página de índice del blog**, un **sistema de etiquetas**, un **feed RSS**...

## Crea tu primera Entrada

Crea un archivo en `blog/2021-02-28-saludos.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
    - name: Joel Marcey
      title: Co-creator of Docusaurus 1
      url: https://github.com/JoelMarcey
      image_url: https://github.com/JoelMarcey.png
    - name: Sébastien Lorber
      title: Docusaurus maintainer
      url: https://sebastienlorber.com
      image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
