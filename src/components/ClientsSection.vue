<template>
    <section class="clients-section">
        <div class="container">
            <!-- Header Section -->
            <div class="section-header">
                <div class="header-left intro-text">
                    <h2 class="section-title">
                        <span class="title-line-1">Trusted by Growing Brands</span>
                    </h2>
                    <p class="section-subtitle">Partners in Spreading Fame</p>
                </div>
                <div class="header-right">
                    <p class="section-description">
                        Join 20+ brands who have partnered with Fame Spread Media to build their presence, performance, and perception in the digital age.
                    </p>
                </div>
            </div>

            <!-- Clients Marquee -->
            <div class="marquee-container">
                <div class="marquee-track">
                    <!-- First set of clients -->
                    <div v-for="(client, index) in clients" :key="`client-1-${index}`" class="client-item">
                        <div class="client-logo-wrapper">
                            <img :src="client.logo" :alt="client.name" class="client-logo" />
                        </div>
                    </div>
                    <!-- Duplicate set for seamless loop -->
                    <div v-for="(client, index) in clients" :key="`client-2-${index}`" class="client-item">
                        <div class="client-logo-wrapper">
                            <img :src="client.logo" :alt="client.name" class="client-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Client logos data - Using actual client logos from R2 CDN
const clients = ref([
    {
        name: 'Kiran Nayar Herbals',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Kiran%20Nayar%20Herbals.jpg',
        category: 'Healthcare'
    },
    {
        name: 'Seva',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Seva%20Logo.JPG',
        category: 'Service'
    },
    {
        name: 'Shaambhavi',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Shaambhavi.jpg',
        category: 'Wellness'
    },
    {
        name: 'Sakshi Nayyar',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Sakshi%20Nayyar/SN%201%20.PNG',
        category: 'Fashion'
    },
    // {
    //     name: 'Peach & Musk',
    //     logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Peach%20%26%20Musk/Peach%20%26%20Musk%20Logo.jpg',
    //     category: 'Beauty'
    // },
    {
        name: 'Sand Sky Estates',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Sand%20Sky%20Estates/IMG_2283.PNG',
        category: 'Real Estate'
    },
    {
        name: 'TLC',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/TLC/TheLearningCurve-Logo.png',
        category: 'Service'
    },
    {
        name: 'Toteorga',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Logo%20Files/Toteorga/Toteorga.png',
        category: 'Fashion'
    },
    // {
    //     name: 'Sakshi Nayyar',
    //     logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/SAKSHI%20NAYYAR-min%20(1).jpg',
    //     category: 'Fashion'
    // },
    {
        name: 'Bio Ayurveda',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/bio_ayurveda_client_logo.PNG',
        category: 'Healthcare'
    },
    {
        name: 'Chauhan Jewellers',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/chauhan_jewellers_client_logo.PNG',
        category: 'Jewelry'
    },
    {
        name: 'Heer by Mona',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/heer_by_mona_client_logo.png',
        category: 'Fashion'
    },
    {
        name: 'House of Solesaga',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/house_of_solesaga_client_logo.PNG',
        category: 'Fashion'
    },
    {
        name: 'Jyotsana Mehta',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/jyotsana_mehta_client_logo.PNG',
        category: 'Personal Brand'
    },
    {
        name: 'True India',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/true_india_client_logo.PNG',
        category: 'E-commerce'
    },
    {
        name: 'Urban Farmer',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/urban_farmer_client_logo.PNG',
        category: 'Agriculture'
    }
]);
</script>

<style scoped>
/* Root variables */
:root {
    --primary-orange: #C17A60;
    --text-dark: #2D2D2D;
    --text-gray: #6b6b6b;
    --bg-white: #FFFFFF;
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Section Styles */
.clients-section {
    position: relative;
    overflow: hidden;
    /* Prevent horizontal scroll */
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intro-text {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-light);
    color: var(--color-text-white);
    /* margin-bottom: var(--space-4); */
    position: relative;
    display: block;
    /* padding-top: 10px; */
    cursor: pointer;
    transition: color 0.3s ease;
}

.intro-text::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--color-primary);
    transition: width 0.3s ease;
}


.intro-text:hover::before {
    width: 120px;
}

/* Section Header */
.section-header {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: start;
    margin-bottom: 100px;
}

.header-left {
    position: relative;
}

.section-title {
    font-size: 72px;
    font-weight: 700;
    color: var(--text-dark);
    margin: 0 0 20px 0;
    letter-spacing: -2px;
    line-height: 1;
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
    background-color: var(--primary-orange);
    transition: width 0.3s ease;
}

.section-title:hover .title-line-1::before {
    width: 100px;
}

.section-subtitle {
    font-size: 24px;
    font-weight: 400;
    color: var(--text-dark);
    margin: 0;
    opacity: 0.8;
}

.header-right {
    display: flex;
    align-items: center;
    padding-top: 30px;
}

.section-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: var(--text-gray);
    margin: 0;
    text-align: justify;
}

/* Marquee Container */
.marquee-container {
    width: 100%;
    /* Full viewport width */
    /* margin-left: calc(-50vw + 50%); */
    /* Center and expand to full width */
    overflow: hidden;
    position: relative;
    padding: 40px 0;
    /* Generous top and bottom spacing */
    background-color: #e8dfd3;
    /* Slightly darker warm beige background */
    margin-top: 60px;
}

