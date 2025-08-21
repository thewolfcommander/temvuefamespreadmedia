<template>
    <section class="client-section bg-white">
        <div class="container-fluid container-fluid-custom">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h2 class="h2 mb-0 h2-line pb-0 text-black heading-with-line">
                        Our Clients
                    </h2>
                    <h3 class="mb-0 text-black fw-medium">our precious treasure box</h3>
                </div>
                <div class="col-lg-6">
                    <p class="text-gray text-sm-justify mt-3 mt-md-0 mt-lg-0" style="color: #141414">
                        Welcome to our precious box - every customer is precious to us -
                        it's only their trust and cooperation make us who we are now. You
                        can see a massive list, from top-listed ones to new birds. We
                        created every brand uniquely and gave them a unique identity in
                        the market.
                    </p>
                </div>
            </div>

            <div class="row pt-lg-5 mt-lg-2">
                <div v-for="(client, index) in clients" :key="client.alt"
                    class="col-6 col-md-4 col-lg-2 pb-5 mb-4 text-center">
                    <div class="client-hover-box" :ref="setClientBoxRef">
                        <img :src="client.src" class="img-fluid one" :alt="client.alt" />
                        <img :src="client.src" class="img-fluid two" :alt="client.alt" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// --- ASSET HANDLING ---
// In a real project, you would import all your client logos like this:
// import itcLogo from '@/assets/clients/ITC.svg';
// import bNaturalLogo from '@/assets/clients/B-natural.svg';
// ... and so on for all 30+ logos.

// For demonstration, we'll create a placeholder array.
// Replace the `src` values with your imported logos.
const clients = ref([
    { src: 'https://placehold.co/196x100/f0f0f0/333?text=ITC', alt: 'ITC' },
    { src: 'https://placehold.co/196x100/f0f0f0/333?text=B-natural', alt: 'B-natural' },
    { src: 'https://placehold.co/196x100/f0f0f0/333?text=Sunfeast', alt: 'Sunfeast' },
    { src: 'https://placehold.co/196x100/f0f0f0/333?text=Patanjali', alt: 'Patanjali' },
    { src: 'https://placehold.co/196x100/f0f0f0/333?text=Omaxe', alt: 'Omaxe' },
    { src: 'https://placehold.co/196x100/f0f0f0/333?text=Lulu', alt: 'Lulu' },
    // ... Add all the other client objects here
]);

// --- ANIMATION LOGIC ---
let observer = null;
const clientBoxes = [];
const setClientBoxRef = (el) => {
    if (el) {
        clientBoxes.push(el);
    }
};

onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay based on the element's index for a staggered effect
                entry.target.style.transitionDelay = `${index * 50}ms`;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    clientBoxes.forEach(box => {
        observer.observe(box);
    });
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped>
/* All CSS from your file is placed here and scoped to this component */
.bg-white {
    background-color: var(--white);
}

.text-gray {
    color: var(--gray);
}

.text-black {
    color: var(--black);
}

.h2 {
    font-size: var(--heading-lg-h2);
    line-height: 70px;
}

.h3 {
    font-size: var(--heading-lg-h3);
    line-height: 36px;
    font-weight: 500;
}

.h2-line {
    position: relative;
    padding-top: 1rem;
}

.h2-line::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 50px;
    height: 4px;
    background: var(--primary);
    transition: width 0.6s linear;
}

.h2-line:hover::before {
    width: 80px;
}

.container-fluid-custom {
    width: 1180px;
    margin: auto;
}

.client-hover-box {
    overflow-y: hidden;
    height: 100px;
    width: 196px;
    /* Styles for the animation */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.client-hover-box.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.client-hover-box img {
    height: 100px;
    filter: grayscale(1);
    transition: 0.6s linear;
    /* Added transition for smooth filter effect */
}

.client-hover-box:hover {
    transform: scale(1.05) !important;
    /* Replaced JS hover with CSS hover */
}

.client-hover-box:hover img {
    filter: grayscale(0);
}

.client-hover-box:hover img:first-child,
.client-hover-box:hover img:nth-child(2) {
    transform: translateY(-100%);
}

/* Add other styles from your CSS file here */
@media (max-width: 768px) {

    .client-hover-box:hover img:first-child,
    .client-hover-box:hover img:nth-child(2) {
        transform: translateY(0);
        /* Disable slide effect on mobile hover */
    }

    .client-hover-box img:nth-child(2) {
        display: none;
    }
}
</style>