<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
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
