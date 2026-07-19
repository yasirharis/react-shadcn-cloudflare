# React + TypeScript + Vite + shadcn/ui

A template for a new Vite project with React, TypeScript, and shadcn/ui, deployed on Cloudflare Workers.

## Getting Started

### Development

Install dependencies:
```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

### Deploy

Build and deploy to Cloudflare Workers:

```bash
npm run deploy
```

> Runs `npm run build` (TypeScript compile + Vite build) then deploys via `wrangler deploy --minify`.

## shadcn/ui Components

### Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

### Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **shadcn/ui** component library
- **Cloudflare Workers** for deployment (via Wrangler)