# vite-vue3-boilerplate

Boilerplate for Vue 3 using Vite and adding some plugins to bring some Nuxt-like features
(e.g. auto-importing components and auto-routing setup)

## Installation

```
npm i -g pnpm (in case you don't have pnpm installed - yarn/npm also work, but pnpm is recommended)
pnpm i
```

## Enabling TS Takeover mode

https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode

---

## Running a development server

```
pnpm dev
```

---

## Features

- ESLint ✔️
- TypeScript ✔️
- Auto-import components from `/src/components` with TS support✔️
- Auto setup router for pages in `/src/pages` ✔️
- Dynamic routes using `/src/pages/[slug].vue` ✔️
- Nuxt-like layout setup ✔️
- Auto-import plugins from `/src/plugins` ✔️

## Setup firebase storage CORS

1 - Go to [Google Cloud Console](https://console.cloud.google.com/)

2 - Start a cloud terminal session by clicking the `>_` icon button in the top navbar

3 - Click the pencil icon to open the editor, then create the cors.json file

4 - Paste the following code and save it

```
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

5 - Run gsutil cors set cors.json gs://your-bucket
