<template>
    <div class="cta-div">
        <a href="tel:9711431917" class="text-white text-decoration-none number white-bg-t">
            +91 9711431917
        </a>
        <a href="#">
            <span class="button">
                <span class="button-background"></span>
                <span class="button-text">Contact Us</span>
            </span>
        </a>
    </div>
    <section class="home-banner-section bg-black py-0">
        <div class="gallery">
            <div class="swiper ms-md-5 gallery-slider" ref="gallerySliderEl">
                <div class="swiper-wrapper ms-md-5">
                    <div class="swiper-slide my-slide">
                        <div class="home-banner-box">
                            <div class="home-banner-content">
                                <h2 class="h2 heading-wrapper">Unwrap the Art of Packaging</h2>
                                <p class="text-gray text-wrapper">Effective packaging that speaks volumes,
                                    designed with creative inserts to enhance your product sales. Your Product's Perfect
                                    Dress
                                </p>
                            </div>
                            <div class="home-banner-img"><img
                                    src="../assets/Gemini_Generated_Image_wbzjbowbzjbowbzj__1_-removebg-preview.png"
                                    class="img-fluid" alt="packaging-design" /></div>
                        </div>
                    </div>
                    <div class="swiper-slide my-slide">
                        <div class="home-banner-box">
                            <div class="home-banner-content">
                                <h2 class="h2 heading-wrapper">Unleashing the Power of Your Brand</h2>
                                <p class="text-gray text-wrapper">Build your Dreams Through Branding - Where Your Story
                                    Evolves into an Enduring Legacy. </p>
                            </div>
                            <div class="home-banner-img"><img src="../assets/seo-3218580_1280-removebg-preview.png"
                                    class="img-fluid" alt="brand-identity-design" /></div>
                        </div>
                    </div>
                    <div class="swiper-slide my-slide">
                        <div class="home-banner-box">
                            <div class="home-banner-content">
                                <h2 class="h2 heading-wrapper">Unveil Your Brand's Essence</h2>
                                <p class="text-gray text-wrapper">We design unique brand emblems,
                                    helping businesses find their special identity in the world of marketing and
                                    branding </p>
                            </div>
                            <div class="home-banner-img"><img
                                    src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/logo-design.webp"
                                    class="img-fluid" alt="logo-design" /></div>
                        </div>
                    </div>
                    <div class="swiper-slide my-slide">
                        <div class="home-banner-box  ">
                            <div class="home-banner-content">
                                <h2 class="h2 heading-wrapper">Elevate Your Digital Presence</h2>
                                <p class="text-gray text-wrapper">We deliver holistic digital marketing solutions,
                                    guiding them through the constantly evolving realm of competitive digital landscapes
                                </p>
                            </div>
                            <div class="home-banner-img"><img
                                    src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/social-media-creative-design.webp"
                                    class="img-fluid" alt="social-media-creative-design" /></div>
                        </div>
                    </div>
                    <div class="swiper-slide my-slide">
                        <div class="home-banner-box "> ">
                            <div class="home-banner-content">
                                <h2 class="h2 heading-wrapper">Crafting Your Online Identity Today</h2>
                                <p class="text-gray text-wrapper">Shaping Future Digital Landscapes Today - Your
                                    Imagination,
                                    Our expertise,
                                    and Limitless Potential Waiting to Be Unveiled. </p>
                            </div>
                            <div class="home-banner-img"><img
                                    src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/website-design.webp"
                                    class="img-fluid" alt="website-design" /></div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="swiper gallery-thumbs" ref="galleryThumbsEl">
                <div class="swiper-wrapper">
                    <div class="swiper-slide thumb_img">
                        <div class="sldbtn">
                            <p class="sldbtn_link">Packaging Design</p>
                        </div><span class="before-line2"></span>
                    </div>
                    <div class="swiper-slide thumb_img">
                        <div class="sldbtn">
                            <p class="sldbtn_link">Brand Design</p>
                        </div><span class="before-line2"></span>
                    </div>
                    <div class="swiper-slide thumb_img">
                        <div class="sldbtn">
                            <p class="sldbtn_link">Logo Design</p>
                        </div><span class="before-line2"></span>
                    </div>
                    <div class="swiper-slide thumb_img">
                        <div class="sldbtn">
                            <p class="sldbtn_link">Social Media</p>
                        </div><span class="before-line2"></span>
                    </div>
                    <div class="swiper-slide thumb_img">
                        <div class="sldbtn">
                            <p class="sldbtn_link">Website</p>
                        </div><span class="before-line2"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>import {
    ref,
    onMounted,
    onBeforeUnmount
}

    from 'vue';

