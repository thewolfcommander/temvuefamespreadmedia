<template>
    <section class="services-section">
        <div class="container">
            <!-- Header Section -->
            <div class="services-header">
                <div class="heading-wrapper">
                    <h2 class="main-heading intro-text">
                        <span class="heading-line-1">OUR</span>
                        <span class="heading-line-2">SERVICES</span>
                    </h2>
                    <p class="sub-heading">
                        everything you need for a brand under one roof
                    </p>
                </div>
            </div>

            <!-- Services List -->
            <div class="services-list">
                <div v-for="(service, index) in services" :key="service.title" class="service-card"
                    :class="{ 'reverse': index % 2 !== 0 }">

                    <!-- Image Section -->
                    <div class="service-image">
                        <video v-if="service.video" width="100%" height="100%" :poster="service.video.poster" autoplay
                            loop muted playsinline>
                            <source :src="service.video.src" type="video/mp4" />
                        </video>
                        <img v-else :src="service.image" :alt="service.title" />
                    </div>

                    <!-- Content Section -->
                    <div class="service-content">
                        <h3 class="service-title">{{ service.title }}</h3>
                        <p class="service-description">
                            {{ service.description }}
                        </p>
                        <a :href="service.link" class="learn-more-btn">
                            <span class="btn-text">Get a Quote</span>
                            <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        title: 'Social Media Management',
        description: "We boost client online presence with ethical, efficient campaigns across multiple channels. Our strategies are morally sound, effective, and secure, designed to maximize engagement and growth.",
        link: '#', // url where you want to sent user
        video: {
            poster: '#', // image link in place of #
            src: 'https://videos.pexels.com/video-files/6562012/6562012-uhd_2560_1440_25fps.mp4'
        }
    },
    {
        title: 'Photography and Videography',
        description: "We offer top-tier Photography and Videography services to bring your vision to life. From captivating images to dynamic videos, trust us to showcase your story with creativity and excellence.",
        link: '#',
        video: {
            poster: '#',
            src: 'https://videos.pexels.com/video-files/2084217/2084217-hd_1920_1080_24fps.mp4'
        }
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: "We help select optimal keywords to boost your website's visibility. Ensure search engines connect users to your services effortlessly, enhancing your online presence and driving relevant traffic.",
        link: '#',
        video: {
            poster: '#',
            src: 'https://videos.pexels.com/video-files/4549682/4549682-hd_1920_1080_30fps.mp4'
        }
    }, {
        title: 'Website Development',
        description: "Our expert team in Website Development creates stunning, user-friendly websites that drive results. We focus on responsive design, seamless navigation, and optimized performance to ensure your online presence stands out.",
        link: '#',
        video: {
            poster: '#',
            src: 'https://videos.pexels.com/video-files/5076634/5076634-uhd_2732_1440_25fps.mp4'
        }
    },
    {
        title: 'AD Manager',
        description: "Our expert team in Ad Management specializes in creating and optimizing campaigns across platforms like Google, Facebook, Instagram, and beyond. We design data-driven, targeted ads that maximize reach, boost conversions, and deliver measurable ROI. With a focus on audience insights, budget efficiency, and continuous optimization, we ensure your brand captures attention and achieves impactful results.",
        link: '#',
        video: {
            poster: '#',
            src: 'https://videos.pexels.com/video-files/7596776/7596776-uhd_2732_1440_25fps.mp4'
        }
    },
    {
        title: 'Social Media Optimization',
        description: "Our expert team in Digital Marketing delivers customized solutions for eCommerce, Finance, Healthcare, Education, and more. We craft industry-specific strategies designed to boost visibility, drive engagement, and maximize growth. From targeted campaigns to data-driven optimization, we ensure your brand builds a strong online presence and connects with the right audience for lasting impact.",
        link: '#',
        video: {
            poster: '#',
            src: 'https://videos.pexels.com/video-files/5076634/5076634-uhd_2732_1440_25fps.mp4'
        }
    }
]);
</script>

