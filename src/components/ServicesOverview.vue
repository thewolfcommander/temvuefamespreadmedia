<template>
    <div>
        <section class="need-section bg-black" ref="needSectionEl">
            <div class="container-fluid container-fluid-custom pt-md-2 pt-lg-5">
                <div>
                    <h2 class="h2 mb-0 text-light h2-line pb-3 pb-md-4 pb-lg-0 col-lg-8">
                        We’re Everything <br />you need.
                    </h2>
                </div>
                <div class="row">
                    <div class="col-6 col-md-12 col-lg-4 d-none d-md-block d-lg-block"></div>

                    <div v-for="(column, colIndex) in linkColumns" :key="colIndex" :class="column.bootstrapClass">
                        <a v-for="link in column.links" :key="link.name" :href="link.href"
                            class="text-decoration-none text-light d-block links cat-btn">
                            #{{ link.name }}
                        </a>
                    </div>

                </div>
                <div class="mt-4">
                    <a href="https://www.expandbuzz.com/contact-us/" class="text-light cta1">
                        Request a proposal for your product
                    </a>
                    <i class="ri-notification-2-fill bell"></i>
                </div>
            </div>
        </section>

        <section class="agency-section bg-black pt-0" id="agency-section" ref="agencySectionEl">
            <div class="container-fluid container-fluid-custom mt-lg-5 pt-lg-0">
                <div class="text-center text-sm-justify">
                    <h1 class="h4 text-center text-sm-justify text-light col-lg-8 m-auto home-h4">
                        INDIA'S LEADING BRANDING & PACKAGING DESIGN AGENCY
                    </h1>
                    <p class="text-light text-center text-sm-justify col-lg-9 m-auto mt-2">
                        With an experience of more than 10 prosperous years in the industry,
                        we are privileged to be one of the prominent branding agencies in
                        India. We also marked our identity in packaging and digital
                        segments, becoming a leading
                        <a href="https://www.expandbuzz.com/packaging-design-agency" class="text-decoration-none">
                            packaging design agency
                        </a>
                        and India's top
                        <a href="https://www.expandbuzz.com/digital-marketing-agency" class="text-decoration-none">
                            digital marketing agency </a>.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Create refs to hold the elements we want to animate
const needSectionEl = ref(null);
const agencySectionEl = ref(null);

// Store the link data in an array to keep the template clean
const linkColumns = ref([
    {
        bootstrapClass: 'col-6 col-md-4 col-lg-3',
        links: [
            { name: 'Food', href: 'https://www.expandbuzz.com/packaging-design-agency/food/' },
            { name: 'Spices', href: 'https://www.expandbuzz.com/packaging-design-agency/spices/' },
            { name: 'Dairy Products', href: 'https://www.expandbuzz.com/packaging-design-agency/dairy-products/' },
            { name: 'Frozen Food', href: 'https://www.expandbuzz.com/packaging-design-agency/frozen-food' },
        ]
    },
    {
        bootstrapClass: 'col-6 col-md-4 col-lg-3',
        links: [
            { name: 'FMCG', href: 'https://www.expandbuzz.com/packaging-design-agency/fmcg/' },
            { name: 'Cosmetics', href: 'https://www.expandbuzz.com/packaging-design-agency/cosmetics/' },
            { name: 'Beverages', href: 'https://www.expandbuzz.com/packaging-design-agency/beverages/' },
        ]
    },
    {
        bootstrapClass: 'col-6 col-md-4 col-lg-2',
        links: [
            { name: 'Tea & Coffee', href: 'https://www.expandbuzz.com/packaging-design-agency/tea/' },
            { name: 'Dry Fruits', href: 'https://www.expandbuzz.com/packaging-design-agency/dry-fruits/' },
            { name: 'Pharma', href: 'https://www.expandbuzz.com/packaging-design-agency/pharma-nutraceuticals' },
        ]
    }
]);

// onMounted hook runs after the component's HTML is on the page
onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe the Vue refs
    const animatedElements = [needSectionEl.value, agencySectionEl.value];
    animatedElements.forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        }
    });
});
</script>

<style scoped>
/* All CSS from your file is placed here and scoped to this component */
.bg-black {
    background-color: var(--black);
}

.text-light {
    color: var(--white) !important;
}

.h2 {
    font-size: 70px;
    font-weight: 600;
    line-height: 1.1;
}

.h4 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
}

.container-fluid-custom {
    max-width: 1400px;
    margin: 0 auto;
    /* Centered for consistency */
    padding: 0 2rem;
    /* Added padding for smaller screens */
}

.need-section {
    position: relative;
}

.need-section a {
    font-size: 16px;
    transition: var(--transition);
}

.need-section .row {
    margin-top: 2rem;
}

.cat-btn {
    color: var(--white) !important;
    background: transparent;
    text-decoration: none;
    padding: 0.3rem 0;
    transition: var(--transition);
    display: block;
    font-size: 14px;
}

.cat-btn:hover {
    color: var(--primary) !important;
    transform: scale(1.05);
    /* Replaced JS hover effect */
}

.cta1 {
    display: inline-block;
    margin-top: 2rem;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary) !important;
    text-decoration: none;
    animation-name: glow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transition: var(--transition);
}

.cta1:hover {
    color: var(--white) !important;
    transform: scale(1.05);
}

.cta1:active {
    transform: scale(0.95);
    /* Replaced JS click effect */
}

.bell {
    margin-left: 6px;
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 16px;
    color: var(--primary);
    animation: 2s ease-in-out 0.7s infinite ring;
    transform-origin: 50% 4px;
}

.agency-section {
    padding: 3rem 0 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.agency-section a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
}

.agency-section a:hover {
    color: var(--white);
}

.agency-section p {
    font-size: 16px;
    line-height: 1.7;
    margin-top: 1rem;
}

@keyframes ring {

    0%,
    100%,
    43% {
        transform: rotateZ(0);
    }

    1%,
    9% {
        transform: rotateZ(30deg);
    }

    11%,
    3% {
        transform: rotateZ(-28deg);
    }

    5% {
        transform: rotateZ(34deg);
    }

    7% {
        transform: rotateZ(-32deg);
    }

    13% {
        transform: rotateZ(26deg);
    }

    15% {
        transform: rotateZ(-24deg);
    }

    17% {
        transform: rotateZ(22deg);
    }

    19% {
        transform: rotateZ(-20deg);
    }

    21% {
        transform: rotateZ(18deg);
    }

    23% {
        transform: rotateZ(-16deg);
    }

    25% {
        transform: rotateZ(14deg);
    }

    27% {
        transform: rotateZ(-12deg);
    }
}

@keyframes glow {
    0% {
        text-shadow: 0 0 5px var(--primary);
    }

    100% {
        text-shadow: 0 0 20px var(--primary), 0 0 30px var(--primary);
    }
}

@media (max-width: 768px) {
    .h2 {
        font-size: 2.2rem;
    }

    .h4 {
        font-size: 1.25rem;
    }
}
</style>