// Import libraries and their CSS
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import gsap from 'gsap';

// Create refs to hold the slider DOM elements
const gallerySliderEl = ref(null);
const galleryThumbsEl = ref(null);

// Create refs to hold the Swiper instances for later cleanup
let gallerySlider = null;
let galleryThumbs = null;

// Function to handle the GSAP text animations
function animateText(activeSlide) {
    if (!activeSlide) return;

    gsap.fromTo(activeSlide.querySelector('.heading-wrapper'),
        {
            y: 30, opacity: 0
        }

        ,
        {
            y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.1
        }

    );

    gsap.fromTo(activeSlide.querySelector('.text-wrapper'),
        {
            y: 30, opacity: 0
        }

        ,
        {
            y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3
        }

    );
}

// onMounted hook runs after the component's HTML is rendered on the page
onMounted(() => {

    // Thumbs only for desktop
    if (window.innerWidth > 767) {
        galleryThumbs = new Swiper(galleryThumbsEl.value, {
            spaceBetween: 10,
            slidesPerView: "auto",
            centeredSlides: false,
            loop: false,
            freeMode: true,
            watchSlidesProgress: true,
        }

        );
    }

    // Main slider initialization
    gallerySlider = new Swiper(gallerySliderEl.value, {

        loop: true,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }

        ,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }

        ,
        thumbs: galleryThumbs ? {
            swiper: galleryThumbs
        }

            : {}

        ,

        // Event listener for slide changes
        on: {
            slideChangeTransitionStart: function () {
                animateText(this.slides[this.activeIndex]);
            }

            ,
        }

        ,
    }

    );

    // Run animation on the initial active slide
    animateText(gallerySlider.slides[gallerySlider.activeIndex]);
}

);

// onBeforeUnmount hook cleans up before the component is destroyed
onBeforeUnmount(() => {
    if (gallerySlider) {
        gallerySlider.destroy();
    }

    if (galleryThumbs) {
        galleryThumbs.destroy();
    }
}

);

</script>
<style scoped>
/* All styles from your source file are placed here and scoped to this component */


:root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}

body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
}

h1 {
    font-size: 3.2em;
    line-height: 1.1;
}

button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}

button:hover {
    border-color: #646cff;
}






.home-banner-section {
    min-height: 85vh;
    align-items: center;
    display: flex;
}

.gallery {
    width: 100%;
    position: relative;
    margin: 40px auto;
}

.gallery-slider {
    width: 100%;
    height: auto;
    margin: 0 0 10px;
}

.gallery-slider .swiper-slide img {
    display: block;
    width: 75%;
    height: 91%;
    margin: 0 auto;
}

.gallery-thumbs {
    width: 100%;
    padding: 0;
    overflow: hidden;
}

.gallery-thumbs .swiper-slide {
    height: 50px;
    text-align: center;
    overflow: hidden;
    opacity: .5;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    opacity: 1;
    position: relative;
}

.gallery-thumbs .swiper-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 30px;
}

.sldbtn_link {
    padding: 6px 18px;
    border-radius: 9999px;
    transition: all 0.3s ease;
    color: #fff;
    border: none;
}

