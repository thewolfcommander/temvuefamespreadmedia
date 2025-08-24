<template>
  <div class="about-section">
    <!-- Top accent line -->
    <div class="top-accent-line"></div>

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
              Welcome to FameSpreadMedia, a growing digital marketing agency dedicated to optimizing your online
              success. Our expert team crafts custom strategies fueled by data-driven insights to amplify your brand's
              visibility and engagement.
            </p>
            <p class="description-paragraph">
              With a proven track record, we have successfully collaborated with 5+ brands across diverse industries. By
              choosing us, you can trust that we will bring our expertise and passion to help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery Section -->
    <section class="portfolio-section">
      <div class="portfolio-container">
        <div class="portfolio-grid">
          <div v-for="(image, index) in portfolioImages" :key="index" class="portfolio-item"
            @click="openLightbox(image)">
            <div class="image-wrapper">
              <img :src="image.src" :alt="image.alt" class="portfolio-image" />
              <div class="overlay">
                <div class="overlay-content">
                  <h4 class="brand-name">{{ image.brand }}</h4>
                  <p class="brand-category">{{ image.category }}</p>
                  <div class="view-project">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                      </path>
                    </svg>
                    <span>View Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="lightbox" appear>
      <div v-if="showLightbox" class="lightbox-overlay" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="close-button" @click="closeLightbox">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="lightbox-grid">
            <!-- Image Section -->
            <div class="lightbox-image-section">
              <div class="lightbox-image-wrapper">
                <img :src="selectedImage?.src" :alt="selectedImage?.alt" class="lightbox-image" />
              </div>
            </div>

            <!-- Content Section -->
            <div class="lightbox-content-section">
              <div class="lightbox-header">
                <div class="brand-info">
                  <h2 class="lightbox-brand-name">{{ selectedImage?.brand }}</h2>
                  <div class="brand-meta">
                    <span class="brand-category">{{ selectedImage?.category }}</span>
                    <span class="brand-year">{{ selectedImage?.year }}</span>
                  </div>
                </div>
              </div>

              <div class="lightbox-body">
                <div class="content-section">
                  <h3>Project Overview</h3>
                  <p>{{ selectedImage?.description }}</p>
                </div>

                <div class="content-section">
                  <h3>The Challenge</h3>
                  <p>{{ selectedImage?.challenge }}</p>
                </div>

                <div class="content-section">
                  <h3>Our Solution</h3>
                  <p>{{ selectedImage?.solution }}</p>
                </div>

                <div class="content-section">
                  <h3>Results</h3>
                  <ul class="results-list">
                    <li v-for="result in selectedImage?.results" :key="result">{{ result }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Portfolio images with detailed brand content
const portfolioImages = [
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-11044468.jpeg',
    alt: 'Premium Coffee Packaging Design',
    brand: 'Aurora Coffee Co.',
    category: 'Food & Beverage',
    year: '2023',
    description: 'A sophisticated packaging design for premium artisanal coffee featuring minimalist aesthetics and sustainable materials. The design emphasizes the organic nature of the product while maintaining a luxurious appeal.',
    challenge: 'Create packaging that reflects the premium quality of single-origin coffee while appealing to environmentally conscious consumers.',
    solution: 'Developed a clean, minimalist design using recycled kraft paper with elegant typography and a subtle color palette that highlights the coffee origin story.',
    results: ['40% increase in premium product sales', 'Featured in packaging design awards', 'Improved brand recognition by 60%']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-11757216.jpeg',
    alt: 'Organic Skincare Brand Identity',
    brand: 'Pure Elements',
    category: 'Beauty & Cosmetics',
    year: '2023',
    description: 'Complete brand identity and packaging system for an organic skincare line. The design emphasizes natural ingredients and sustainable practices through earthy tones and botanical illustrations.',
    challenge: 'Position a new skincare brand in a competitive market while communicating natural and organic values.',
    solution: 'Created a cohesive visual identity using botanical elements, earth tones, and clean typography to convey purity and natural effectiveness.',
    results: ['Launch in 150+ retail stores', '85% positive customer feedback', 'Featured in beauty industry publications']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-6167329.jpeg',
    alt: 'Artisan Chocolate Packaging',
    brand: 'Noir Confections',
    category: 'Gourmet Food',
    year: '2022',
    description: 'Luxury packaging design for artisan chocolate collection. The design balances elegance with appetite appeal, using rich colors and premium finishes to reflect the quality of the product.',
    challenge: 'Create packaging that justifies premium pricing while standing out in the competitive chocolate market.',
    solution: 'Developed an elegant design system using deep colors, gold accents, and tactile finishes that enhance the unboxing experience.',
    results: ['30% increase in gift sales', 'Expansion to luxury department stores', 'International design recognition']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-6483579.jpeg',
    alt: 'Tech Startup Brand Design',
    brand: 'InnovateTech Solutions',
    category: 'Technology',
    year: '2023',
    description: 'Modern brand identity for a technology startup specializing in AI solutions. The design conveys innovation, reliability, and forward-thinking through geometric patterns and a contemporary color scheme.',
    challenge: 'Establish credibility for a new tech company while communicating cutting-edge innovation.',
    solution: 'Created a dynamic visual identity using geometric elements and a bold color palette that reflects technological advancement and reliability.',
    results: ['Successful Series A funding', 'Partnership with major corporations', '200% growth in client acquisition']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-18347938.jpeg',
    alt: 'Sustainable Fashion Brand',
    brand: 'EcoThread Apparel',
    category: 'Fashion & Lifestyle',
    year: '2023',
    description: 'Comprehensive branding for a sustainable fashion startup. The design emphasizes environmental consciousness and ethical manufacturing through natural textures and earth-inspired colors.',
    challenge: 'Communicate sustainability values while appealing to fashion-conscious consumers.',
    solution: 'Developed a brand identity that balances environmental messaging with contemporary fashion aesthetics.',
    results: ['Featured in sustainability publications', '50% of sales from repeat customers', 'B-Corp certification achieved']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-59150.jpeg',
    alt: 'Craft Beer Brewery Identity',
    brand: 'Mountain Peak Brewery',
    category: 'Alcoholic Beverages',
    year: '2022',
    description: 'Complete brand identity for a craft brewery including logo design, packaging, and merchandise. The design captures the rugged, authentic nature of craft brewing with hand-drawn elements.',
    challenge: 'Differentiate from numerous craft breweries while maintaining authentic, local appeal.',
    solution: 'Created a distinctive visual identity using hand-crafted elements and local mountain imagery to establish strong regional connection.',
    results: ['Expanded to 50+ local venues', 'Award-winning beer recognition', 'Successful crowdfunding campaign']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-8101525.jpeg',
    alt: 'Wellness Center Branding',
    brand: 'Harmony Wellness Spa',
    category: 'Health & Wellness',
    year: '2023',
    description: 'Tranquil and sophisticated branding for a wellness center offering holistic health services. The design promotes calm and rejuvenation through soft colors and organic shapes.',
    challenge: 'Create a calming brand presence that appeals to stress-conscious urban professionals.',
    solution: 'Developed a serene visual identity using soft gradients, natural forms, and calming typography to evoke tranquility and wellness.',
    results: ['300% increase in bookings', 'Expansion to three locations', 'Featured in wellness magazines']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-11044468.jpeg',
    alt: 'Gourmet Restaurant Identity',
    brand: 'Saveur Fine Dining',
    category: 'Food & Restaurant',
    year: '2022',
    description: 'Elegant branding for a fine dining restaurant specializing in contemporary cuisine. The design balances sophistication with approachability through refined typography and tasteful imagery.',
    challenge: 'Position restaurant as fine dining destination while maintaining welcoming atmosphere.',
    solution: 'Created an elegant but approachable brand identity using sophisticated typography and warm color palette.',
    results: ['Michelin Guide recognition', 'Fully booked for 6 months ahead', '95% positive reviews']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-12725463.jpeg',
    alt: 'Artisan Bakery Packaging',
    brand: 'Golden Grain Artisan Bakery',
    category: 'Bakery & Pastry',
    year: '2023',
    description: 'Warm and inviting packaging design for an artisan bakery specializing in traditional bread-making techniques. The design emphasizes craftsmanship and natural ingredients.',
    challenge: 'Convey artisanal quality and traditional methods in a modern marketplace.',
    solution: 'Developed packaging that celebrates traditional craftsmanship with hand-drawn illustrations and warm, earthy colors.',
    results: ['Featured in food magazines', '60% increase in weekend sales', 'Wholesale contracts with cafes']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-7688336.jpeg',
    alt: 'Digital Agency Rebrand',
    brand: 'Pixel Perfect Digital',
    category: 'Digital Marketing',
    year: '2023',
    description: 'Modern rebrand for a digital marketing agency focusing on creative solutions and data-driven results. The design combines creativity with professionalism through bold graphics and clean layouts.',
    challenge: 'Rebrand established agency to attract larger corporate clients while maintaining creative edge.',
    solution: 'Created a professional yet creative brand identity that showcases both strategic thinking and creative execution.',
    results: ['40% increase in enterprise clients', 'Team expansion by 150%', 'Industry award recognition']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-3829446.jpeg',
    alt: 'Luxury Watch Brand Identity',
    brand: 'Chronos Timepieces',
    category: 'Luxury Goods',
    year: '2022',
    description: 'Prestigious brand identity for luxury Swiss timepieces. The design emphasizes precision, heritage, and exclusivity through classic typography and premium materials.',
    challenge: 'Establish new luxury watch brand in market dominated by century-old companies.',
    solution: 'Created a timeless visual identity that honors watchmaking tradition while introducing contemporary elegance.',
    results: ['Partnership with luxury retailers', 'Celebrity endorsements', 'Waiting list for limited editions']
  },
  {
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-19147426.jpeg',
    alt: 'Organic Farm Brand Design',
    brand: 'Heritage Organic Farms',
    category: 'Agriculture & Food',
    year: '2023',
    description: 'Authentic branding for organic farm emphasizing sustainable farming practices and farm-to-table freshness. The design connects consumers with the source of their food.',
    challenge: 'Communicate organic authenticity and sustainable practices to urban consumers.',
    solution: 'Developed a genuine brand identity using natural imagery and honest storytelling to build trust and connection.',
    results: ['Direct-to-consumer sales growth', 'Farmers market expansion', 'Sustainable farming certification']
  }
];

