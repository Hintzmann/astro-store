# Astro Store

By Martin Hintzmann Jürs, 2026-02-08

## Features

- Data
    - Fetch product from fakestoreapi.com
    - Cache (60 seconds)
    - SSR (build and preview)
- Script
    - Primary Typescript & some Javascript
    - Astro Props
    - `<slot>`
    - Web Component `<astro-cart />`
- Style
    - Open-props.style
    - Basic stylesheet 
    - Scoped Styling to components (No class'itis)
    - Light-dark theme
    - sibling-index(), @starting-style
- HTML
    - Semantic Markup
    - Dialog
    - Command, Commandfor
- SEO
    - Structured Data w/Microdata 
- A11y
    - Keyboard navigation
    - prefers-reduced-motion
    - Aria-labels

## Todos

- Update data with adapter / webhook (Require host at Vercel, Netlify, Render etc)
- Split stylesheet into @layers ex. reset, base, layout, components, utilities, overrides
- Better UX for Cart (Ex. Input number Quantity)
- Example for use of React, Vue, Svelte, etc.
- PostCSS (Just In Time) Props
- Add astro:transitions

## Development

Install and then run development

```sh
npm i
npm run dev
```

## Build

Run build and then preview

```sh
npm run build
npm run preview
```

## Why Astro?

https://docs.astro.build/en/concepts/why-astro/

- Islands Architecture
- UI-agnostic
- Server-first
- Zero JS, by default
- Content Collection
- Customizable

## Folders

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Header.astro
│   │   └── ProductList.astro
│   ├── layouts
│   │   └── BaseLayout.astro
│   └── pages
│       └── products
│           └── [id].astro
│       └── index.astro
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
