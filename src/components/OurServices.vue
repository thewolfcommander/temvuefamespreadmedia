<template>
    <section class="services-section bg-black pt-lg-0">
        <div class="container-fluid container-fluid-custom pt-lg-4">
            <div>
                <h2 class="h2 mb-0 text-light h2-line text-uppercase">Our</h2>
                <h2 class="h2 mb-0 text-light text-uppercase">Services</h2>
                <h3 class="text-light mb-0 col-md-9 col-lg-5">
                    everything you need for a brand under one roof
                </h3>
            </div>
        </div>
        <div class="container-fluid container-fluid-custom">
            <div v-for="service in services" :key="service.title" class="row pt-5 align-items">
                <div class="col-lg-6 px-lg-3">
                    <video class="big_scr" width="100%" height="auto" :poster="service.video.poster" autoplay loop muted
                        playsinline>
                        <source :src="service.video.src" type="video/mp4" />
                    </video>
                </div>
                <div class="col-lg-6 px-lg-3">
                    <div class="tags-wrapper">
                        <a v-for="tag in service.tags" :key="tag.name" :href="tag.link" class="btn1">{{ tag.name }}</a>
                    </div>
                    <div>
                        <a :href="service.link" class="h2 text-decoration-none text-light pt-4 d-block">{{ service.title
                        }}</a>
                        <p class="text-light pt-2 text-sm-justify mt-3">
                            {{ service.description }}
                        </p>
                        <div class="pt-2">
                            <a :href="service.link" class="btn2">
                                <img :src="rightArrowIcon" alt="right-arrow" style="width: 35px" />
                            </a>
                            <a :href="service.link" class="text-light text-decoration-none ps-4 cat-btn">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
// 1. Import the arrow icon from your assets folder
// import rightArrowIcon from '@/assets/right-arrow.png';

// 2. Create a data array for all your services.
// This makes your template clean and easy to update.
const services = ref([
    {
        title: 'Branding',
        description: "Developing a brand is not everyone's cup of tea. It is the result of experience gained in years and teamwork that derives the result. As a leading branding agency in India, we provide branding packages that fulfil the fundamental elements of creating a brand. Our branding strategies are unique and personalized according to the nature of your business, resulting in better results within a short period.",
        link: 'https://www.expandbuzz.com/branding/',
        video: {
            poster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Branding.png',
            src: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/branding.mp4'
        },
        tags: [
            { name: 'Brand Identity', link: 'https://www.expandbuzz.com/branding/brand-identity/' },
            { name: 'Brand Naming', link: 'https://www.expandbuzz.com/#' },
            { name: 'Brand Guidelines', link: 'https://www.expandbuzz.com/branding/brand-guidelines/' }
        ]
    },
    {
        title: 'Packaging',
        description: "Being the primary pillar, one of our core expertise lies in packaging design. Only an effective packaging design can increase your product sales; getting the correct pitch required for each product and building an aesthetic design that matches the nature of the product is all you need. And we are there to help you, with highly skilled designers and project managers, we can deliver the final design required for your product.",
        link: 'https://www.expandbuzz.com/packaging-design-agency/',
        video: {
            poster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Packaging.png',
            src: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/packaging-design.mp4'
        },
        tags: [
            { name: 'Label Design', link: 'https://www.expandbuzz.com/packaging-design-agency/label-designs/' },
            { name: 'Food Packaging', link: 'https://www.expandbuzz.com/#' },
            { name: 'Mockup', link: 'https://www.expandbuzz.com/packaging-design-agency/mockups/' }
        ]
    },
    {
        title: 'Digital Marketing',
        description: "Our expert team in Digital Marketing develops campaigns that can't be ignored. With immense ideas and solutions, our digital enthusiasts associate with brands worldwide to help increase brand awareness, reach, and sales through optimized digital ad campaigns. We strive to enclose and engage users with the brand by identifying the perfect conversation opportunities and the significance of remarketing campaigns.",
        link: 'https://www.expandbuzz.com/digital-marketing-agency/',
        video: {
            poster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Packaging.png',
            src: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/digital-marketing2.mp4'
        },
        tags: [
            { name: 'Social Media', link: 'https://www.expandbuzz.com/digital-marketing-agency/social-media' },
            { name: 'Paid Ads', link: 'https://www.expandbuzz.com/#' },
            { name: 'Seo', link: 'https://www.expandbuzz.com/#' }
        ]
    },
    // Add the other service objects here...
]);
</script>

