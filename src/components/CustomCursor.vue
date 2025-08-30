<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorRef = ref<HTMLElement | null>(null)

const updateCursorPosition = (e: MouseEvent) => {
  if (cursorRef.value) {
    cursorRef.value.style.left = `${e.clientX - 40}px`
    cursorRef.value.style.top = `${e.clientY - 40}px`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', updateCursorPosition)
  document.body.style.cursor = 'none'
})

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursorPosition)
  document.body.style.cursor = ''
})
</script>

<template>
  <div ref="cursorRef" class="custom-cursor">
    <div class="cursor-circle">
      <svg class="rotating-text" width="80" height="80" viewBox="0 0 40 40">
        <defs>
          <path id="text-circle" d="M 20,20 m -16,0 a 16,16 0 1,1 32,0 a 16,16 0 1,1 -32,0" />
        </defs>
        <text class="cursor-text">
          <textPath href="#text-circle" startOffset="0%">fame spread media •</textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999999;
  width: 80px;
  height: 80px;
  transition: all 0.1s ease-out;
}

.cursor-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid var(--color-primary-light);
  position: relative;
  transition: border-color 0.3s ease;
}

.cursor-accent .cursor-circle {
  border-color: var(--accent);
}

.rotating-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotate 8s linear infinite;
}

.cursor-text {
  font-family: 'Raleway', sans-serif;
  font-size: 6px;
  font-weight: 400;
  fill: var(--color-primary-light);
  transition: fill 0.3s ease;
  letter-spacing: 1.5px;
}

.cursor-accent .cursor-text {
  fill: var(--accent-500);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Hide default cursor on interactive elements */
* {
  cursor: none !important;
}
</style>