# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

## Architecture Overview

This is a Vue 3 application with the following key technologies:

- **Vue 3** with Composition API using `<script setup>` syntax
- **Vue Router 4** for client-side routing
- **Pinia** for state management
- **Vite** as the build tool and development server
- **GSAP** for animations
- **Swiper** for carousel/slider functionality

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Navbar.vue      # Main navigation component
│   ├── HeroSection.vue # Hero slider with timeline navigation
│   └── ...             # Other page components
├── views/              # Page-level components (routes)
│   ├── Home.vue        # Homepage with all sections
│   └── ...             # Other pages
├── stores/             # Pinia stores
│   └── index.js        # Main app store with services and site data
├── router/             # Vue Router configuration
│   └── index.js        # Routes and navigation setup
├── assets/             # Static assets (images, CSS)
└── main.js             # App entry point with plugins
```

## Key Features

### HeroSection Component
- Custom carousel built with Swiper.js showing partial previous/next slides
- Timeline navigation with dots and connecting lines
- GSAP animations for slide transitions
- Responsive design with mobile-first approach

### State Management (Pinia)
- `useAppStore()` contains:
  - `currentSlide`: Active carousel slide index
  - `services`: Array of service data
  - `siteData`: Company contact information
  - Actions for slide navigation and menu toggling

### Routing
- Uses Vue Router 4 with lazy-loaded components
- Automatic page titles via route meta
- 404 handling with custom NotFound page
- Scroll behavior reset on route changes

## Development Notes

- Path aliasing configured: `@/` maps to `src/`
- Components use scoped styles
- Mobile-responsive breakpoints at 768px and 480px
- GSAP animations with staggered delays for smooth transitions
- Swiper configured with partial slide visibility (slidesPerView: 1.5)