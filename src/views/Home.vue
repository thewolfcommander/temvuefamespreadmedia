<template>
  <div class="home-page">
    <HeroSection />
    <Areyou />
    <OurServices />
    <Weareeverything />
    <OurClients />
    <ContactFormSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores'
import HeroSection from '@/components/HeroSection.vue'
import Areyou from '@/components/Areyou.vue'
import OurServices from '@/components/OurServices.vue'
import Weareeverything from '@/components/Weareeverything.vue'
import OurClients from '@/components/Ourclients.vue'
import ContactFormSection from '@/components/ContactFormSection.vue'

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