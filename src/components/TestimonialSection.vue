<template>
    <section class="testimonial-section">
        <div class="container">
            <!-- Header Section -->
            <div class="section-header">
                <div class="header-left">
                    <h2 class="section-title">
                        <span class="title-line-1">What our Clients</span>
                        <span class="title-line-2">says</span>
                    </h2>
                </div>
                <div class="header-right">
                    <p class="section-description">
                        Welcome to our precious box - every customer is precious to us - it's only their trust and
                        cooperation that make us who we are now. You can see a huge list from top-listed ones to
                        new birds. We created every brand uniquely and gave them a new identity in the market.
                    </p>
                </div>
            </div>

            <!-- Google Rating Summary -->
            <div class="rating-summary">
                <div class="rating-box">
                    <h3 class="rating-title">Excellent</h3>
                    <div class="stars">
                        <svg v-for="n in 5" :key="n" class="star" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <p class="rating-text">Based on {{ totalReviews }} reviews</p>
                    <svg class="google-logo" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.4 22.1c0-.7-.1-1.4-.2-2.1H8v4h4.1c-.2 1-.7 1.8-1.5 2.4v2h2.4c1.4-1.3 2.2-3.2 2.2-5.3z"
                            fill="#4285F4" />
                        <path
                            d="M8 24c2 0 3.7-.7 4.9-1.8l-2.4-2c-.7.5-1.5.7-2.5.7-1.9 0-3.5-1.3-4.1-3H1.4v2.1C2.6 22.4 5.1 24 8 24z"
                            fill="#34A853" />
                        <path
                            d="M3.9 14.9c-.3-.8-.3-1.7 0-2.5v-2.1H1.4C.5 12.1 0 14 0 16s.5 3.9 1.4 5.6l2.5-2.1c-.3-.5-.4-1-.4-1.6z"
                            fill="#FBBC04" />
                        <path
                            d="M8 6.5c1.1 0 2 .4 2.8 1.1l2.1-2.1C11.7 4.3 10 3.5 8 3.5c-2.9 0-5.4 1.6-6.6 4l2.5 2.1c.6-1.7 2.2-3 4.1-3z"
                            fill="#EA4335" />
                        <text x="25" y="20" font-family="Arial, sans-serif" font-size="18" fill="#5F6368">Google</text>
                    </svg>
                </div>
            </div>

            <!-- Testimonials Carousel -->
            <div class="testimonials-wrapper">
                <div class="testimonials-carousel" ref="carousel">
                    <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card"
                        :style="{ transform: `translateX(${(index - currentSlide) * 105}%)` }">
                        <div class="card-header">
                            <div class="user-info">
                                <div class="user-avatar">
                                    {{ testimonial.name.charAt(0).toUpperCase() }}
                                </div>
                                <div class="user-details">
                                    <h4 class="user-name">{{ testimonial.name }}</h4>
                                    <p class="review-date">{{ testimonial.date }}</p>
                                </div>
                            </div>
                            <svg class="google-icon" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4" />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853" />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC04" />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335" />
                            </svg>
                        </div>
                        <div class="stars-row">
                            <svg v-for="n in 5" :key="n" class="star-small" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <p class="review-text">{{ testimonial.review }}</p>
                        <button v-if="testimonial.hasMore" class="read-more">Read more</button>
                    </div>
                </div>

                <!-- Navigation Arrows -->
                <button class="nav-arrow prev" @click="prevSlide" :disabled="currentSlide === 0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button class="nav-arrow next" @click="nextSlide" :disabled="currentSlide >= testimonials.length - 4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);
const totalReviews = ref(20);

const testimonials = ref([
    {
        name: 'More P',
        date: '2024-01-04',
        review: 'Great service! Had a great experience!',
        hasMore: false
    },
    {
        name: 'Isha bhate',
        date: '2023-12-19',
        review: 'Had a good experience working with the FameSpreadMedia team. They are a dedicated and hardworking bunch.',
        hasMore: false
    },
    {
        name: 'Volted Products',
        date: '2023-09-27',
        review: 'good helpful team',
        hasMore: false
    },
    {
        name: 'Vipin P',
        date: '2023-08-09',
        review: 'FameSpreadMedia create our branding for many products,great experience with them,timely delivery,they have professional...',
        hasMore: true
    },
    {
        name: 'Rajesh Kumar',
        date: '2023-07-15',
        review: 'Excellent branding and packaging design. The team understood our vision perfectly and delivered beyond expectations.',
        hasMore: false
    },
    {
        name: 'Priya Sharma',
        date: '2023-06-22',
        review: 'Professional team with creative ideas. They transformed our brand identity completely.',
        hasMore: false
    }
]);