<style scoped>
/* Root variables for consistent theming */
:root {
    --primary-blue: #00A3FF;
    --text-light: #FFFFFF;
    --text-gray: #A0A0A0;
    --bg-black: #000000;
    --transition: all 0.3s ease;
}

/* Section Styles */
.services-section {
    background-color: var(--bg-black);
    padding-bottom: 80px;
    min-height: 100vh;
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
    margin-bottom: var(--space-4);
    position: relative;
    display: block;
    cursor: pointer;
    transition: color 0.3s ease;
}

.intro-text::before {
    content: '';
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

/* Header Section */
.services-header {
    margin-bottom: 100px;
    text-align: center;
}

.heading-wrapper {
    position: relative;
    display: inline-block;
    margin: 0 auto;
}

.main-heading {
    font-size: 72px;
    font-weight: 700;
    line-height: 1;
    color: var(--text-light);
    margin: 0;
    letter-spacing: -2px;
}

.heading-line-1 {
    display: block;
    position: relative;
    padding-top: 20px;
}

.heading-line-1::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--primary-blue);
}

.heading-line-2 {
    display: block;
    margin-top: 10px;
}

.sub-heading {
    font-size: 20px;
    font-weight: 400;
    color: var(--text-light);
    margin-top: 30px;
    margin-bottom: 0;
    max-width: 600px;
    line-height: 1.4;
}

/* Services List */
.services-list {
    display: flex;
    flex-direction: column;
    gap: 120px;
}

/* Service Card */
.service-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.service-card.reverse {
    direction: rtl;
}

.service-card.reverse>* {
    direction: ltr;
}

/* Service Image */
.service-image {
    width: 100%;
    height: 380px;
    border-radius: 40px;
    overflow: hidden;
    background: #1a1a1a;
}

.service-image video,
.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Service Content */
.service-content {
    padding: 20px 0;
}

.service-title {
    font-size: 56px;
    font-weight: 700;
    color: var(--text-light);
    margin: 0 0 30px 0;
    letter-spacing: -1px;
}

.service-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: var(--text-gray);
    margin-bottom: 40px;
    text-align: justify;
}

/* Learn More Button */
.learn-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    padding: 15px 30px;
    background-color: transparent;
    border: 2px solid var(--primary-blue);
    border-radius: 50px;
    color: var(--primary);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.learn-more-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--primary-blue);
    transition: left 0.3s ease;
    z-index: 0;
}

.learn-more-btn:hover::before {
    left: 0;
}

.btn-text {
    position: relative;
    z-index: 1;
}

.arrow-icon {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

.learn-more-btn:hover .arrow-icon {
    transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 1200px) {
    .container {
        padding: 0 30px;
    }

    .service-card {
        gap: 60px;
    }
}

@media (max-width: 992px) {
    .main-heading {
        font-size: 56px;
    }

    .service-title {
        font-size: 42px;
    }

    .service-card {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .service-card.reverse {
        direction: ltr;
    }

    .service-image {
        height: 350px;
    }
}

@media (max-width: 768px) {
    .services-section {
        padding-bottom: 80px;
    }

    .container {
        padding: 0 20px;
    }

    .services-header {
        margin-bottom: 60px;
    }

    .main-heading {
        font-size: 42px;
    }

    .sub-heading {
        font-size: 18px;
    }

    .services-list {
        gap: 80px;
    }

    .service-title {
        font-size: 32px;
        margin-bottom: 20px;
    }

    .service-description {
        font-size: 14px;
        margin-bottom: 30px;
        text-align: left;
    }

    .service-image {
        height: 250px;
        border-radius: 20px;
    }

    .learn-more-btn {
        padding: 12px 24px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .main-heading {
        font-size: 32px;
    }

    .heading-line-1::before {
        width: 40px;
        height: 3px;
    }

    .sub-heading {
        font-size: 16px;
        margin-top: 20px;
    }

    .service-title {
        font-size: 28px;
    }

    .service-description {
        font-size: 13px;
    }

    .service-image {
        height: 200px;
    }
}
</style>