<style scoped>
/* As requested, all CSS from both files is included here to make the component self-contained */

/* From bootstrap_cleaned.css */
.container-fluid {
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -1.5rem;
    margin-left: -1.5rem;
}

.col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
}

.px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
}

.pt-5 {
    padding-top: 3rem !important;
}

.align-items-center {
    align-items: center !important;
}

.mt-lg-5 {
    margin-top: 3rem !important;
}

.pt-lg-4 {
    padding-top: 1.5rem !important;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.text-light {
    color: #f8f9fa !important;
}

.text-uppercase {
    text-transform: uppercase !important;
}

.col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
}

.col-lg-5 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
}

.h2 {
    font-size: var(--heading-lg-h2);
    line-height: 70px;
}

.text-decoration-none {
    text-decoration: none !important;
}

.pt-4 {
    padding-top: 1.5rem !important;
}

.d-block {
    display: block !important;
}

.pt-2 {
    padding-top: 0.5rem !important;
}

.text-sm-justify {
    text-align: justify !important;
}

.mt-3 {
    margin-top: 1rem !important;
}

.ps-4 {
    padding-left: 1.5rem !important;
}

/* From cleaned.css */
.h2-line::before {
    position: absolute;
    top: -5px;
    width: 50px;
    background: var(--primary);
    transition: .6s linear;
    right: 50%;
    height: 5px;
    content: ""
}

.btn1 {
    cursor: pointer
}

section {
    padding: 3rem 0;
    margin-top: 0
}

.bg-black {
    background-color: var(--black)
}

.h2-line {
    position: relative;
    padding-top: 1rem
}

.h2-line:hover::before {
    width: 80px
}

.h2-line::before {
    left: 0
}

.container-fluid-custom {
    width: 1180px;
    margin: auto
}

.btn1 {
    background: 0 0;
    padding: 8px 16px;
    color: var(--white) !important;
    border-radius: 30px;
    border: 1px solid var(--white);
    transition: var(--transition);
    background: linear-gradient(to right, var(--primary) 50%, var(--black) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: .5s ease-out
}

.btn1.active,
.btn1:hover {
    border: 1px solid var(--primary);
    background-position: left bottom
}

.btn2::before {
    background: var(--primary)
}

.btn2 img {
    position: relative;
    z-index: 9999
}

.btn2::before {
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 50px;
    width: 50px;
    height: 50px
}

.cat-btn {
    z-index: 1;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to right, var(--primary), 50%, #fff 50%);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: white;
    padding-top: 2rem
}

.cat-btn:hover {
    background-position: 0
}

.services-section {
    padding-top: 0;
}

.services-section .h2-line {
    padding-bottom: 0.5rem;
    display: inline-block;
}

.services-section .big_scr {
    border-radius: 50px;
}

.services-section .tags-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.services-section .btn1 {
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
}

.services-section .btn1:hover {
    background-color: #ffffff;
    color: #000000;
}

.services-section .cat-btn {
    font-weight: 600;
    transition: letter-spacing 0.3s;
}

.services-section .cat-btn:hover {
    letter-spacing: 1px;
}

.services-section .text-sm-justify {
    text-align: justify;
}

.services-section .align-items {
    align-items: center;
}

/* Mobile responsiveness */
@media (max-width: 991.98px) {
    .container-fluid-custom {
        width: auto;
        margin: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    .pt-lg-0 {
        padding-top: 3rem !important;
    }

    .col-lg-6 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .h2 {
        line-height: normal;
    }

    .col-md-9 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .col-lg-5 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .text-sm-justify {
        text-align: left;
    }
}
</style>