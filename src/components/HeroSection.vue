<template>
    <div class="hero-container">
        <!-- CTA Buttons -->
        <div class="cta-div">
            <a href="tel:+919871521144" class="phone-number">
                +91 9871521144
            </a>
            <a href="#" class="quote-button">
                <span class="quote-button-text">Get a Quote</span>
            </a>
        </div>

        <!-- Main Hero Section -->
        <section class="hero-section">
            <div class="swiper main-slider" ref="mainSliderEl">
                <div class="swiper-wrapper">
                    <!-- Slide 1: Packaging Design -->
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="content-left">
                                <h1 class="main-heading">UNWRAP THE ART OF PACKAGING</h1>
                                <p class="sub-text">
                                    Effective packaging that speaks volumes,<br>
                                    designed with creative inserts to enhance your<br>
                                    product sales. Your Product's Perfect Dress
                                </p>
                            </div>
                            <div class="content-right">
                                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/Gemini_Generated_Image_wbzjbowbzjbowbzj__1_-removebg-preview.png"
                                    alt="Packaging Design" />
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Brand Design -->
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="content-left">
                                <h1 class="main-heading">UNLEASHING THE POWER OF YOUR BRAND</h1>
                                <p class="sub-text">
                                    Build your Dreams Through Branding - Where Your Story<br>
                                    Evolves into an Enduring Legacy.
                                </p>
                            </div>
                            <div class="content-right">
                                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/seo-3218580_1280-removebg-preview.png"
                                    alt="Brand Design" />
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Logo Design -->
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="content-left">
                                <h1 class="main-heading">UNVEIL YOUR BRAND'S ESSENCE</h1>
                                <p class="sub-text">
                                    We design unique brand emblems,<br>
                                    helping businesses find their special identity in the<br>
                                    world of marketing and branding
                                </p>
                            </div>
                            <div class="content-right">
                                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/image-removebg-preview.png"
                                    alt="Logo Design" />
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Social Media -->
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="content-left">
                                <h1 class="main-heading">ELEVATE YOUR DIGITAL PRESENCE</h1>
                                <p class="sub-text">
                                    We deliver holistic digital marketing solutions,<br>
                                    guiding them through the constantly evolving realm of<br>
                                    competitive digital landscapes
                                </p>
                            </div>
                            <div class="content-right">
                                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/image-removebg-preview.png"
                                    alt="Social Media" />
                            </div>
                        </div>
                    </div>

                    <!-- Slide 5: Website -->
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="content-left">
                                <h1 class="main-heading">CRAFTING YOUR ONLINE IDENTITY</h1>
                                <p class="sub-text">
                                    Shaping Future Digital Landscapes Today - Your<br>
                                    Imagination, Our expertise, and Limitless Potential<br>
                                    Waiting to Be Unveiled.
                                </p>
                            </div>
                            <div class="content-right">
                                <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/image-removebg-preview.png"
                                    alt="Website Design" />
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
                            <span class="timeline-label">Social Media</span>
                        </div>
                        <div class="timeline-item" :class="{ active: currentSlide === 1 }" @click="goToSlide(1)">
                            <div class="timeline-dot"></div>
                            <span class="timeline-label">Website</span>
                        </div>
                        <div class="timeline-item" :class="{ active: currentSlide === 2 }" @click="goToSlide(2)">
                            <div class="timeline-dot"></div>
                            <span class="timeline-label">Packaging Design</span>
                        </div>
                        <div class="timeline-item" :class="{ active: currentSlide === 3 }" @click="goToSlide(3)">
                            <div class="timeline-dot"></div>
                            <span class="timeline-label">Brand Design</span>
                        </div>
                        <div class="timeline-item" :class="{ active: currentSlide === 4 }" @click="goToSlide(4)">
                            <div class="timeline-dot"></div>
                            <span class="timeline-label">Logo Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import gsap from 'gsap';

// Configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

const mainSliderEl = ref(null);
const currentSlide = ref(0);
let mainSlider = null;

// Function to animate text on slide change
function animateSlideContent(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const heading = activeSlide.querySelector('.main-heading');
    const subText = activeSlide.querySelector('.sub-text');
    const image = activeSlide.querySelector('.content-right img');

    // Reset and animate heading
    if (heading) {
        gsap.fromTo(heading,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
        );
    }

    // Reset and animate sub text
    if (subText) {
        gsap.fromTo(subText,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.4 }
        );
    }

    // Animate image
    if (image) {
        gsap.fromTo(image,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
        );
    }
}

// Function to go to specific slide
function goToSlide(index) {
    if (mainSlider) {
        mainSlider.slideTo(index);
    }
}

