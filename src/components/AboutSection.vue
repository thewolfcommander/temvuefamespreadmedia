<template>
  <div class="about-section">
    <!-- Top accent line -->
    <div class="top-accent-line"></div>
    
    <!-- CTA Header -->
    <div class="cta-header">
      <a href="tel:+919871521144" class="phone-number">
        +91 9871521144
      </a>
      <a href="#" class="quote-button">
        <span class="quote-button-text">Get a Quote</span>
      </a>
    </div>

    <!-- Main Hero Section -->
    <section class="hero-content">
      <div class="container">
        <div class="content-wrapper">
          <h3 class="intro-text">Are you looking to convert</h3>
          <h1 class="main-heading">
            <span class="heading-line">IDEAS INTO</span>
            <span class="heading-line">OPPORTUNITIES?</span>
          </h1>
          <h2 class="sub-heading">We build an immersive brand!</h2>
          
          <div class="description-content">
            <p class="description-paragraph">
              The best business relationships start with a simple discussion. You might be wondering how we know. With more than 10 years of proven experience, we got opportunities to interact with a wide range of potential clients worldwide.
            </p>
            <p class="description-paragraph">
              As a creative branding agency, we consider every instant of essential change conceals immense opportunity. That's what makes us come up with a powerful medium that drives the future. From idea to execution, we provide aesthetic branding experience and packaging solutions that enhance your brand and make it scale faster and more robust.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery Section -->
    <section class="portfolio-section">
      <div class="portfolio-container">
        <div class="portfolio-grid">
          <div 
            v-for="(image, index) in portfolioImages" 
            :key="index" 
            class="portfolio-item"
          >
            <div class="image-wrapper">
              <img :src="image.src" :alt="image.alt" class="portfolio-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Portfolio images - using placeholders that match the design
const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center', alt: 'Atta Flour Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1549198041-6f0fb6de8fb1?w=600&h=400&fit=crop&crop=center', alt: 'Chocolate Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop&crop=center', alt: 'Cosmetics Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center', alt: 'Saffron Box Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=center', alt: 'Dishwash Pods Packaging' },
  { src: 'https://images.unsplash.com/photo-1605300840201-2d75a4b1ba9a?w=600&h=400&fit=crop&crop=center', alt: 'Dry Fruits Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center', alt: 'Nuts Pouch Packaging' },
  { src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop&crop=center', alt: 'Premium Nuts Tin Design' },
  { src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop&crop=center', alt: 'Edible Oil Packaging' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center', alt: 'Frozen Food Packaging' },
  { src: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=400&fit=crop&crop=center', alt: 'Ghee Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1587049016823-69641e29ba1c?w=600&h=400&fit=crop&crop=center', alt: 'Honey Jar Label Design' },
];
</script>

<style scoped>
.about-section {
  background: var(--bg-dark);
  position: relative;
  min-height: 100vh;
}

/* Top accent line */
.top-accent-line {
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary) 0%, rgba(var(--color-primary-rgb), 0.1) 100%);
  width: 100%;
}

/* CTA Header */
.cta-header {
  position: absolute;
  top: var(--space-8);
  right: var(--space-12);
  display: flex;
  align-items: center;
  gap: var(--space-5);
  z-index: var(--z-fixed);
}

.phone-number {
  color: var(--color-text-white);
  text-decoration: none;
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  padding: var(--space-3) var(--space-5);
  background: rgba(var(--color-white-rgb), 0.1);
  border-radius: var(--radius-full);
  backdrop-filter: blur(10px);
  transition: var(--transition-base);
  border: 1px solid rgba(var(--color-white-rgb), 0.1);
}

.phone-number:hover {
  background: rgba(var(--color-white-rgb), 0.2);
  transform: translateY(-1px);
}

.quote-button {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: var(--transition-base);
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.3);
}

.quote-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--color-primary-rgb), 0.4);
}

.quote-button-text {
  color: var(--color-text-white);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  position: relative;
  z-index: 1;
}

/* Hero Content */
.hero-content {
  padding: var(--space-24) 0 var(--space-20);
  display: flex;
  align-items: center;
  min-height: 90vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-12);
  width: 100%;
}

.content-wrapper {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.intro-text {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-light);
  color: var(--color-text-white);
  margin-bottom: var(--space-4);
  position: relative;
}

.intro-text::before {
  content: '';
  position: absolute;
  top: -var(--space-4);
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--color-primary);
}

.main-heading {
  font-family: var(--font-family-heading);
  font-size: clamp(48px, 8vw, 90px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-8);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.heading-line {
  display: block;
}

.sub-heading {
  font-family: var(--font-family-heading);
  font-size: clamp(24px, 4vw, 36px);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-white);
  margin-bottom: var(--space-12);
  line-height: var(--line-height-normal);
}

.description-content {
  max-width: 800px;
  margin: 0 auto;
}

.description-paragraph {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  text-align: center;
}

.description-paragraph:last-child {
  margin-bottom: 0;
}

/* Portfolio Section */
.portfolio-section {
  background: var(--bg-dark);
  padding: 0 0 var(--space-16);
}

.portfolio-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(var(--color-white-rgb), 0.1);
}

.portfolio-item {
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--bg-dark);
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: var(--transition-slow);
  filter: brightness(0.9) saturate(1.1);
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
  filter: brightness(1) saturate(1.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cta-header {
    top: var(--space-6);
    right: var(--space-8);
    gap: var(--space-3);
  }
  
  .phone-number {
    font-size: var(--font-size-sm);
    padding: var(--space-2) var(--space-4);
  }
  
  .quote-button {
    padding: var(--space-2) var(--space-5);
  }
  
  .quote-button-text {
    font-size: var(--font-size-xs);
  }

  .container {
    padding: 0 var(--space-8);
  }

  .hero-content {
    padding: var(--space-20) 0 var(--space-16);
  }

  .main-heading {
    font-size: clamp(36px, 7vw, 70px);
  }

  .sub-heading {
    font-size: clamp(20px, 3vw, 28px);
  }

  .description-paragraph {
    font-size: var(--font-size-base);
  }
}

@media (max-width: 768px) {
  .cta-header {
    top: var(--space-4);
    right: var(--space-5);
    flex-direction: column;
    gap: var(--space-2);
  }

  .phone-number {
    display: none;
  }

  .container {
    padding: 0 var(--space-6);
  }

  .hero-content {
    padding: var(--space-16) 0 var(--space-12);
    min-height: 80vh;
  }

  .intro-text {
    font-size: var(--font-size-lg);
  }

  .main-heading {
    font-size: clamp(28px, 6vw, 50px);
    margin-bottom: var(--space-6);
  }

  .sub-heading {
    font-size: clamp(18px, 2.5vw, 24px);
    margin-bottom: var(--space-8);
  }

  .description-paragraph {
    font-size: var(--font-size-base);
    margin-bottom: var(--space-5);
  }

  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .hero-content {
    padding: var(--space-12) 0 var(--space-10);
  }

  .intro-text {
    font-size: var(--font-size-base);
  }

  .main-heading {
    font-size: clamp(24px, 5vw, 36px);
  }

  .sub-heading {
    font-size: clamp(16px, 2vw, 20px);
  }

  .description-paragraph {
    font-size: var(--font-size-sm);
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>