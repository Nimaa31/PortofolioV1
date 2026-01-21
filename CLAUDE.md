# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 portfolio web application using App Router with React 19 and TypeScript.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm lint     # Run ESLint
pnpm start    # Start production server
```

## Architecture

- **App Router:** Pages and layouts in `src/app/`
- **Path aliases:** `@/*` maps to `./src/*`
- **Server Components:** Default for all components in App Router

## Tech Stack

- **Framework:** Next.js 16.1.3 with App Router
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 with dark mode support (`prefers-color-scheme`)
- **Fonts:** Geist and Geist Mono via `next/font`

## Conventions

- TypeScript strict mode enabled
- Dark mode uses CSS custom properties (`--background`, `--foreground`) with Tailwind's `dark:` prefix
- Responsive design using Tailwind breakpoints (`sm:`, `md:`)