onMounted(() => {
    // Initialize main slider with partial slide visibility
    mainSlider = new Swiper(mainSliderEl.value, {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 50,
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
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1.5,
                spaceBetween: 50,
            }
        },
        on: {
            slideChange: function() {
                currentSlide.value = this.realIndex;
                animateSlideContent(this);
            },
            init: function() {
                animateSlideContent(this);
            }
        }
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
    background: var(--bg-dark);
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
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark), var(--color-primary-light));
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
    height: 70vh;
    position: relative;
}

.swiper-slide {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    opacity: 0.3;
}

.swiper-slide-active {
    opacity: 1;
}

.slide-content {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    height: 100%;
}

.content-left {
    flex: 1;
    max-width: 45%;
    padding-right: 40px;
}

.main-heading {
    font-family: var(--font-family-heading);
    font-size: var(--heading-h2);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-white);
    margin-bottom: var(--space-6);
    line-height: var(--line-height-tight);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
}

.sub-text {
    font-family: var(--font-family-body);
    font-size: clamp(var(--font-size-sm), 1.5vw, var(--font-size-lg));
    color: var(--color-text-secondary);
    line-height: var(--line-height-relaxed);
    margin: 0;
}

.content-right {
    flex: 1;
    max-width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-right img {
    max-width: 100%;
    max-height: 80%;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}

/* Timeline Navigation */
.timeline-navigation {
    position: absolute;
    bottom: 80px;
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
    top: 20px;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(var(--color-white-rgb), 0.2);
    z-index: 0;
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
    transition: all 0.3s ease;
    position: relative;
}

.timeline-dot {
    width: 12px;
    height: 12px;
    background: var(--color-secondary);
    border: 2px solid rgba(var(--color-white-rgb), 0.3);
    border-radius: var(--radius-full);
    margin-bottom: var(--space-4);
    transition: var(--transition-base);
    position: relative;
}

.timeline-item.active .timeline-dot {
    background: var(--color-primary);
    border-color: var(--color-primary);
    width: 16px;
    height: 16px;
}

.timeline-item:hover .timeline-dot {
    background: rgba(var(--color-white-rgb), 0.5);
    border-color: rgba(var(--color-white-rgb), 0.8);
}

.timeline-label {
    font-family: var(--font-family-body);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    white-space: nowrap;
    transition: var(--transition-base);
    text-align: center;
    padding: var(--space-2) var(--space-4);
    background: rgba(var(--color-black-rgb), 0.5);
    border-radius: var(--radius-xl);
    border: 1px solid transparent;
}

.timeline-item.active .timeline-label {
    color: var(--color-text-white);
    font-weight: var(--font-weight-semibold);
    background: rgba(var(--color-primary-rgb), 0.2);
    border-color: var(--color-primary);
}

.timeline-item:hover .timeline-label {
    color: rgba(var(--color-white-rgb), 0.9);
}

/* Add connecting dots before and after timeline dots */
.timeline-dot::before,
.timeline-dot::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(var(--color-white-rgb), 0.4);
    border-radius: var(--radius-full);
    top: 50%;
    transform: translateY(-50%);
}

.timeline-dot::before {
    left: -25px;
}

.timeline-dot::after {
    right: -25px;
}

.timeline-item:first-child .timeline-dot::before,
.timeline-item:last-child .timeline-dot::after {
    display: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .slide-content {
        padding: 0 40px;
    }

    .main-heading {
        font-size: 32px;
    }

    .sub-text {
        font-size: 16px;
    }

    .timeline-navigation {
        bottom: 60px;
    }
}

@media (max-width: 768px) {
    .cta-div {
        top: 20px;
        right: 20px;
        gap: 15px;
    }

    .phone-number {
        display: none;
    }

    .quote-button {
        padding: 10px 20px;
    }

    .quote-button-text {
        font-size: 14px;
    }

    .hero-section {
        height: 90vh;
    }

    .main-slider {
        height: 60vh;
    }

    .slide-content {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    .content-left {
        max-width: 100%;
        padding-right: 0;
        margin-bottom: 30px;
    }

    .content-right {
        max-width: 100%;
    }

    .main-heading {
        font-size: 24px;
        margin-bottom: 16px;
    }

    .sub-text {
        font-size: 14px;
    }

    .timeline-navigation {
        bottom: 40px;
        width: 95%;
    }

    .timeline-label {
        font-size: 12px;
        padding: 6px 10px;
    }

    .timeline-items {
        overflow-x: auto;
        padding-bottom: 10px;
    }
}

@media (max-width: 480px) {
    .timeline-navigation {
        display: none;
    }

    .hero-section {
        height: 80vh;
    }

    .main-slider {
        height: 70vh;
    }
}
</style>