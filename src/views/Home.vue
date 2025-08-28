<template>
  <div class="home-page">
    <div class="hero-wrapper">
      <HeroSection />
      <Rollingnumber />
      <AboutSection />
    </div>
    <div class="sections-wrapper">
      <OurServices />
      <ServicesOverview />
      <FeaturedWorks />
      <ClientsSection />
      <ContactFormSection />
      <TestimonialSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAppStore } from "@/stores";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import OurServices from "@/components/OurServices.vue";
import ServicesOverview from "@/components/ServicesOverview.vue";
import FeaturedWorks from "@/components/FeaturedWorks.vue";
import ClientsSection from "@/components/ClientsSection.vue";
import ContactFormSection from "@/components/ContactFormSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import Rollingnumber from "../components/Rollingnumber.vue";

const appStore = useAppStore();

onMounted(() => {
  appStore.setCurrentSlide(0);
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  width: 100%;
}

.hero-wrapper {
  margin: 0 calc(-1 * var(--wrapper-padding, 20px));
  width: calc(100% + 2 * var(--wrapper-padding, 20px));
}

.sections-wrapper>* {
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
}

.sections-wrapper>*:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .hero-wrapper {
    --wrapper-padding: 40px;
  }

  .sections-wrapper>* {
    margin-bottom: 100px;
  }
}

@media (min-width: 1024px) {
  .hero-wrapper {
    --wrapper-padding: 60px;
  }

  .sections-wrapper>* {
    margin-bottom: 120px;
  }
}
</style>
