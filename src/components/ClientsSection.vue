<template>
    <section class="clients-section">
        <div class="container">
            <!-- Header Section -->
            <div class="section-header">
                <div class="header-left">
                    <h2 class="section-title">
                        <span class="title-line-1">Our Clients</span>
                    </h2>
                    <p class="section-subtitle">our precious treasure box</p>
                </div>
                <div class="header-right">
                    <p class="section-description">
                        Welcome to our precious box - every customer is precious to us - it's only their trust and
                        cooperation make us who we are now. You can see a massive list, from top-listed ones to
                        new birds. We created every brand uniquely and gave them a unique identity in the market.
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

// Client logos data - Using actual brand logos
const clients = ref([
    {
        name: 'ITC Limited',
        logo: 'https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/86/5d/7a/865d7a64-b91e-1a9a-b854-dbb37bfdbd3e/source/512x512bb.jpg'
    },
    {
        name: 'Patanjali',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yY3ov5BS-Qa5cvJsJgMblO_9FyeARqRRICuMsFEDdig4hVHDJhIsQxEXiBqBASzByNQ&usqp=CAU'
    },
    {
        name: 'Sunfeast',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81_IYPRf9uMc_wnI7p8uGIQospl0aU9zClg&s'
    },
    {
        name: 'Britannia',
        logo: 'https://interbrand.com/wp-content/uploads/2023/05/Britannia_images_Hero_600x400.jpg'
    },
    {
        name: 'Dabur',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2u00ob9NVXTD9GcJqg-6WKHX6vbFS79y1Sg&s'
    },
    {
        name: 'Parle',
        logo: 'https://www.adgully.com/img/400x300/202205/untitled-design-2022-05-09t174734-809.png.jpg'
    },
    {
        name: 'Haldiram',
        logo: 'https://media.licdn.com/dms/image/v2/D5622AQGRFYWHtCBn-w/feedshare-shrink_800/feedshare-shrink_800/0/1681724738108?e=2147483647&v=beta&t=lG05VH-kPuCacaP8xLYviL4UkkaDh60QQp_2-UkI9oU'
    },
    {
        name: 'Amul',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7i_2Qs2TrlgEgpLP3E53xEdCq3JNK1SG6Xg&s'
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
    padding: 120px 0;
    position: relative;
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
    height: 80px;
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
    max-width: 160px;
    max-height: 90px;
    width: auto;
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
    .clients-section {
        padding: 80px 0;
    }

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

    .clients-section {
        padding: 60px 0;
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