<template>
  <div class="portfolio-preview">
    <div class="container">
      <div class="preview-content">
        <div class="media-stack">
          <div 
            v-for="(item, index) in previewItems" 
            :key="item.id"
            class="media-card"
            :style="getCardStyle(index)"
            @mouseenter="handleHover(index)"
            @mouseleave="handleLeave(index)"
            @click="navigateToPortfolio"
          >
            <div class="media-wrapper">
              <video
                v-if="item.type === 'video'"
                :src="item.src"
                :poster="item.thumbnail"
                muted
                loop
                preload="metadata"
                class="media-content"
                @mouseenter="playPreview"
                @mouseleave="pausePreview"
              />
              <img
                v-else
                :src="item.src"
                :alt="item.title"
                loading="lazy"
                class="media-content"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.category }}</p>
                </div>
                <div v-if="item.type === 'video'" class="play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="preview-text">
          <h2>Our Creative Portfolio</h2>
          <p>Explore our diverse collection of videos, animations, and photography that showcase our expertise in visual storytelling and brand communication.</p>
          <router-link to="/portfolio" class="portfolio-btn">
            <span>View Our Portfolio</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14"/>
              <path d="M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

const hoveredIndex = ref(-1)
const router = useRouter()

// Selected media items from MasonryGallery for preview
const previewItems = ref([
  {
    id: 1,
    type: 'video',
    title: 'Animated Brand Story',
    category: 'Animated Video',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Animated%20video/(13).mp4',
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails/animated-brand-story.png'
  },
  {
    id: 19,
    type: 'image',
    title: 'Peach & Musk Brand Photography',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/peach&musk.jpg'
  },
  {
    id: 4,
    type: 'video',
    title: 'Corporate Brand Film',
    category: 'Brand Promotion',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Brand%20Promotion%20Videos/(3).mp4',
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails/corporate-brand-film.png'
  },
  {
    id: 23,
    type: 'image',
    title: 'Professional Portrait Session',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_1.JPG'
  },
  {
    id: 16,
    type: 'video',
    title: 'Fashion Week Runway',
    category: 'Fashion Video',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/fashion%20video/(19).mp4',
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails/fashion-week-runway.png'
  }
])

const getCardStyle = (index) => {
  const rotations = [8, -12, 15, -8, 10]
  const zIndexes = [5, 4, 3, 2, 1]
  const xOffsets = [0, 20, -15, 35, -25]
  const yOffsets = [0, -10, 15, -20, 25]
  
  return {
    transform: `rotate(${rotations[index]}deg) translateX(${xOffsets[index]}px) translateY(${yOffsets[index]}px)`,
    zIndex: hoveredIndex.value === index ? 10 : zIndexes[index]
  }
}

const handleHover = (index) => {
  hoveredIndex.value = index
  gsap.to(`.media-card:nth-child(${index + 1})`, {
    scale: 1.05,
    rotation: 0,
    duration: 0.4,
    ease: 'power2.out'
  })
}

const handleLeave = (index) => {
  hoveredIndex.value = -1
  const rotations = [8, -12, 15, -8, 10]
  gsap.to(`.media-card:nth-child(${index + 1})`, {
    scale: 1,
    rotation: rotations[index],
    duration: 0.4,
    ease: 'power2.out'
  })
}

const playPreview = (event) => {
  const video = event.target
  if (video && video.tagName === 'VIDEO') {
    video.currentTime = 0
    video.play().catch(e => console.log('Preview play failed:', e))
  }
}

const pausePreview = (event) => {
  const video = event.target
  if (video && video.tagName === 'VIDEO') {
    video.pause()
    video.currentTime = 0
  }
}

const navigateToPortfolio = () => {
  router.push('/portfolio')
}

onMounted(() => {
  gsap.set('.media-card', { opacity: 0, scale: 0.8 })
  gsap.set('.preview-text', { opacity: 0, y: 50 })
  
  gsap.to('.media-card', {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    delay: 0.2
  })
  
  gsap.to('.preview-text', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.8
  })
})
</script>

<style scoped>
.portfolio-preview {
  padding: 80px 0;
  background: var(--color-black);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.preview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.media-stack {
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-card {
  position: absolute;
  width: 250px;
  max-height: 220px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
}

.media-card:hover {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
}

.media-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.media-content {
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
}

video.media-content {
  object-fit: cover;
}

img.media-content {
  object-fit: contain;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.media-card:hover .overlay {
  opacity: 1;
}

.overlay-content {
  margin-top: auto;
}

.overlay-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: white;
}

.overlay-content p {
  font-size: 0.85rem;
  color: var(--color-accent);
  font-weight: 500;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-black);
  transition: all 0.3s ease;
}

.play-icon svg {
  width: 20px;
  height: 20px;
  margin-left: 2px;
}

.media-card:hover .play-icon {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--color-accent);
  color: white;
}

.preview-text {
  text-align: left;
}

.preview-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  line-height: 1.2;
}

.preview-text p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 32px;
}

.portfolio-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(230, 57, 70, 0.3);
}

.portfolio-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(230, 57, 70, 0.5);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
}

.portfolio-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.portfolio-btn:hover svg {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .preview-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .media-stack {
    height: 350px;
  }
  
  .media-card {
    width: 220px;
    height: 200px;
    max-height: 200px;
  }
}

@media (max-width: 768px) {
  .portfolio-preview {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .preview-content {
    gap: 40px;
  }
  
  .media-stack {
    height: 300px;
  }
  
  .media-card {
    width: 180px;
    height: 160px;
    max-height: 160px;
  }
  
  .preview-text h2 {
    font-size: 2rem;
  }
  
  .preview-text p {
    font-size: 1rem;
  }
  
  .portfolio-btn {
    padding: 14px 28px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .media-card {
    width: 160px;
    height: 140px;
    max-height: 140px;
  }
  
  .preview-text h2 {
    font-size: 1.8rem;
  }
}
</style>