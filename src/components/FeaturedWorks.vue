<template>
    <section class="featured-works-section">
        <div class="container">
            <!-- Header -->
            <div class="section-header">
                <h2 class="section-title intro-text ">Featured works</h2>
                <a href="#" class="view-projects-btn">
                    <span class="btn-text">View Projects</span>
                    <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="1.5" />
                        <path d="M11 8L15 12L11 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
            </div>

            <!-- Projects Grid -->
            <div class="projects-grid">
                <!-- Project Card 1 - Patanjali -->
                <div class="project-card" @mouseenter="handleMouseEnter(0)" @mouseleave="handleMouseLeave(0)">
                    <div class="project-image-wrapper">
                        <img src="https://4.imimg.com/data4/TO/CY/MY-22977716/all-patanjali-products-get-5-less.jpg"
                            alt="Patanjali Shishu Care" class="project-image" />
                        <div class="project-overlay"></div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">PATANJALI</h3>
                        <p class="project-category">Personalization, Research, Packaging Design</p>
                    </div>
                </div>

                <!-- Project Card 2 - Shuddh Harvest -->
                <div class="project-card" @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave(1)">
                    <div class="project-image-wrapper">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRkrQPoxqpDTWdfUBRcfeU4HvqWJSyTOT8g&s"
                            alt="Shuddh Harvest" class="project-image" />
                        <div class="project-overlay"></div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">SHUDDH HARVEST</h3>
                        <p class="project-category">Our Role: Brand Logo Design, Packaging Design</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

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
    margin: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease 0.1s;
}

.project-card:hover .project-category {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1200px) {
    .section-title {
        font-size: 60px;
    }

    .project-image-wrapper {
        height: 400px;
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
}
</style>