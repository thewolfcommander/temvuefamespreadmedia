<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
    <OurServices />
    <ServicesOverview />
    <FeaturedWorks />
    <ClientsSection />
    <ContactFormSection />
    <TestimonialSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import OurServices from '@/components/OurServices.vue'
import ServicesOverview from '@/components/ServicesOverview.vue'
import FeaturedWorks from '@/components/FeaturedWorks.vue'
import ClientsSection from '@/components/ClientsSection.vue'
import ContactFormSection from '@/components/ContactFormSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'

const appStore = useAppStore()

onMounted(() => {
  appStore.setCurrentSlide(0)
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  width: 100%;
}
</style>