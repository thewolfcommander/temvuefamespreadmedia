<template>
  <div class="compact-gallery">
    <!-- Gallery Grid -->
    <div class="gallery-grid" ref="galleryGrid">
      <TransitionGroup name="gallery-item">
        <div 
          v-for="(item, index) in displayItems" 
          :key="item.id"
          class="gallery-item"
          @click="openLightbox(item, index)"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="media-wrapper">
            <!-- Show video preview -->
            <video 
              v-if="item.type === 'video'"
              :src="item.src"
              muted 
              loop
              preload="metadata"
              class="video-preview"
              @mouseenter="playPreview"
              @mouseleave="pausePreview"
            ></video>
            
            <!-- Show image preview -->
            <img 
              v-else
              :src="item.src"
              :alt="item.title"
              loading="lazy"
              class="image-preview"
            >
            
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
      </TransitionGroup>
    </div>

    <!-- View All Button -->
    <div class="view-all-container">
      <router-link to="/portfolio" class="view-all-btn">
        <span>View All Works</span>
        <div class="btn-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14"/>
            <path d="M12 5l7 7-7 7"/>
          </svg>
        </div>
      </router-link>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxItem" class="lightbox" @click="closeLightbox">
          <div class="lightbox-content" @click.stop>
            <!-- Close Button -->
            <button class="lightbox-close" @click="closeLightbox">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <!-- Media Display -->
            <div class="media-display">
              <img 
                v-if="lightboxItem.type === 'image'" 
                :src="lightboxItem.src" 
                :alt="lightboxItem.title"
                class="lightbox-image"
              >
              <div v-else class="video-container">
                <video 
                  ref="videoPlayer"
                  :src="lightboxItem.src" 
                  @click="togglePlayPause"
                  @timeupdate="updateProgress"
                  @loadedmetadata="onVideoLoaded"
                  class="lightbox-video"
                  controls
                ></video>
              </div>
            </div>

            <!-- Media Info -->
            <div class="media-info">
              <h2>{{ lightboxItem.title }}</h2>
              <p class="category">{{ lightboxItem.category }}</p>
              <div class="actions">
                <router-link to="/portfolio" class="view-portfolio-btn" @click="closeLightbox">
                  View Full Portfolio
                </router-link>
              </div>
            </div>

            <!-- Navigation -->
            <div class="lightbox-nav">
              <button 
                class="nav-btn prev" 
                @click.stop="navigateGallery(-1)"
                :disabled="currentLightboxIndex === 0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <button 
                class="nav-btn next" 
                @click.stop="navigateGallery(1)"
                :disabled="currentLightboxIndex === displayItems.length - 1"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

const router = useRouter()
const galleryGrid = ref(null)
const videoPlayer = ref(null)

// Lightbox state
const lightboxItem = ref(null)
const currentLightboxIndex = ref(0)
const isPlaying = ref(false)
const progress = ref(0)

// Selected media items for compact display (first 8 items)
const displayItems = ref([
  {
    id: 1,
    type: 'video',
    title: 'Animated Brand Story',
    category: 'Animated Video',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Animated%20video/(13).mp4'
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
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Brand%20Promotion%20Videos/(3).mp4'
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
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/fashion%20video/(19).mp4'
  },
  {
    id: 21,
    type: 'image',
    title: 'Beauty Product Campaign',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/peach&musk_3.jpg'
  },
  {
    id: 13,
    type: 'video',
    title: 'Community Stories',
    category: 'UGC Video',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/UGC%20Video/(17).mp4'
  },
  {
    id: 25,
    type: 'image',
    title: 'Lifestyle Photography',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_3.JPG'
  }
])

const navigateToPortfolio = () => {
  router.push('/portfolio')
}

// Lightbox functions
const openLightbox = async (item, index) => {
  lightboxItem.value = item
  currentLightboxIndex.value = index
  document.body.style.overflow = 'hidden'
  
  // Auto-play video when opened
  if (item.type === 'video') {
    await nextTick()
    if (videoPlayer.value) {
      videoPlayer.value.play()
      isPlaying.value = true
    }
  }
}