const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--;
    }
};

const nextSlide = () => {
    if (currentSlide.value < testimonials.value.length - 4) {
        currentSlide.value++;
    }
};
</script>

<style scoped>
/* Section Styles */
.testimonial-section {
    background-color: var(--color-black);
    padding: 120px 0;
    position: relative;
    overflow: hidden;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
}

/* Section Header */
.section-header {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: start;
    margin-bottom: 80px;
}

.section-title {
    font-size: 72px;
    font-weight: 700;
    color: var(--color-white);
    margin: 0;
    letter-spacing: -2px;
    line-height: 1.1;
}

.title-line-1 {
    display: block;
    position: relative;
    padding-top: 25px;
}

.title-line-1::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

.section-title:hover .title-line-1::before {
    width: 100px;
}

.title-line-2 {
    display: block;
}

.header-right {
    padding-top: 30px;
}

.section-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: var(--color-text-muted);
    margin: 0;
    text-align: justify;
}

/* Rating Summary */
.rating-summary {
    margin-bottom: 60px;
}

.rating-box {
    display: inline-flex;
    align-items: center;
    gap: 20px;
}

.rating-title {
    font-size: 28px;
    font-weight: 600;
    color: var(--color-white);
    margin: 0;
}

.stars {
    display: flex;
    gap: 4px;
}

.star {
    width: 24px;
    height: 24px;
    color: #FFC107;
}

.star-small {
    width: 16px;
    height: 16px;
    color: #FFC107;
}

.rating-text {
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0;
}

.google-logo {
    width: 100px;
    height: 40px;
}

/* Testimonials Carousel */
.testimonials-wrapper {
    position: relative;
    overflow: hidden;
    padding: 0 60px;
}

.testimonials-carousel {
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease;
    position: relative;
    min-height: 280px;
}

.testimonial-card {
    flex: 0 0 calc(25% - 15px);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    position: absolute;
    width: calc(25% - 15px);
    transition: all 0.5s ease;
}

.testimonial-card:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px) translateX(calc((var(--index, 0) - var(--current, 0)) * 105%));
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
}

.user-info {
    display: flex;
    gap: 12px;
    align-items: center;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: var(--color-white);
    font-size: 18px;
}

.user-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.user-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-white);
    margin: 0;
}

.review-date {
    font-size: 12px;
    color: var(--color-text-muted);
    margin: 0;
}

.google-icon {
    width: 24px;
    height: 24px;
}

.stars-row {
    display: flex;
    gap: 2px;
    margin-bottom: 16px;
}

.review-text {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 12px 0;
    min-height: 60px;
}

.read-more {
    background: none;
    border: none;
    color: var(--color-primary);
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    transition: color 0.3s ease;
}

.read-more:hover {
    color: var(--color-primary-light);
}

/* Navigation Arrows */
.nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    color: var(--color-white);
}

.nav-arrow:hover:not(:disabled) {
    background: var(--color-primary);
    border-color: var(--color-primary);
}

.nav-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.nav-arrow.prev {
    left: 0;
}

.nav-arrow.next {
    right: 0;
}

.nav-arrow svg {
    width: 24px;
    height: 24px;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .testimonial-card {
        flex: 0 0 calc(33.333% - 15px);
        width: calc(33.333% - 15px);
    }
}

@media (max-width: 992px) {
    .testimonial-section {
        padding: 80px 0;
    }

    .section-header {
        grid-template-columns: 1fr;
        gap: 40px;
        margin-bottom: 60px;
    }

    .section-title {
        font-size: 56px;
    }

    .header-right {
        padding-top: 0;
    }

    .testimonial-card {
        flex: 0 0 calc(50% - 10px);
        width: calc(50% - 10px);
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 30px;
    }

    .testimonial-section {
        padding: 60px 0;
    }

    .section-title {
        font-size: 42px;
    }

    .title-line-1::before {
        width: 50px;
        height: 3px;
    }

    .testimonials-wrapper {
        padding: 0 40px;
    }

    .testimonial-card {
        flex: 0 0 100%;
        width: 100%;
    }

    .rating-box {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 20px;
    }

    .section-title {
        font-size: 32px;
    }

    .title-line-1::before {
        width: 40px;
    }

    .section-description {
        font-size: 14px;
    }

    .testimonials-wrapper {
        padding: 0;
    }

    .nav-arrow {
        width: 40px;
        height: 40px;
    }
}
</style>