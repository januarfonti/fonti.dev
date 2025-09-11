# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog website for Januar Fonti (fonti.dev) built with Next.js 15 and modern React patterns. The site showcases work as a cyclist, traveler, and web developer with a blog and portfolio sections.

## Development Commands

```bash
# Development with Turbopack
yarn dev

# Production build
yarn build

# Start production server
yarn start

# Code linting and formatting (Biome)
yarn lint
```

## Content Management System

This project uses **@content-collections** for MDX-based content management:

- **Blog posts**: Located in `src/content/blog/` as `.mdx` files
- **Portfolio projects**: Located in `src/content/portfolio/` as `.mdx` files
- **Content processing**: Automated blur image generation, reading time calculation, and syntax highlighting
- **Rebuilding content**: Run `yarn dev` or `yarn build` to regenerate content collections

### Content Schema

**Blog posts** require:
- `title`, `description`, `date`, `image`, `authors[]`, `tags[]`

**Portfolio projects** require:
- `title`, `description`, `date`, `image`, `authors[]`, `tech[]`, `link`, `company`

## Architecture Patterns

### App Router Structure
- Uses Next.js 15 App Router (not Pages Router)
- Server Components by default
- Client Components marked with "use client"
- Server actions for database operations in `src/db/`

### Styling System
- **Tailwind CSS** with custom configuration
- **Shadcn/ui components** (New York style) in `src/components/ui/`
- **CSS custom properties** for theming
- **Dark/light mode** with next-themes (defaults to dark)


## Code Standards

### Formatting (Biome Configuration)
- **Double quotes** for JavaScript strings
- **2 space indentation**
- **Disabled rules**: `noSvgWithoutTitle`, `useKeyWithClickEvents`, `noNonNullAssertion`, `useExhaustiveDependencies`
- Run `yarn lint` to format code

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured: `@/` maps to `src/`
- Component aliases: `@/components`, `@/lib`, `@/hooks`

### Component Patterns
- Prefer Server Components
- Use `cn()` utility for conditional classes (tailwind-merge)
- Component composition over configuration
- Keep components small and focused

## Key Dependencies

### Core Framework
- **Next.js 15.0.2** with App Router
- **React 19 RC** with concurrent features
- **TypeScript 5** with strict configuration

### Content & MDX
- **@content-collections** for MDX processing
- **Fumadocs** plugins for enhanced markdown
- **Sugar High** for syntax highlighting
- **Reading Time** calculation

### Styling & UI
- **Tailwind CSS** with Typography plugin
- **Shadcn/ui** component system
- **Framer Motion** for animations
- **Lucide React** icons
- **Geist fonts** from Vercel

### Analytics
- Custom analytics integration (`analytics.fonti.dev`)

## Development Notes

### Content Development
- Add new blog posts to `src/content/blog/` with proper frontmatter
- Images should be placed in `public/` and referenced without the public prefix
- Content collections will auto-generate blur placeholders and reading times

### Styling Development
- Use existing Tailwind configuration and custom properties
- Theme colors are defined in `src/app/globals.css`
- Prefer Shadcn/ui components over custom implementations


### Performance Considerations
- Images are automatically optimized with blur placeholders
- Fonts are self-hosted (Geist Sans & Mono)
- Static generation is used where possible
- Content is cached during build time

## File Organization

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable React components
│   └── ui/          # Shadcn/ui components
├── content/         # MDX content files
│   ├── blog/        # Blog post MDX files
│   └── portfolio/   # Portfolio project MDX files
├── lib/             # Utility functions and configurations
└── types/           # TypeScript type definitions
```

## Deployment

- Configured for Vercel deployment
- Uses `vercel.json` for proxy configuration to analytics endpoint
- Environment variables may be needed for analytics integration