<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
  <div id="app">
    <!-- Background Logo -->
    <div class="hero-background-logo"></div>
    
    <!-- Custom Cursor -->
    <CustomCursor />
    
    <Navbar />
    <div class="main-content-wrapper">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.hero-background-logo {
  position: fixed;
  top: 50%;
  left: -15%;
  transform: translateY(-50%);
  width: 120vw;
  height: 120vh;
  background-image: url('https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/branding-bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.01;
  z-index: 0;
  pointer-events: none;
}

.main-content-wrapper {
  padding: 0 20px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

@media (min-width: 768px) {
  .main-content-wrapper {
    padding: 0 40px;
  }
}

@media (min-width: 1024px) {
  .main-content-wrapper {
    padding: 0 60px;
  }
}
</style>
