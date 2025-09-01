<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import CustomCursor from "./components/CustomCursor.vue";

const router = useRouter();
const showFab = ref(false);

onMounted(() => {
  setTimeout(() => {
    showFab.value = true;
  }, 1000);
});

const goToPortfolio = () => {
  router.push('/portfolio');
};
</script>

<template>
  <div id="app">
    <!-- Background Logo -->
    <div class="hero-background-logo"></div>
    
    <!-- Custom Cursor -->
    <!-- <CustomCursor /> -->
    
    <Navbar />
    <div class="main-content-wrapper">
      <router-view />
    </div>
    <Footer />
    
    <!-- Portfolio FAB CTA -->
    <Transition name="fab">
      <button 
        v-if="showFab"
        class="portfolio-fab"
        @click="goToPortfolio"
        aria-label="View our portfolio"
      >
        <span class="fab-text">View our portfolio</span>
        <svg class="fab-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </Transition>
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

/* Portfolio FAB Button */
.portfolio-fab {
  position: fixed;
  bottom: 30px;
  left: 30px;
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.portfolio-fab::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-fab:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}

.portfolio-fab:hover::before {
  opacity: 1;
}

.portfolio-fab:hover .fab-arrow {
  transform: translateX(3px);
}

.portfolio-fab:active {
  transform: translateY(-1px) scale(1.02);
}

.fab-text {
  position: relative;
  z-index: 1;
}

.fab-arrow {
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

/* FAB Animation */
.fab-enter-active {
  animation: fabSlideIn 0.5s ease-out;
}

.fab-leave-active {
  animation: fabSlideOut 0.3s ease-in;
}

@keyframes fabSlideIn {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fabSlideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100px);
    opacity: 0;
  }
}

/* Pulse animation for attention */
.portfolio-fab::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: var(--color-accent);
  border-radius: 50px;
  opacity: 0;
  animation: pulse 2s infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .portfolio-fab {
    bottom: 20px;
    left: 20px;
    padding: 14px 20px;
    font-size: 14px;
  }
  
  .fab-arrow {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .portfolio-fab {
    bottom: 15px;
    left: 15px;
    padding: 12px 18px;
    font-size: 13px;
  }
}
</style>
