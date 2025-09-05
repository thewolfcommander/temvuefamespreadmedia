<template>
  <div class="hero-container">
    <!-- CTA Buttons -->
    <div class="cta-div">
      <a href="#/contact" class="phone-number"> Get a Quote </a>
      <a href="#/portfolio" class="quote-button">
        <span class="quote-button-text">View our Portfolio</span>
      </a>
    </div>

    <!-- Main Hero Section -->
    <section class="hero-section">
      <div class="swiper main-slider" ref="mainSliderEl">
        <div class="swiper-wrapper">
          <!-- Slide 1: Branding & Strategy -->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="content-left">
                <h1 class="main-heading"><span>KAPDA</span> FOR YOUR BRAND</h1>
                <p class="sub-text">
                  Identity that's stitched to fit, not off-the-rack. We craft brand
                  strategies that resonate with your audience and stand out in the
                  competitive marketplace.
                </p>
              </div>
              <div class="content-right">
                <img src="https://pub-4418003ce598489da80f01f8a66e75db.r2.dev/3.webp" alt="Branding & Strategy" />
              </div>
            </div>
          </div>

          <!-- Slide 2: Social Media Marketing -->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="content-left">
                <h1 class="main-heading"><span>AWAZ</span> FOR YOUR BRAND</h1>
                <p class="sub-text">
                  Make the internet talk, trend, and trust. We amplify your brand's voice
                  across social platforms, creating conversations that convert.
                </p>
              </div>
              <div class="content-right">
                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/herosection/smm.webp"
                  alt="Social Media Marketing" />
              </div>
            </div>
          </div>

          <!-- Slide 3: Website & E-Commerce -->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="content-left">
                <h1 class="main-heading"><span>MAKAAN</span> FOR YOUR BRAND</h1>
                <p class="sub-text">
                  A high-converting home your customers return to. We build digital
                  experiences that transform visitors into loyal customers.
                </p>
              </div>
              <div class="content-right">
                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/herosection/website.webp"
                  alt="Website & E-Commerce" />
              </div>
            </div>
          </div>

          <!-- Slide 4: Performance Marketing -->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="content-left">
                <h1 class="main-heading"><span>ROTI</span> FOR YOUR BRAND</h1>
                <p class="sub-text">
                  Campaigns that feed growth every single day. We deliver ROI-focused
                  marketing that sustains and scales your business.
                </p>
              </div>
              <div class="content-right">
                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/herosection/performance.webp"
                  alt="Performance Marketing" />
              </div>
            </div>
          </div>

          <!-- Slide 5: Marketplace & Sales Support -->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="content-left">
                <h1 class="main-heading"><span>DUKAAN</span> FOR YOUR BRAND</h1>
                <p class="sub-text">
                  From listing to lightning deals, we turn shelves into sales. Complete
                  marketplace management that drives revenue across all platforms.
                </p>
              </div>
              <div class="content-right">
                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/herosection/market.webp"
                  alt="Marketplace & Sales" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Navigation -->
      <div class="timeline-navigation">
        <div class="timeline-track">
          <div class="timeline-line"></div>
          <div class="timeline-items">
            <div class="timeline-item" :class="{ active: currentSlide === 0 }" @click="goToSlide(0)">
              <div class="timeline-dot"></div>
              <span class="timeline-label">Branding</span>
            </div>
            <div class="timeline-item" :class="{ active: currentSlide === 1 }" @click="goToSlide(1)">
              <div class="timeline-dot"></div>
              <span class="timeline-label">Social Media</span>
            </div>
            <div class="timeline-item" :class="{ active: currentSlide === 2 }" @click="goToSlide(2)">
              <div class="timeline-dot"></div>
              <span class="timeline-label">Website</span>
            </div>
            <div class="timeline-item" :class="{ active: currentSlide === 3 }" @click="goToSlide(3)">
              <div class="timeline-dot"></div>
              <span class="timeline-label">Performance</span>
            </div>
            <div class="timeline-item" :class="{ active: currentSlide === 4 }" @click="goToSlide(4)">
              <div class="timeline-dot"></div>
              <span class="timeline-label">Marketplace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import gsap from "gsap";

// Configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

const mainSliderEl = ref(null);
const currentSlide = ref(0);
let mainSlider = null;

