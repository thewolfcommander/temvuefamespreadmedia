# Fame Spread Media - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [CSS Files & Design System](#css-files--design-system)
4. [Vue Components](#vue-components)
5. [Pages (Views)](#pages-views)
6. [JavaScript Files](#javascript-files)
7. [How Everything Works Together](#how-everything-works-together)
8. [Development Workflow](#development-workflow)

---

## Project Overview

This is a **Vue 3** website for Fame Spread Media - a creative agency. The website showcases their services, portfolio, and provides contact information.

### Technologies Used:
- **Vue 3** - Main framework for building the user interface
- **Vue Router 4** - For page navigation (Home, About, Services, etc.)
- **Pinia** - For managing data across the website
- **GSAP** - For smooth animations
- **Swiper** - For image sliders/carousels
- **Vite** - For fast development and building

---

## Project Structure

```
Fame Spread Media Project/
├── src/                    # Main source code folder
│   ├── components/         # Reusable parts of the website
│   │   ├── Navbar.vue     # Top navigation menu
│   │   ├── Footer.vue     # Bottom footer section
│   │   ├── HeroSection.vue # Main banner with slider
│   │   ├── AboutSection.vue # About us content
│   │   ├── OurServices.vue # Services we offer
│   │   ├── ServicesOverview.vue # Services summary
│   │   ├── FeaturedWorks.vue # Portfolio showcase
│   │   ├── ClientsSection.vue # Client testimonials
│   │   ├── TestimonialSection.vue # Customer reviews
│   │   └── ContactFormSection.vue # Contact form
│   ├── views/             # Full pages
│   │   ├── Home.vue       # Homepage (combines many components)
│   │   ├── About.vue      # About us page
│   │   ├── Services.vue   # Services page
│   │   ├── Contact.vue    # Contact page
│   │   └── NotFound.vue   # 404 error page
│   ├── stores/            # Data management
│   │   └── index.js       # Main data store
│   ├── router/            # Page navigation setup
│   │   └── index.js       # Route definitions
│   ├── assets/            # CSS files and images
│   │   ├── design-system.css # All colors, fonts, spacing
│   │   ├── main.css       # Additional styles
│   │   └── logo.svg       # Company logo
│   ├── App.vue            # Main app wrapper
│   └── main.js            # App startup file
├── index.html             # HTML template
└── package.json           # Project dependencies
```

---

## CSS Files & Design System

### 1. `design-system.css` - The Master Style File

This file contains **ALL** the design rules for your website. Think of it as a **style rulebook** that every component follows.

#### **Colors (Brand Palette)**
```css
--color-primary: #C17A60;     /* Orange - Main brand color */
--color-secondary: #B0A59B;   /* Grey orange - Secondary brand color */
--color-accent: #F7F2EC;      /* Light orange - Subtle backgrounds */
--color-white: #FFFFFF;       /* White backgrounds and text */
--color-black: #000000;       /* Black backgrounds */
--color-text-primary: #2D2D2D; /* Dark grey - Main text */
```

**How it works:** Every component uses these color variables. For example, when Footer.vue needs the orange color, it uses `var(--color-primary)` instead of writing `#C17A60` directly.

#### **Typography (Text Styles)**
```css
--font-family-heading: 'Inter'; /* Font for titles */
--font-family-body: 'Inter';    /* Font for paragraphs */
--font-size-base: 16px;         /* Normal text size */
--heading-h1: clamp(32px, 5vw, 60px); /* Big titles that resize */
```

**How it works:** All headings (h1, h2, h3) automatically use these sizes. The `clamp()` function makes text bigger on desktop and smaller on mobile automatically.

#### **Spacing System**
```css
--space-4: 16px;  /* Small spacing */
--space-8: 32px;  /* Medium spacing */
--space-16: 64px; /* Large spacing */
```

**How it works:** Instead of guessing spacing, components use these predefined values for consistent spacing throughout the website.

#### **Responsive Breakpoints**
```css
--breakpoint-md: 768px;   /* Tablet size */
--breakpoint-lg: 1024px;  /* Desktop size */
```

### 2. `main.css` - Additional Global Styles

Contains extra styles that apply to the entire website, like body background, global resets, etc.

### 3. `style.css` - Legacy Styles

Contains older styles that might still be in use.

---

## Vue Components

Components are **reusable pieces** of your website. Think of them like LEGO blocks - you can use them multiple times and combine them to build pages.

### Core Layout Components

#### **1. App.vue** - The Main Container
```vue
<template>
  <div id="app">
    <Navbar />      <!-- Navigation at top -->
    <router-view /> <!-- Different pages go here -->
    <Footer />      <!-- Footer at bottom -->
  </div>
</template>
```

**What it does:**
- This is the **main wrapper** for your entire website
- **Navbar** appears on every page (top navigation)
- **router-view** is where different pages (Home, About, Services) show up
- **Footer** appears on every page (bottom section)

#### **2. Navbar.vue** - Top Navigation
**Purpose:** The menu bar at the top of every page

**Key Features:**
- Logo on the left
- Menu items (Home, About, Services, Contact)
- Mobile hamburger menu
- Sticky navigation (stays at top when scrolling)

**How the CSS works:**
```css
.navbar {
  position: fixed;           /* Stays at top while scrolling */
  background: var(--bg-dark); /* Uses black background */
  z-index: var(--z-navbar);  /* Appears above other content */
}
```

#### **3. Footer.vue** - Bottom Section
**Purpose:** The footer section at the bottom of every page

**Structure:**
- **Left Section:** Logo, description, social media icons
- **Center Section:** Navigation links in two columns
- **Right Section:** Contact details
- **Bottom:** Address and copyright

**Key CSS Features:**
```css
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
}
```

### Content Components

#### **4. HeroSection.vue** - Main Banner
**Purpose:** The big banner section with sliding images

**Features:**
- **Swiper.js** integration for image carousel
- Timeline navigation with dots
- **GSAP** animations for smooth transitions
- Responsive design

**How Swiper works:**
```javascript
// Creates a slider that shows 1.5 slides at a time
slidesPerView: 1.5,
centeredSlides: true,
spaceBetween: 30
```

#### **5. AboutSection.vue** - About Us Content
**Purpose:** Introduces the company and what they do

**Structure:**
- Company description
- Mission statement
- Key values or services

#### **6. OurServices.vue** - Services Grid
**Purpose:** Shows all the services offered by Fame Spread Media

**Features:**
- Grid layout for service cards
- Hover animations
- Icons for each service
- Responsive grid (4 columns → 2 columns → 1 column)

#### **7. ServicesOverview.vue** - Services Summary
**Purpose:** Brief overview of main service categories

#### **8. FeaturedWorks.vue** - Portfolio Showcase
**Purpose:** Displays client work and projects

**Features:**
- Image gallery
- Project descriptions
- Filter by category (optional)

#### **9. ClientsSection.vue** - Client Testimonials
**Purpose:** Shows client logos and testimonials

#### **10. TestimonialSection.vue** - Customer Reviews
**Purpose:** Customer feedback and reviews

#### **11. ContactFormSection.vue** - Contact Form
**Purpose:** Contact form for potential clients

**Features:**
- Form validation
- Email integration
- Contact information display

---

## Pages (Views)

Pages are **complete screens** that users see when they navigate to different URLs.

### **1. Home.vue** - Homepage
**URL:** `/` (main website address)

**Structure:**
```vue
<template>
  <HeroSection />
  <AboutSection />
  <OurServices />
  <FeaturedWorks />
  <ClientsSection />
  <TestimonialSection />
  <ContactFormSection />
</template>
```

**What it does:** Combines multiple components to create the complete homepage experience.

### **2. About.vue** - About Page
**URL:** `/about`

**Purpose:** Dedicated page with detailed company information

### **3. Services.vue** - Services Page
**URL:** `/services`

**Purpose:** Complete list of all services offered

### **4. Contact.vue** - Contact Page
**URL:** `/contact`

**Purpose:** Contact form and company contact details

### **5. NotFound.vue** - 404 Error Page
**URL:** Any invalid URL (e.g., `/invalid-page`)

**Purpose:** Shows when user tries to visit a page that doesn't exist

---

## JavaScript Files

### **1. main.js** - App Startup
**Purpose:** This file **starts your entire website**

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) // Adds data management
app.use(router)        // Adds page navigation
app.mount('#app')      // Connects to HTML
```

**Step by step:**
1. Import Vue and your main App component
2. Import router (for navigation) and Pinia (for data)
3. Create the app
4. Add router and Pinia to the app
5. Mount the app to the HTML element with id="app"

### **2. router/index.js** - Navigation Setup
**Purpose:** Defines which component shows for each URL

```javascript
const routes = [
  { path: '/', component: Home },           // Homepage
  { path: '/about', component: About },     // About page
  { path: '/services', component: Services }, // Services page
  { path: '/contact', component: Contact }, // Contact page
  { path: '/:pathMatch(.*)*', component: NotFound } // 404 page
]
```

**How it works:**
- When user visits `/about`, it shows the About.vue component
- When user visits `/services`, it shows the Services.vue component
- If user visits invalid URL, shows NotFound.vue

### **3. stores/index.js** - Data Management
**Purpose:** Stores data that multiple components need to share

```javascript
export const useAppStore = defineStore('app', {
  state: () => ({
    currentSlide: 0,        // Which slide is active in hero
    isMenuOpen: false,      // Is mobile menu open?
    services: [...],        // List of all services
    siteData: {            // Company contact info
      phone: '+91 9871521144',
      email: 'hi@famespreadmedia.com'
    }
  }),
  actions: {
    nextSlide() { ... },    // Go to next slide
    toggleMenu() { ... }    // Open/close mobile menu
  }
})
```

**How components use it:**
```javascript
// In any component:
import { useAppStore } from '@/stores'
const store = useAppStore()

// Access data:
const currentSlide = store.currentSlide
const services = store.services

// Call actions:
store.nextSlide()
store.toggleMenu()
```

---

## How Everything Works Together

### **1. App Startup Process**
1. Browser loads `index.html`
2. `index.html` loads `main.js`
3. `main.js` creates Vue app and loads `App.vue`
4. `App.vue` loads Navbar, Footer, and router-view
5. Router checks current URL and loads appropriate page
6. Page loads its required components
7. All components use styles from `design-system.css`

### **2. Component Communication**
```
Navbar.vue ←→ Pinia Store ←→ HeroSection.vue
   ↓              ↓                ↓
Uses menu      Stores current   Uses slide
toggle         slide data       navigation
```

### **3. CSS Cascade**
1. `design-system.css` - Global variables and base styles
2. `main.css` - Additional global styles  
3. Component styles - Specific to each component
4. Scoped styles - Only apply to that component

### **4. Responsive Design Flow**
```
Desktop (1024px+)     Tablet (768px-1023px)     Mobile (0-767px)
├─ 3 column footer    ├─ 2 column footer        ├─ 1 column footer
├─ Full navigation    ├─ Condensed navigation   ├─ Hamburger menu
├─ Large text         ├─ Medium text            ├─ Small text
└─ Grid layouts       └─ Smaller grids          └─ Single columns
```

---

## Development Workflow

### **Daily Development Commands**
```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

### **Making Changes**

#### **Changing Colors:**
1. Edit colors in `src/assets/design-system.css`
2. All components automatically use new colors

#### **Adding New Page:**
1. Create new file in `src/views/` (e.g., `Portfolio.vue`)
2. Add route in `src/router/index.js`
3. Add navigation link in `Navbar.vue`

#### **Adding New Component:**
1. Create new file in `src/components/`
2. Import it in the page where you want to use it
3. Add it to the template

#### **Modifying Existing Component:**
1. Find the component file
2. Edit the template (HTML structure)
3. Edit the style (CSS styling)  
4. Edit the script (JavaScript logic)

### **File Organization Rules**
- **Components** = Reusable pieces (Navbar, Footer, etc.)
- **Views** = Complete pages (Home, About, etc.)
- **Assets** = CSS files, images, fonts
- **Stores** = Shared data between components
- **Router** = Page navigation setup

### **CSS Best Practices in This Project**
1. **Always use design system variables** - `var(--color-primary)` instead of `#C17A60`
2. **Mobile-first responsive** - Write mobile styles first, then add desktop
3. **Scoped styles** - Use `<style scoped>` to avoid CSS conflicts
4. **Consistent spacing** - Use `var(--space-4)`, `var(--space-8)`, etc.

### **Vue Best Practices in This Project**
1. **Composition API** - All components use `<script setup>`
2. **Single File Components** - Template, script, and style in one file
3. **Props for data passing** - Pass data from parent to child components
4. **Pinia for state management** - Share data between components
5. **Router for navigation** - Handle page changes

---

## Quick Reference

### **Most Important Files:**
- `src/App.vue` - Main app structure
- `src/assets/design-system.css` - All colors, fonts, spacing
- `src/stores/index.js` - Shared data
- `src/router/index.js` - Page navigation

### **To Add New Content:**
- **New page** → Create in `src/views/` + add route
- **New section** → Create in `src/components/` + import in page
- **New style** → Add to `design-system.css` or component

### **Common Tasks:**
- **Change colors** → Edit `design-system.css`
- **Add menu item** → Edit `Navbar.vue` + add route
- **Modify footer** → Edit `Footer.vue`
- **Update contact info** → Edit `stores/index.js`

This documentation covers how every part of your Fame Spread Media website works together. Each component, CSS file, and JavaScript file has a specific purpose in creating the complete user experience.