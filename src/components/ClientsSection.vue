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

            <!-- Clients Grid -->
            <div class="clients-grid">
                <div v-for="(client, index) in clients" :key="client.name" class="client-item"
                    :style="{ animationDelay: `${index * 50}ms` }">
                    <div class="client-logo-wrapper">
                        <img :src="client.logo" :alt="client.name" class="client-logo" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Client logos data - Using actual client logos
const clients = ref([
    {
        name: 'Sakshi Nayyar',
        logo: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/SAKSHI%20NAYYAR-min%20(1).jpg',
        category: 'Fashion'
    },
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
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
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

/* Clients Grid */
.clients-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 80px 60px;
    align-items: center;
    justify-items: center;
    max-width: 1000px;
    margin: 0 auto;
}

/* Client Item */
.client-item {
    width: 100%;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.client-logo-wrapper {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
}

.client-logo-wrapper::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(193, 122, 96, 0.15) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
    border-radius: 50%;
}

.client-logo-wrapper:hover::before {
    width: 150px;
    height: 150px;
}

.client-logo {
    /* max-width: 160px; */
    /* max-height: 160px; */
    width: 120px;
    height: auto;
    filter: grayscale(100%) opacity(0.6);
    transition: var(--transition);
    object-fit: contain;
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

    .clients-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 60px 40px;
    }
}

@media (max-width: 992px) {
    .clients-section {}

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

    .clients-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 50px 35px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 30px;
    }

    .clients-section {}

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

    .clients-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 30px;
    }

    .client-logo-wrapper {
        height: 60px;
        margin-bottom: 1.3rem;
    }

    .client-logo {
        max-width: 120px;
        max-height: 50px;
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

    .clients-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px 20px;
    }

    .client-logo {
        max-width: 140px;
        max-height: 84px;
    }

    /* Disable hover effects on mobile */
    .client-logo-wrapper:hover .client-logo {
        transform: none;
    }

    .client-item:hover {
        transform: none;
    }
}
</style>