// Function to animate text on slide change
function animateSlideContent(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  if (!activeSlide) return;

  const heading = activeSlide.querySelector(".main-heading");
  const subText = activeSlide.querySelector(".sub-text");
  const image = activeSlide.querySelector(".content-right img");

  // Reset and animate heading
  if (heading) {
    gsap.fromTo(
      heading,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
  }

  // Reset and animate sub text
  if (subText) {
    gsap.fromTo(
      subText,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
  }

  // Animate image
  if (image) {
    gsap.fromTo(
      image,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.3 }
    );
  }
}

// Function to go to specific slide
function goToSlide(index) {
  if (mainSlider) {
    mainSlider.slideToLoop(index);
  }
}

onMounted(() => {
  // Initialize main slider with partial slide visibility
  mainSlider = new Swiper(mainSliderEl.value, {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 60,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.1,
        spaceBetween: 35,
      },
      1024: {
        slidesPerView: 1.2,
        spaceBetween: 45,
      },
      1440: {
        slidesPerView: 1.3,
        spaceBetween: 60,
      },
    },
    on: {
      slideChange: function () {
        currentSlide.value = this.realIndex;
        animateSlideContent(this);
      },
      init: function () {
        animateSlideContent(this);
      },
    },
  });
});

onBeforeUnmount(() => {
  if (mainSlider) {
    mainSlider.destroy();
  }
});
</script>

<style scoped>
.hero-container {
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(180deg, var(--bg-dark) 0%, #1a1a1a 100%); */
  position: relative;
  overflow: hidden;
}

/* CTA Section */
.cta-div {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 20px;
}

.phone-number {
  color: var(--color-text-white);
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  padding: var(--space-2) var(--space-5);
  background: rgba(var(--color-white-rgb), 0.1);
  border-radius: var(--radius-full);
  backdrop-filter: blur(10px);
  transition: var(--transition-base);
}

.phone-number:hover {
  background: rgba(var(--color-white-rgb), 0.2);
}

.quote-button {
  background: linear-gradient(135deg,
      var(--color-primary),
      var(--color-primary-dark),
      var(--color-primary-light));
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: var(--transition-base);
}

.quote-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(var(--color-primary-rgb), 0.3);
}

.quote-button-text {
  color: var(--color-text-white);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  position: relative;
  z-index: 1;
}

/* Hero Section */
.hero-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

/* Main Slider */
.main-slider {
  width: 100%;
  height: 75vh;
  position: relative;
}

.swiper-slide {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
  opacity: 0.25;
  transform: scale(0.85);
  filter: blur(4px);
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}

.slide-content {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 100%;
}

.content-left {
  flex: 1;
  max-width: 50%;
  padding-right: 50px;
}

.main-heading {
  font-family: var(--font-family-heading);
  font-size: 2.8rem;
  font-weight: var(--font-weight-black);
  color: var(--color-text-white);
  margin-bottom: 20px;
  line-height: 1.05;
  text-transform: uppercase;
  /* remove if you want "Proof of Fame" casing */
  letter-spacing: 0.5px;

  /* render nicely on dark backgrounds */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  /* subtle edge crispness */
  -webkit-text-stroke: 0.4px rgba(0, 0, 0, 0.22);

  /* layered drop shadows (tight → long) + slight top highlight */
  text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.12),
    /* rim light from above */
    0 1px 1px rgba(0, 0, 0, 0.4),
    /* contact shadow for depth */
    0 3px 6px rgba(0, 0, 0, 0.38),
    /* short, soft shadow */
    0 8px 18px rgba(0, 0, 0, 0.45),
    /* medium throw */
    0 18px 44px rgba(0, 0, 0, 0.55);
  /* long ambient shadow */
}

.main-heading>span {
  color: var(--color-primary);
  display: inline-block;
  position: relative;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  filter: blur(10px);
  transition: none;
}

/* Active slide animates the span */
.swiper-slide-active .main-heading>span {
  animation: revealGlow 1.2s ease-out forwards,
    subtlePulse 3s ease-in-out 1.2s infinite;
}

