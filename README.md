# Fame Spread Media - Creative Agency Website

A modern, responsive website for Fame Spread Media - a creative agency specializing in branding, web development, digital marketing, and packaging design.

## 🚀 Features

- **Modern Vue 3 Architecture** with Composition API
- **Responsive Design** that works on all devices
- **Smooth Animations** powered by GSAP
- **Interactive Carousels** using Swiper.js
- **Professional Design System** with consistent colors, typography, and spacing
- **Fast Performance** with Vite build tool
- **SEO-Friendly** routing with Vue Router

## 🛠️ Technologies

- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Vue Router 4](https://router.vuejs.org/)** - Official router for Vue.js
- **[Pinia](https://pinia.vuejs.org/)** - State management for Vue
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animation library
- **[Swiper](https://swiperjs.com/)** - Modern touch slider
- **[RemixIcon](https://remixicon.com/)** - Icon library
- **[Bootstrap](https://getbootstrap.com/)** - CSS framework for responsive design

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.vue      # Navigation header
│   ├── Footer.vue      # Site footer
│   ├── HeroSection.vue # Hero slider with timeline
│   └── ...             # Other components
├── views/              # Page-level components
│   ├── Home.vue        # Homepage
│   ├── About.vue       # About page
│   ├── Services.vue    # Services page
│   └── Contact.vue     # Contact page
├── stores/             # Pinia state management
├── router/             # Vue Router configuration
├── assets/             # Static assets and CSS
│   ├── design-system.css # Global design tokens
│   └── logo.svg        # Brand logo
└── main.js             # Application entry point
```

## 🎨 Design System

The project uses a comprehensive design system with:
- **Brand Colors**: Primary orange (#C17A60), secondary grey, accent colors
- **Typography**: Inter font family with responsive sizing
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable UI patterns with dark theme

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd famespreadmedia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🏗️ Key Components

### **HeroSection.vue**
- Interactive carousel with partial slide visibility
- Timeline navigation with connecting lines
- GSAP animations for smooth transitions
- Responsive design with mobile optimization

### **Navbar.vue**
- Sticky navigation with brand logo
- Mobile hamburger menu
- Smooth scroll-to-section functionality

### **Footer.vue**
- Three-column layout (brand, navigation, contact)
- Social media integration
- Curved design elements
- Floating chat button

### **Services Components**
- Grid-based service showcases
- Hover animations and interactions
- Responsive layouts for all screen sizes

## 🔧 State Management

Uses **Pinia** for centralized state management:
- Current slide tracking for hero carousel
- Mobile menu toggle state
- Services data and site configuration
- Contact information management

## 🎯 Routing

**Vue Router 4** handles navigation:
- `/` - Homepage with all sections
- `/about` - About page with company information
- `/services` - Services overview and details
- `/contact` - Contact form and information
- `404` - Custom not found page

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- **Mobile**: 0-767px (single column layouts)
- **Tablet**: 768px-1023px (optimized grids)
- **Desktop**: 1024px+ (full layouts)

## 🎨 Customization

### Colors
Edit `src/assets/design-system.css` to modify:
```css
:root {
  --color-primary: #C17A60;    /* Brand orange */
  --color-secondary: #B0A59B;  /* Secondary grey */
  --color-accent: #F7F2EC;     /* Light accent */
}
```

### Typography
Modify font settings in the same file:
```css
--font-family-heading: 'Inter', sans-serif;
--heading-h1: clamp(32px, 5vw, 60px);
```

### Spacing
Use the consistent spacing system:
```css
--space-4: 16px;   /* Small spacing */
--space-8: 32px;   /* Medium spacing */
--space-16: 64px;  /* Large spacing */
```

## 📚 Documentation

- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Comprehensive guide to every component and file
- **[CLAUDE.md](./CLAUDE.md)** - Development guidelines and architecture notes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Fame Spread Media.

## 📞 Contact

**Fame Spread Media**
- 📧 Email: hi@famespreadmedia.com
- 📱 Mobile: +91 9871521144 | +91 9871531144
- 🏢 Address: Tower 5, 815B - 8th Floor, RPS 12th Avenue, Sarai Khwaja, Faridabad, Haryana-121003

---

Built with ❤️ by Fame Spread Media
