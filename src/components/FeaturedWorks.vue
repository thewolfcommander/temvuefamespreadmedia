<template>
    <section class="featured-works-section">
        <div class="container">
            <!-- Header -->
            <div class="section-header">
                <h2 class="section-title intro-text ">Featured works</h2>

            </div>


            <!-- Compact Gallery Section -->
            <div class="gallery-section">
                <CompactGallery />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import CompactGallery from './CompactGallery.vue';

const hoveredCard = ref(null);

const handleMouseEnter = (index) => {
    hoveredCard.value = index;
};

const handleMouseLeave = () => {
    hoveredCard.value = null;
};
</script>

<style scoped>
/* Root variables */
:root {
    --primary-blue: #00A3FF;
    --text-light: #FFFFFF;
    --text-gray: #A0A0A0;
    --bg-black: #000000;
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Section Styles */
.featured-works-section {
    background-color: var(--bg-black);
    padding: 120px 0;
    position: relative;
    overflow: hidden;
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
    padding-top: 10px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
}

.section-title {
    font-size: 72px;
    font-weight: 700;
    color: var(--text-light);
    margin: 0;
    letter-spacing: -2px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: var(--primary-blue);
    transition: width 0.3s ease;
}

/* View Projects Button */
.view-projects-btn {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    padding: 18px 35px;
    background-color: var(--primary-blue);
    border-radius: 50px;
    color: var(--text-light);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.view-projects-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
}

.view-projects-btn:hover::before {
    width: 300px;
    height: 300px;
}

.view-projects-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 136, 0, 0.3);
}

.view-projects-btn:hover .arrow-icon {
    transform: translateX(5px);
}

.btn-text {
    position: relative;
    z-index: 1;
    color: var(--primary);
}

.arrow-icon {
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 40px;
}

/* Project Card */
.project-card {
    position: relative;
    background-color: #0a0a0a;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image-wrapper {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
    transform: scale(1.1);
}

/* Project Overlay */
.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.8) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-metrics {
    background: rgba(var(--primary-blue-rgb), 0.9);
    color: var(--text-light);
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

/* Project Info */
.project-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px 35px;
    background: linear-gradient(180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.95) 100%);
    transform: translateY(20px);
    transition: transform 0.4s ease;
}

.project-card:hover .project-info {
    transform: translateY(0);
}

.project-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--text-light);
    margin: 0 0 10px 0;
    letter-spacing: -0.5px;
    transition: color 0.3s ease;
}

.project-card:hover .project-title {
    color: var(--primary-blue);
}

.project-category {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-gray);
    margin: 0 0 10px 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease 0.1s;
}

.project-description {
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    line-height: 1.4;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease 0.2s;
}

.project-card:hover .project-category {
    opacity: 1;
    transform: translateY(0);
}

.project-card:hover .project-description {
    opacity: 1;
    transform: translateY(0);
}

/* Gallery Section */
.gallery-section {
    margin-top: 120px;
    padding-top: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
}

.gallery-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-blue), transparent);
}

.gallery-header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
}

.gallery-title {
    font-size: 48px;
    font-weight: 700;
    color: var(--text-light);
    margin: 0 0 16px 0;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
}

.gallery-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--primary-blue);
    border-radius: 2px;
}

.gallery-subtitle {
    font-size: 18px;
    color: var(--text-gray);
    margin: 0;
    font-weight: 400;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .section-title {
        font-size: 60px;
    }

    .project-image-wrapper {
        height: 400px;
    }

    .gallery-title {
        font-size: 40px;
    }
}

@media (max-width: 992px) {
    .featured-works-section {
        padding: 80px 0;
    }

    .section-header {
        margin-bottom: 60px;
    }

    .section-title {
        font-size: 48px;
    }

    .projects-grid {
        gap: 30px;
    }

    .project-image-wrapper {
        height: 350px;
    }

    .project-title {
        font-size: 28px;
    }

    .gallery-section {
        margin-top: 80px;
        padding-top: 60px;
    }

    .gallery-title {
        font-size: 36px;
    }

    .gallery-subtitle {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 30px;
    }

    .featured-works-section {
        padding: 60px 0;
    }

    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        margin-bottom: 40px;
    }

    .section-title {
        font-size: 36px;
    }

    .section-title::after {
        width: 60px;
        height: 3px;
        bottom: -15px;
    }

    .view-projects-btn {
        padding: 14px 28px;
        font-size: 14px;
    }

    .arrow-icon {
        width: 32px;
        height: 32px;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .project-image-wrapper {
        height: 280px;
    }

    .project-info {
        padding: 30px 25px;
    }

    .project-title {
        font-size: 24px;
    }

    .project-category {
        font-size: 12px;
    }

    .gallery-section {
        margin-top: 60px;
        padding-top: 40px;
    }

    .gallery-header {
        margin-bottom: 40px;
    }

    .gallery-title {
        font-size: 28px;
    }

    .gallery-subtitle {
        font-size: 15px;
        padding: 0 20px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 20px;
    }

    .section-title {
        font-size: 28px;
    }

    .view-projects-btn {
        padding: 12px 24px;
        gap: 10px;
    }

    .project-image-wrapper {
        height: 220px;
        border-radius: 15px;
    }

    .project-info {
        padding: 25px 20px;
    }

    .project-title {
        font-size: 20px;
    }

    /* Disable hover effects on mobile */
    .project-card:hover {
        transform: none;
    }

    .project-card:hover .project-image {
        transform: none;
    }

    .project-category {
        opacity: 1;
        transform: translateY(0);
    }

    .gallery-section {
        margin-top: 40px;
        padding-top: 30px;
    }

    .gallery-title {
        font-size: 24px;
    }

    .gallery-subtitle {
        font-size: 14px;
    }
}
</style>