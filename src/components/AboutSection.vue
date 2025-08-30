<template>
  <div class="section">
    <div class="about-section">
      <!-- Top accent line -->
      <!-- <div class="top-accent-line"></div> -->

      <!-- Main Hero Section -->
      <section class="hero-content">
        <div class="container">
          <div class="content-wrapper">
            <h3 class="intro-text">A Full-Service Marketing and Creative Agency</h3>
            <h1 class="main-heading">
              <span class="heading-line">BUILDING PRESENCE,</span>
              <span class="heading-line">PERFORMANCE & PERCEPTION</span>
            </h1>
            <h2 class="sub-heading">We believe every brand deserves fame, and we're ready to spread it.</h2>

            <div class="description-content">
              <p class="description-paragraph">
                Based in Gurgaon, Fame Spread Media is a full-service marketing and creative agency designed to help brands scale, stand out, and succeed in the digital landscape. We bring strategy, design, content, and performance together under one roof to deliver impactful results.
              </p>
              <p class="description-paragraph">
                Whether you are a startup finding your voice or an established brand seeking to evolve, our approach is tailored to your specific goals. Having served over 20+ brands, we combine purpose, precision, and creativity in every campaign we undertake.
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
              @click="openLightbox(image)"
            >
              <div class="image-wrapper">
                <img :src="image.src" :alt="image.alt" class="portfolio-image" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4 class="brand-name">{{ image.brand }}</h4>
                    <p class="brand-category">{{ image.category }}</p>
                    <div class="view-project">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
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
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div class="lightbox-grid">
              <!-- Image Section -->
              <div class="lightbox-image-section">
                <div class="lightbox-image-wrapper">
                  <img
                    :src="selectedImage?.src"
                    :alt="selectedImage?.alt"
                    class="lightbox-image"
                  />
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
                      <li v-for="result in selectedImage?.results" :key="result">
                        {{ result }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Portfolio images with detailed brand content
const portfolioImages = [
  {
    src:
      "https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-11044468.jpeg",
    alt: "Fashion Brand Social Media Marketing",
    brand: "Label Sakshi Nayyar",
    category: "Social Media Marketing",
    year: "2024",
    description:
      "Provided full platform management for the fashion brand's Instagram profile, including content strategy and planning to build a strong digital presence and engage with the target audience.",
    challenge:
      "Establish a distinctive social media presence for a fashion brand in a highly competitive market while maintaining brand aesthetics.",
    solution:
      "Developed a comprehensive content strategy with curated visuals, engaging captions, and strategic posting schedules to maximize reach and engagement.",
    results: [
      "150% increase in Instagram followers in 3 months",
      "Average engagement rate of 8.5%",
      "30% increase in website traffic from social media",
      "Successfully launched 5 collections through social campaigns",
    ],
  },
  {
    src:
      "https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-11757216.jpeg",
    alt: "E-commerce Marketplace Management",
    brand: "TOTEORGA",
    category: "Marketplace Management",
    year: "2024",
    description:
      "Managed the brand's presence on Amazon, including store setup for their organiser and tote bag products with complete marketplace optimization and management.",
    challenge:
      "Launch a new product line on Amazon with no existing marketplace presence while competing with established brands.",
    solution:
      "Created comprehensive Amazon store setup including product listings, A+ content, keyword optimization, and strategic product positioning.",
    results: [
      "Successfully launched 15+ products on Amazon",
      "Achieved 4.5+ star average rating",
      "Generated 200+ orders in first 3 months",
      "Established brand presence in competitive organizer category",
    ],
  },
  {
    src:
      "https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-6167329.jpeg",
    alt: "Social Media Analytics & Reporting",
    brand: "Inner Infinity",
    category: "Analytics & Reporting",
    year: "2024",
    description:
      "Delivered a comprehensive monthly social media report to track performance and provide insights for the wellness coaching brand's digital strategy.",
    challenge:
      "Provide clear, actionable insights from complex social media data to help a wellness coach optimize their content strategy.",
    solution:
      "Created detailed monthly reports with performance metrics, audience insights, content analysis, and strategic recommendations.",
    results: [
      "40% improvement in content engagement",
      "Strategic pivot resulting in 60% follower growth",
      "Identified top-performing content types",
      "Optimized posting schedule for maximum reach",
    ],
  },
  {
    src:
      "https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/images/pexels-photo-6483579.jpeg",
    alt: "Skincare Content Creation & Branding",
    brand: "Peach Musk",
    category: "Content Creation & Branding",
    year: "2024",
    description:
      "Developed creative assets, including product photography and designs for a line of skincare products like sunscreen and facewash, focusing on clean aesthetics and product appeal.",
    challenge:
      "Create compelling visual content for skincare products that stands out in a saturated beauty market while maintaining brand authenticity.",
    solution:
      "Produced high-quality product photography with clean, minimalist styling and developed cohesive brand visuals across all touchpoints.",
    results: [
      "Professional product catalog with 50+ images",
      "25% increase in online conversion rate",
      "Brand recognition across social platforms",
      "Successful product launch campaign",
    ],
  },
];

const selectedImage = ref(null);
const showLightbox = ref(false);

const openLightbox = (image) => {
  selectedImage.value = image;
  showLightbox.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  showLightbox.value = false;
  selectedImage.value = null;
  document.body.style.overflow = "auto";
};
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
  background: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    rgba(var(--color-primary-rgb), 0.1) 100%
  );
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
  display: block;
  padding-top: 27px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.intro-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.intro-text:hover::before {
  width: 120px;
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

  /* crisp on dark bg */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  /* subtle edge definition */
  -webkit-text-stroke: 0.4px rgba(0, 0, 0, 0.22);

  /* layered metallic shadow (tight → long) + faint rim light */
  text-shadow:
    0 -1px 0 rgba(255, 255, 255, 0.12),
    0 1px 1px rgba(0, 0, 0, 0.40),
    0 3px 6px rgba(0, 0, 0, 0.38),
    0 8px 18px rgba(0, 0, 0, 0.45),
    0 18px 44px rgba(0, 0, 0, 0.55);
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
    margin-top: 9px;
  }

  .hero-content {
    /* padding: var(--space-20) 0 var(--space-16); */
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
    margin-top: 9px;
  }

  .hero-content {
    /* padding: var(--space-16) 0 var(--space-12); */
    min-height: 52vh;
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
    margin-top: 9px;
  }

  /* .hero-content {
    padding: var(--space-12) 0 var(--space-10);
  } */

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
  content: "✓";
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