/* Fade effect on left edge */
.marquee-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(to right, #e8dfd3 0%, rgba(232, 223, 211, 0) 100%);
    z-index: 10;
    pointer-events: none;
}

/* Fade effect on right edge */
.marquee-container::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(to left, #e8dfd3 0%, rgba(232, 223, 211, 0) 100%);
    z-index: 10;
    pointer-events: none;
}

/* Marquee Track - Infinite scrolling animation */
.marquee-track {
    display: flex;
    gap: 40px;
    animation: marquee 60s linear infinite;
    /* Slow, smooth animation */
    width: max-content;
    will-change: transform;
    /* Performance optimization */
}

/* Pause animation on hover for better UX */
.marquee-track:hover {
    animation-play-state: paused;
}

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-50%, 0, 0);
        /* Move by 50% since we duplicated the items */
        /* Using translate3d for hardware acceleration */
    }
}

/* Client Item */
.client-item {
    flex-shrink: 0;
    /* Prevent items from shrinking */
    opacity: 1;
    transition: var(--transition);
}

.client-logo-wrapper {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    /* background: var(--color-white); */
    /* border-radius: 50%; */
    overflow: hidden;
    /* box-shadow: 0 4px 20px rgba(193, 122, 96, 0.15); */
    /* Soft shadow with primary color */
}

.client-logo-wrapper::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    /* background: radial-gradient(circle, rgba(193, 122, 96, 0.15) 0%, transparent 70%); */
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
    border-radius: 50%;
    z-index: 1;
}

.client-logo-wrapper:hover::before {
    width: 100%;
    height: 100%;
}

.client-logo {
    max-width: 85%;
    max-height: 85%;
    width: auto;
    height: auto;
    filter: grayscale(100%) opacity(0.6);
    transition: var(--transition);
    object-fit: contain;
    position: relative;
    z-index: 2;
}

.client-logo-wrapper:hover .client-logo {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1);
}

/* Hover Effects */
.client-item:hover {
    transform: translateY(-5px);
}

/* Responsive Design */
@media (max-width: 1200px) {
    .section-header {
        gap: 60px;
    }

    .marquee-track {
        gap: 60px;
    }

    .marquee-container {
        padding: 70px 0;
        margin-top: 50px;
    }
}

@media (max-width: 992px) {
    .section-header {
        grid-template-columns: 1fr;
        gap: 40px;
        margin-bottom: 70px;
    }

    .section-title {
        font-size: 56px;
    }

    .section-subtitle {
        font-size: 20px;
    }

    .header-right {
        padding-top: 0;
    }

    .marquee-track {
        gap: 50px;
    }

    .marquee-container {
        padding: 60px 0;
        margin-top: 40px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 30px;
    }

    .section-header {
        margin-bottom: 50px;
    }

    .section-title {
        font-size: 42px;
    }

    .title-line-1::before {
        width: 50px;
        height: 3px;
    }

    .section-subtitle {
        font-size: 18px;
    }

    .section-description {
        font-size: 14px;
        text-align: left;
    }

    .marquee-track {
        gap: 40px;
        padding-left: 30px;
        /* Add starting padding for better mobile experience */
    }

    .marquee-container {
        padding: 50px 0;
        margin-top: 30px;
    }

    /* Adjust fade width for tablets */
    .marquee-container::before,
    .marquee-container::after {
        width: 100px;
    }

    .client-logo-wrapper {
        width: 120px;
        height: 120px;
    }

    .client-logo {
        max-width: 80%;
        max-height: 80%;
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

    .section-subtitle {
        font-size: 16px;
    }

    .section-description {
        font-size: 13px;
        line-height: 1.7;
    }

    .marquee-track {
        gap: 30px;
        padding-left: 20px;
        /* Add starting padding for small mobile */
        animation: marquee 40s linear infinite;
        /* Faster on mobile for better experience */
    }

    .marquee-container {
        padding: 40px 0;
        margin-top: 25px;
    }

    /* Adjust fade width for mobile */
    .marquee-container::before,
    .marquee-container::after {
        width: 60px;
    }

    .client-logo-wrapper {
        width: 100px;
        height: 100px;
    }

    .client-logo {
        max-width: 80%;
        max-height: 80%;
    }

    /* Disable hover effects on mobile */
    .client-logo-wrapper:hover .client-logo {
        transform: none;
    }

    .client-item:hover {
        transform: none;
    }

    /* Don't pause animation on mobile */
    .marquee-track:hover {
        animation-play-state: running;
    }
}

/* Extra small devices */
@media (max-width: 360px) {
    .marquee-track {
        gap: 25px;
        padding-left: 15px;
    }

    .client-logo-wrapper {
        width: 90px;
        height: 90px;
    }

    .marquee-container {
        padding: 35px 0;
    }

    /* Smaller fade width for extra small devices */
    .marquee-container::before,
    .marquee-container::after {
        width: 40px;
    }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .marquee-container {
        -webkit-overflow-scrolling: touch;
        /* Smooth scrolling on iOS */
    }

    .marquee-track {
        -webkit-transform: translate3d(0, 0, 0);
        /* Force hardware acceleration on mobile */
        transform: translate3d(0, 0, 0);
    }

    .client-logo-wrapper {
        -webkit-tap-highlight-color: transparent;
        /* Remove tap highlight on touch devices */
    }
}
</style>