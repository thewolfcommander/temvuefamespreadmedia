<template>
  <div class="portfolio-page">
    <div class="portfolio-header">
      <h1 class="portfolio-title">Our Portfolio</h1>
      <p class="portfolio-subtitle">Explore our creative works across different mediums</p>
    </div>
    <MasonryGallery />
  </div>
</template>

<script setup>
import MasonryGallery from '@/components/MasonryGallery.vue'
</script>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  background: var(--color-black);
  padding-top: 80px;
}

.portfolio-header {
  text-align: center;
  padding: 60px 20px 40px;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, var(--color-black) 100%); */
}

.portfolio-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.portfolio-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
}
</style>