@keyframes revealGlow {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
    filter: blur(10px);
    text-shadow: 0 0 0 var(--color-primary);
  }

  50% {
    opacity: 1;
    transform: translateY(0) scale(1.05);
    filter: blur(0);
    text-shadow: 0 0 30px var(--color-primary),
      0 0 60px var(--color-primary);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    text-shadow: 0 0 20px rgba(var(--color-primary-rgb), 0.5),
      0 0 40px rgba(var(--color-primary-rgb), 0.3);
  }
}

@keyframes subtlePulse {

  0%,
  100% {
    text-shadow: 0 0 20px rgba(var(--color-primary-rgb), 0.5),
      0 0 40px rgba(var(--color-primary-rgb), 0.3);
  }

  50% {
    text-shadow: 0 0 25px rgba(var(--color-primary-rgb), 0.7),
      0 0 50px rgba(var(--color-primary-rgb), 0.4),
      0 0 75px rgba(var(--color-primary-rgb), 0.2);
  }
}

.sub-text {
  font-family: var(--font-family-body);
  font-size: clamp(var(--font-size-xs), 1vw, var(--font-size-sm));
  color: var(--color-text-secondary);
  font-size: 1.4rem;
  line-height: 1.7;
  margin: 0;
}

.content-right {
  flex: 2;
  max-width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-right img {
  max-width: 120%;
  max-height: 111%;
  object-fit: contain;
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4));
}

/* Timeline Navigation */
.timeline-navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  z-index: 10;
}

.timeline-track {
  position: relative;
  width: 100%;
}

.timeline-line {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(var(--color-white-rgb), 0.15);
  z-index: 0;
  margin-top: -3px;
}

.timeline-items {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  background: var(--color-secondary);
  border: 3px solid rgba(var(--color-white-rgb), 0.3);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-5);
  transition: var(--transition-base);
  position: relative;
}

.timeline-item.active .timeline-dot {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: scale(1.5);
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
}

.timeline-label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  white-space: nowrap;
  transition: var(--transition-base);
  text-align: center;
  padding: var(--space-2) var(--space-4);
  background: rgba(var(--color-black-rgb), 0.6);
  border-radius: var(--radius-lg);
  border: 1px solid transparent;
}

.timeline-item.active .timeline-label {
  color: var(--color-text-white);
  font-weight: var(--font-weight-bold);
  background: rgba(var(--color-primary-rgb), 0.25);
  border-color: var(--color-primary);
}

.timeline-item:hover .timeline-label {
  color: var(--color-text-white);
}

/* Responsive Design */
@media (max-width: 1440px) {
  .slide-content {
    max-width: 1400px;
    padding: 0 60px;
  }
}

@media (max-width: 1024px) {
  .slide-content {
    max-width: 100%;
    padding: 0 40px;
  }

  .main-heading {
    font-size: 1.8rem;
  }

  .sub-text {
    font-size: 0.8rem;
  }

  .timeline-navigation {
    bottom: 50px;
  }
}

@media (max-width: 768px) {
  .cta-div {
    top: 20px;
    right: 20px;
    gap: 10px;
  }

  .phone-number {
    display: none;
  }

  .quote-button {
    padding: 10px 20px;
  }

  .quote-button-text {
    font-size: 0.875rem;
  }

  .hero-section {
    min-height: 90vh;
    height: auto;
    margin-top: 4rem;
    padding-bottom: 4rem;
  }

  .main-slider {
    height: 60vh;
  }

  .slide-content {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    justify-content: center;
  }

  .content-left {
    max-width: 100%;
    padding-right: 0;
    margin-bottom: 30px;
  }

  .content-right {
    max-width: 80%;
    margin: 0 auto;
  }

  .main-heading {
    font-size: 2.2rem;
    margin-bottom: 22px;
  }

  .sub-text {
    font-size: 0.7rem;
  }

  .timeline-navigation {
    bottom: -13px;
    width: 90%;
  }

  .timeline-label {
    font-size: 1.1rem;
    padding: 5px 10px;
  }

  .timeline-items {
    justify-content: center;
  }

  .timeline-item {
    display: none;
  }

  .timeline-item.active {
    display: flex;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 85vh;
    margin-top: 2rem;
    padding-bottom: 2rem;
  }

  .main-slider {
    height: 65vh;
  }

  .main-heading {
    font-size: 2.2rem;
  }

  .sub-text {
    font-size: 1.1rem;
  }
}
</style>