.gallery-thumbs .swiper-slide-thumb-active .sldbtn_link {
    border: 1px solid var(--primary);
}

.sldbtn .sldbtn_link {
    border-radius: 50px;
    background: #000;
    padding: 10px 30px 8px;
    display: grid;
    align-items: center;
    cursor: pointer;
    color: #fff;
    margin-bottom: 0;
    position: relative;
    z-index: 99999;
}

.sldbtn {
    position: relative;
    display: inline-block;
    margin: 0 40px;
}

.before-line2 {
    background: #fff;
    width: 100%;
    height: 1px;
    top: calc(50% - 1px);
    position: absolute;
    left: 0;
    z-index: -9999;
}

.sldbtn .sldbtn_link::before,
.sldbtn .sldbtn_link::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.sldbtn .sldbtn_link::before {
    left: 5%;
}

.sldbtn .sldbtn_link::after {
    right: 5%;
}

.gallery-slider .swiper-pagination {
    width: 100%;
    justify-content: center;
    gap: 1.1vh;
    display: none;
}

.home-banner-box {
    position: relative;
    align-items: center;
    padding-inline: 2rem;
}

.swiper-slide-active .home-banner-box {
    position: relative;
    align-items: center;
    display: flex;
}

.home-banner-content {
    position: absolute;
    padding-left: 2rem;
    display: none;
}

.swiper-slide-active .home-banner-content {
    width: 25%;
    display: block;
}

.home-banner-img {
    display: flex;
    justify-content: end;
    text-align: right;
    margin-left: auto;
    width: 70%;
}

.home-banner-content .h2 {
    font-size: 27px;
    line-height: 33px;
    color: var(--white);
    text-transform: uppercase;
}

.home-banner-content p {
    font-size: 13px;
    text-align: left;
}

@media(max-width:767px) {
    .home-banner-section {
        min-height: 75vh !important;

    }

    .gallery-thumbs {
        display: none;
    }

    .gallery-slider .swiper-pagination {
        display: flex;
        margin-top: 1rem;
    }

    .home-banner-content,
    .home-banner-img,
    .swiper-slide-active .home-banner-content,
    .swiper-slide-active .home-banner-img {
        width: 100% !important;
        padding-inline: 0.8rem;
        text-align: center;
    }

    .swiper-slide-active .home-banner-box {
        display: block;
    }

    .home-banner-content {
        position: initial;
        padding-left: 0;
        display: block !important;
    }

    .home-banner-content p {
        text-align: center !important;
    }

    .home-banner-content .h2 {
        text-align: center;
        font-size: 33px;
        line-height: 40px;
    }
}

/* Css for the CTA buttons */
.cta-div {
    position: fixed;
    right: 7%;
    z-index: 9;
    padding: 0px 12px;
    top: 3%;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
}

/* NOTE: I have corrected the nested CSS from your source file to standard CSS */
.cta-div .mini-logo {
    width: 45px;
    display: block;
    padding-block: 5px;
}

.cta-div .white-bg-t {
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 15px;
    border-radius: 200px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    padding: 0 0.8rem;
    position: relative;
    display: inline-flex;
    border: none;
    min-width: 135px;
    min-height: 45px;
    margin-top: 9px;
}

.button-text {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.button-background {
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 4px;
    background: linear-gradient(-90deg, #4394f0, #00dfd8, #ff0080, #009fe3);
    background-size: 400% 100%;
    border: none;
    padding: 0;
    margin: 0;
    animation: backgroundAnimation 8s ease-in-out infinite;
    border-radius: 200px;
}

@keyframes backgroundAnimation {
    50% {
        background-position: 140% 50%;
        transform: skew(-2deg);
    }
}

@media (max-width: 767px) {
    .cta-div {
        display: none;
        left: 7%;
        bottom: 2%;
        top: unset;
        padding: 0px;
        background: transparent;
    }

    .number {
        display: none;
    }
}
</style>