const selectedImage = ref(null)
const showLightbox = ref(false)

const openLightbox = (image) => {
  selectedImage.value = image
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}
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

/* Portfolio Item Hover Effects */
.portfolio-item {
  cursor: pointer;
  position: relative;
}

.image-wrapper {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition-base);
}

.portfolio-item:hover .overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: var(--color-text-white);
  padding: var(--space-4);
}

.brand-name {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
  color: var(--color-text-white);
}

.brand-category {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.view-project {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  backdrop-filter: blur(10px);
}

.lightbox-content {
  position: relative;
  max-width: 1400px;
  max-height: 90vh;
  width: 100%;
  background: var(--bg-dark);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-white);
  cursor: pointer;
  z-index: 10;
  transition: var(--transition-base);
  backdrop-filter: blur(10px);
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.lightbox-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
  max-height: 90vh;
}

.lightbox-image-section {
  background: var(--bg-black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
}

.lightbox-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.lightbox-content-section {
  background: var(--bg-dark);
  padding: var(--space-8);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.lightbox-header {
  margin-bottom: var(--space-8);
  border-bottom: 1px solid rgba(var(--color-white-rgb), 0.1);
  padding-bottom: var(--space-6);
}

.lightbox-brand-name {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  margin-bottom: var(--space-3);
  line-height: var(--line-height-tight);
}

.brand-meta {
  display: flex;
  gap: var(--space-6);
  align-items: center;
}

.brand-meta .brand-category {
  background: var(--color-primary);
  color: var(--color-text-white);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.brand-year {
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}

.lightbox-body {
  flex: 1;
}

.content-section {
  margin-bottom: var(--space-10);
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h3 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-white);
  margin-bottom: var(--space-6);
  padding-top: var(--space-2);
  position: relative;
}

.content-section h3::before {
  content: '';
  position: absolute;
  bottom: -var(--space-3);
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--color-primary);
}

.content-section p {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.results-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.results-list li {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  padding: var(--space-2) 0;
  padding-left: var(--space-6);
  position: relative;
}

.results-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

/* Lightbox Transitions */
.lightbox-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.lightbox-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.lightbox-enter-from {
  opacity: 0;
}

.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-content {
  transform: scale(0.85) translateY(60px);
  opacity: 0;
}

.lightbox-leave-to .lightbox-content {
  transform: scale(0.95) translateY(30px);
  opacity: 0;
}

.lightbox-enter-active .lightbox-content {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) 0.05s;
}

.lightbox-leave-active .lightbox-content {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Responsive Lightbox */
@media (max-width: 1024px) {
  .lightbox-grid {
    grid-template-columns: 1fr;
    max-height: 90vh;
  }

  .lightbox-image-section {
    min-height: 40vh;
    max-height: 50vh;
    padding: var(--space-6);
  }

  .lightbox-content-section {
    padding: var(--space-6);
  }

  .lightbox-brand-name {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 768px) {
  .lightbox-overlay {
    padding: var(--space-4);
    margin-top: 3rem;
  }

  .lightbox-content {
    border-radius: var(--radius-lg);
  }

  .close-button {
    top: var(--space-4);
    right: var(--space-4);
    width: 40px;
    height: 40px;
  }

  .lightbox-image-section {
    padding: var(--space-4);
    min-height: 35vh;
  }

  .lightbox-content-section {
    padding: var(--space-4);
  }

  .lightbox-header {
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-4);
  }

  .lightbox-brand-name {
    font-size: var(--font-size-xl);
  }

  .brand-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .content-section {
    margin-bottom: var(--space-8);
  }

  .content-section h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-5);
    padding-top: var(--space-1);
  }
}

@media (max-width: 480px) {
  .overlay-content {
    padding: var(--space-3);
  }

  .brand-name {
    font-size: var(--font-size-base);
  }

  .brand-category {
    font-size: var(--font-size-xs);
  }

  .view-project {
    font-size: var(--font-size-xs);
  }
}
</style>