const closeLightbox = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause()
    isPlaying.value = false
  }
  lightboxItem.value = null
  document.body.style.overflow = ''
}

const navigateGallery = async (direction) => {
  const newIndex = currentLightboxIndex.value + direction
  if (newIndex >= 0 && newIndex < displayItems.value.length) {
    if (videoPlayer.value) {
      videoPlayer.value.pause()
      isPlaying.value = false
    }
    
    currentLightboxIndex.value = newIndex
    lightboxItem.value = displayItems.value[newIndex]
    
    if (displayItems.value[newIndex].type === 'video') {
      await nextTick()
      if (videoPlayer.value) {
        videoPlayer.value.play()
        isPlaying.value = true
      }
    }
  }
}

const togglePlayPause = () => {
  if (!videoPlayer.value) return
  
  if (isPlaying.value) {
    videoPlayer.value.pause()
  } else {
    videoPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const updateProgress = () => {
  if (!videoPlayer.value) return
  const current = videoPlayer.value.currentTime
  const total = videoPlayer.value.duration
  if (total) {
    progress.value = (current / total) * 100
  }
}

const onVideoLoaded = () => {
  // Video loaded
}

// Keyboard navigation
const handleKeyboard = (event) => {
  if (!lightboxItem.value) return
  
  switch(event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      navigateGallery(-1)
      break
    case 'ArrowRight':
      navigateGallery(1)
      break
  }
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

onMounted(() => {
  // Add keyboard listener
  window.addEventListener('keydown', handleKeyboard)
  
  // Animate gallery items on mount
  gsap.set('.gallery-item', { opacity: 0, y: 30, scale: 0.9 })
  gsap.set('.view-all-container', { opacity: 0, y: 20 })
  
  gsap.to('.gallery-item', {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    delay: 0.2
  })
  
  gsap.to('.view-all-container', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 1
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
})
</script>

<style scoped>
.compact-gallery {
  width: 100%;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 280px;
}

.gallery-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.media-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-preview,
.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .video-preview,
.gallery-item:hover .image-preview {
  transform: scale(1.1);
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

.gallery-item:hover .overlay {
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
  line-height: 1.2;
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
  width: 50px;
  height: 50px;
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

.gallery-item:hover .play-icon {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--color-accent);
  color: white;
}

.view-all-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.view-all-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.view-all-btn:hover::before {
  left: 100%;
}

.view-all-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.view-all-btn:hover .btn-icon {
  transform: translateX(4px);
}

.btn-icon svg {
  width: 100%;
  height: 100%;
}

/* Transitions */
.gallery-item-enter-active,
.gallery-item-leave-active {
  transition: all 0.4s ease;
}

.gallery-item-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.gallery-item-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }
  
  .gallery-item {
    height: 250px;
  }
  
  .view-all-container {
    margin-top: 40px;
  }
  
  .view-all-btn {
    padding: 14px 28px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .gallery-item {
    height: 220px;
  }
  
  /* Disable hover effects on mobile */
  .gallery-item:hover {
    transform: none;
  }
  
  .gallery-item:hover .video-preview,
  .gallery-item:hover .image-preview {
    transform: none;
  }
  
  .overlay {
    opacity: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
  }
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
}

.lightbox-content {
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-close svg {
  width: 20px;
  height: 20px;
}

.media-display {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.media-info {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.media-info h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.media-info .category {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}

.actions {
  margin-top: auto;
}

.view-portfolio-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-portfolio-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(230, 57, 70, 0.4);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  left: -60px;
  right: -60px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.nav-btn {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  backdrop-filter: blur(10px);
}

.nav-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-btn svg {
  width: 24px;
  height: 24px;
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Responsive Lightbox */
@media (max-width: 768px) {
  .lightbox-content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: 20px;
    width: 95%;
    height: 95%;
  }
  
  .media-info {
    padding: 20px;
    max-height: 200px;
    overflow-y: auto;
  }
  
  .lightbox-nav {
    left: 10px;
    right: 10px;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  
  .nav-btn svg {
    width: 20px;
    height: 20px;
  }
}
</style>