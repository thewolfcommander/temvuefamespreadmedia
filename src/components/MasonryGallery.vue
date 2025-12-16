<template>
  <div class="masonry-container">
    <!-- Category Filters -->
    <div class="filters-container">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="['filter-btn', { active: activeCategory === category }]"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <!-- Masonry Grid -->
    <div class="masonry-grid" ref="masonryGrid">
      <TransitionGroup name="masonry-item">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="item.id"
          class="masonry-item"
          @click="openLightbox(item, index)"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div class="media-wrapper">
            <!-- Show video preview -->
            <video
              v-if="item.type === 'video'"
              :src="item.src"
              :poster="item.thumbnail"
              muted
              loop
              preload="metadata"
              class="video-preview"
              @mouseenter="playPreview"
              @mouseleave="pausePreview"
              @loadeddata="onVideoLoaded"
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
                <h3>{{ item.title }}</h3>
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

    <!-- Lightbox -->
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
                :style="{ transform: `scale(${zoomLevel})` }"
                @wheel="handleZoom"
                class="zoomable-image"
              >
              <div v-else class="video-container">
                <video 
                  ref="videoPlayer"
                  :src="lightboxItem.src" 
                  @click="togglePlayPause"
                  @timeupdate="updateProgress"
                  @loadedmetadata="onVideoLoaded"
                  class="lightbox-video"
                ></video>
                
                <!-- Custom Reel Controls -->
                <div class="reel-controls">
                  <!-- Play/Pause Button -->
                  <button class="control-btn play-pause" @click="togglePlayPause">
                    <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"/>
                      <rect x="14" y="4" width="4" height="16"/>
                    </svg>
                  </button>
                  
                  <!-- Progress Bar -->
                  <div class="progress-container" @click="seekVideo">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: progress + '%' }"></div>
                      <div class="progress-handle" :style="{ left: progress + '%' }"></div>
                    </div>
                    <span class="time-display">{{ currentTime }} / {{ duration }}</span>
                  </div>
                  
                  <!-- Volume Control -->
                  <div class="volume-control">
                    <button class="control-btn volume-btn" @click="toggleMute">
                      <svg v-if="!isMuted" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                      </svg>
                      <svg v-else viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    </button>
                    <input 
                      type="range" 
                      class="volume-slider"
                      min="0" 
                      max="100" 
                      v-model="volume"
                      @input="changeVolume"
                    >
                  </div>
                  
                  <!-- Fullscreen Button -->
                  <button class="control-btn fullscreen-btn" @click="toggleFullscreen">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Side Panel (X-ray style) -->
            <div class="side-panel">
              <h2>{{ lightboxItem.title }}</h2>
              <div class="meta-info">
                <span class="category-tag">{{ lightboxItem.category }}</span>
                <span class="date">{{ lightboxItem.date }}</span>
              </div>
              <p class="description">{{ lightboxItem.description }}</p>
              
              <div class="technical-details" v-if="lightboxItem.details">
                <h3>Technical Details</h3>
                <ul>
                  <li v-for="(value, key) in lightboxItem.details" :key="key">
                    <span class="detail-key">{{ key }}:</span>
                    <span class="detail-value">{{ value }}</span>
                  </li>
                </ul>
              </div>

              <div class="tags" v-if="lightboxItem.tags">
                <span v-for="tag in lightboxItem.tags" :key="tag" class="tag">
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Gallery Navigation -->
            <div class="gallery-nav">
              <button 
                class="nav-btn prev" 
                @click.stop="navigateGallery(-1)"
                :disabled="currentLightboxIndex === 0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div class="thumbnail-strip">
                <div 
                  v-for="(item, index) in filteredItems" 
                  :key="item.id"
                  :class="['thumb', { active: index === currentLightboxIndex }]"
                  @click.stop="openLightbox(item, index)"
                >
                  <video v-if="item.type === 'video'" :src="item.src" :poster="item.thumbnail" muted preload="metadata" class="thumb-video"></video>
                  <img v-else :src="item.src" :alt="item.title" class="thumb-image">
                </div>
              </div>

              <button 
                class="nav-btn next" 
                @click.stop="navigateGallery(1)"
                :disabled="currentLightboxIndex === filteredItems.length - 1"
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'

// Video player refs and states
const videoPlayer = ref(null)
const isPlaying = ref(false)
const isMuted = ref(false)
const progress = ref(0)
const currentTime = ref('0:00')
const duration = ref('0:00')
const volume = ref(100)

// Video links organized by category
const videoLinks = {
  'Animated Video': [
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Animated%20video/(13).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Animated%20video/(16).MOV',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Animated%20video/(6).mp4'
  ],
  'Brand Promotion': [
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Brand%20Promotion%20Videos/(3).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Brand%20Promotion%20Videos/(5).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Brand%20Promotion%20Videos/(9).mp4'
  ],
  'Event Video': [
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Event%20Video/(10)%20(1).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Event%20Video/(15)%20(1).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Event%20Video/(18).mp4'
  ],
  'Talking Head': [
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Taliking%20Head%20Videos/(11)(1).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Taliking%20Head%20Videos/(11).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/Taliking%20Head%20Videos/(14).mp4'
  ],
  'UGC Video': [
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/UGC%20Video/(17).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/UGC%20Video/(7).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/UGC%20Video/(8).mp4'
  ],
  'Fashion Video': [
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/fashion%20video/(19).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/fashion%20video/(20).mp4',
    'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/Videos/fashion%20video/(21).mp4'
  ]
}

// Media items with video categories
const mediaItems = ref([
  // Animated Videos
  {
    id: 1,
    type: 'video',
    title: 'Animated Brand Story',
    category: 'Animated Video',
    src: videoLinks['Animated Video'][0],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/animated-brand-story.png',
    date: 'March 2024',
    description: 'Engaging animated storytelling that brings brand narratives to life with creative motion graphics.',
    details: {
      'Duration': '2:30',
      'Resolution': '4K',
      'Animation': '2D/3D',
      'Software': 'After Effects'
    },
    tags: ['animation', 'branding', 'motion']
  },
  {
    id: 2,
    type: 'video',
    title: 'Product Animation Showcase',
    category: 'Animated Video',
    src: videoLinks['Animated Video'][1],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/animated-brand-story-2.png',
    date: 'March 2024',
    description: '3D product animation highlighting features and benefits.',
    details: {
      'Duration': '1:45',
      'Resolution': '4K',
      'FPS': '60',
      'Render': 'Cinema 4D'
    },
    tags: ['3d', 'product', 'animation']
  },
  {
    id: 3,
    type: 'video',
    title: 'Motion Graphics Excellence',
    category: 'Animated Video',
    src: videoLinks['Animated Video'][2],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/animated-brand-story-3.png',
    date: 'February 2024',
    description: 'Premium brand promotion video showcasing company values and vision.',
    details: {
      'Duration': '3:00',
      'Resolution': '4K',
      'Camera': 'RED Komodo',
      'Director': 'John Smith'
    },
    tags: ['corporate', 'branding', 'promotion']
  },
  // Brand Promotion Videos
  {
    id: 4,
    type: 'video',
    title: 'Corporate Brand Film',
    category: 'Brand Promotion',
    src: videoLinks['Brand Promotion'][0],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/corporate-brand-film.png',
    date: 'February 2024',
    description: 'Dynamic product launch video with cinematic storytelling.',
    details: {
      'Duration': '1:30',
      'Resolution': '4K HDR',
      'Style': 'Cinematic',
      'Format': 'MP4'
    },
    tags: ['launch', 'product', 'campaign']
  },
  {
    id: 5,
    type: 'video',
    title: 'Product Launch Campaign',
    category: 'Brand Promotion',
    src: videoLinks['Brand Promotion'][1],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/product-launch-campaign.png',
    date: 'January 2024',
    description: 'Comprehensive event coverage capturing key moments and highlights.',
    details: {
      'Duration': '5:00',
      'Coverage': 'Multi-cam',
      'Attendees': '500+',
      'Location': 'Convention Center'
    },
    tags: ['conference', 'event', 'corporate']
  },
  {
    id: 6,
    type: 'video',
    title: 'Brand Story Showcase',
    category: 'Brand Promotion',
    src: videoLinks['Brand Promotion'][2],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/brand-story-showcase.png',
    date: 'January 2024',
    description: 'Live event coverage of exclusive product launch.',
    details: {
      'Duration': '4:00',
      'Type': 'Live Stream',
      'Cameras': '4',
      'Audience': 'Global'
    },
    tags: ['launch', 'live', 'event']
  },
  // Event Videos
  {
    id: 7,
    type: 'video',
    title: 'Annual Conference Highlights',
    category: 'Event Video',
    src: videoLinks['Event Video'][0],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/annual-conference-highlights.png',
    date: 'December 2023',
    description: 'Professional interview setup with industry leaders sharing insights.',
    details: {
      'Duration': '10:00',
      'Setup': '3-point lighting',
      'Audio': 'Lav + Boom',
      'Background': 'Office'
    },
    tags: ['interview', 'corporate', 'leadership']
  },
  {
    id: 8,
    type: 'video',
    title: 'Product Launch Event',
    category: 'Event Video',
    src: videoLinks['Event Video'][1],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/product-launch-event.png',
    date: 'December 2023',
    description: 'Client testimonials and expert opinions.',
    details: {
      'Duration': '3:00',
      'Format': 'Interview',
      'Location': 'Studio',
      'Lighting': 'Softbox'
    },
    tags: ['testimonial', 'interview', 'client']
  },
  {
    id: 9,
    type: 'video',
    title: 'Grand Opening Ceremony',
    category: 'Event Video',
    src: videoLinks['Event Video'][2],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/grand-opening-ceremony.png',
    date: 'November 2023',
    description: 'Authentic user-generated content showcasing real customer experiences.',
    details: {
      'Duration': '2:00',
      'Contributors': '20+',
      'Platform': 'Social Media',
      'Reach': '1M+'
    },
    tags: ['ugc', 'community', 'social']
  },
  // Talking Head Videos
  {
    id: 10,
    type: 'video',
    title: 'CEO Interview Series',
    category: 'Talking Head',
    src: videoLinks['Talking Head'][0],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/industry-leader-insight.png',
    date: 'November 2023',
    description: 'Compilation of authentic customer reviews and experiences.',
    details: {
      'Duration': '3:30',
      'Reviews': '50+',
      'Rating': '4.8/5',
      'Platform': 'Multi-channel'
    },
    tags: ['reviews', 'customers', 'ugc']
  },
  // {
  //   id: 11,
  //   type: 'video',
  //   title: 'Expert Testimonials',
  //   category: 'Talking Head',
  //   src: videoLinks['Talking Head'][1],
  //   thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/expert-testimonial.png',
  //   date: 'October 2023',
  //   description: 'High-fashion runway show featuring latest collections.',
  //   details: {
  //     'Duration': '8:00',
  //     'Event': 'Fashion Week',
  //     'Designer': 'Various',
  //     'Season': 'Spring/Summer'
  //   },
  //   tags: ['fashion', 'runway', 'couture']
  // },
  {
    id: 12,
    type: 'video',
    title: 'Industry Leader Insights',
    category: 'Talking Head',
    src: videoLinks['Talking Head'][2],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/expert-testimonial.png',
    date: 'October 2023',
    description: 'Artistic fashion film with editorial styling.',
    details: {
      'Duration': '4:00',
      'Style': 'Editorial',
      'Cinematography': 'Cinematic',
      'Location': 'Studio & Urban'
    },
    tags: ['editorial', 'fashion', 'artistic']
  },
  // UGC Videos
  {
    id: 13,
    type: 'video',
    title: 'Community Stories',
    category: 'UGC Video',
    src: videoLinks['UGC Video'][0],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/community-stories.png',
    date: 'November 2023',
    description: 'Authentic user-generated content showcasing real customer experiences.',
    details: {
      'Duration': '2:00',
      'Contributors': '20+',
      'Platform': 'Social Media',
      'Reach': '1M+'
    },
    tags: ['ugc', 'community', 'social']
  },
  {
    id: 14,
    type: 'video',
    title: 'Customer Reviews Compilation',
    category: 'UGC Video',
    src: videoLinks['UGC Video'][1],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/customer-reviews-compilation.png',
    date: 'November 2023',
    description: 'Compilation of authentic customer reviews and experiences.',
    details: {
      'Duration': '3:30',
      'Reviews': '50+',
      'Rating': '4.8/5',
      'Platform': 'Multi-channel'
    },
    tags: ['reviews', 'customers', 'ugc']
  },
  {
    id: 15,
    type: 'video',
    title: 'User Success Stories',
    category: 'UGC Video',
    src: videoLinks['UGC Video'][2],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/user-success-stories.png',
    date: 'November 2023',
    description: 'Real users sharing their success stories and experiences.',
    details: {
      'Duration': '2:45',
      'Stories': '15+',
      'Engagement': 'High',
      'Platform': 'Instagram & TikTok'
    },
    tags: ['success', 'stories', 'ugc']
  },
  // Fashion Videos
  {
    id: 16,
    type: 'video',
    title: 'Fashion Week Runway',
    category: 'Fashion Video',
    src: videoLinks['Fashion Video'][0],
    thumbnail: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/thumbnails-new/fashion-week-runway.png',
    date: 'October 2023',
    description: 'High-fashion runway show featuring latest collections.',
    details: {
      'Duration': '8:00',
      'Event': 'Fashion Week',
      'Designer': 'Various',
      'Season': 'Spring/Summer'
    },
    tags: ['fashion', 'runway', 'couture']
  },
  {
    id: 17,
    type: 'video',
    title: 'Editorial Fashion Film',
    category: 'Fashion Video',
    src: videoLinks['Fashion Video'][1],
    date: 'October 2023',
    description: 'Artistic fashion film with editorial styling.',
    details: {
      'Duration': '4:00',
      'Style': 'Editorial',
      'Cinematography': 'Cinematic',
      'Location': 'Studio & Urban'
    },
    tags: ['editorial', 'fashion', 'artistic']
  },
  {
    id: 18,
    type: 'video',
    title: 'Luxury Brand Campaign',
    category: 'Fashion Video',
    src: videoLinks['Fashion Video'][2],
    date: 'October 2023',
    description: 'Luxury fashion brand campaign with high-end production.',
    details: {
      'Duration': '3:00',
      'Brand': 'Luxury Collection',
      'Production': 'High-end',
      'Director': 'Creative Team'
    },
    tags: ['luxury', 'brand', 'fashion']
  },
  // Photography - Brand Campaign Images
  {
    id: 19,
    type: 'image',
    title: 'Peach & Musk Brand Photography',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/peach&musk.jpg',
    date: 'August 2023',
    description: 'Professional brand photography showcasing Peach & Musk skincare products with elegant styling and lighting.',
    details: {
      'Camera': 'Canon EOS R5',
      'Lens': '85mm f/1.8',
      'Lighting': 'Studio Setup',
      'Style': 'Product Photography'
    },
    tags: ['brand', 'skincare', 'product']
  },
  {
    id: 20,
    type: 'image',
    title: 'Peach & Musk Product Showcase',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/peach&musk2.jpg',
    date: 'August 2023',
    description: 'Creative product photography highlighting the premium quality and aesthetic appeal of skincare products.',
    details: {
      'Camera': 'Canon EOS R5',
      'Lens': '50mm f/1.4',
      'Setup': 'Natural Light',
      'Post-Processing': 'Adobe Lightroom'
    },
    tags: ['product', 'beauty', 'commercial']
  },
  {
    id: 21,
    type: 'image',
    title: 'Beauty Product Campaign',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/peach&musk_3.jpg',
    date: 'August 2023',
    description: 'Sophisticated beauty photography capturing the essence of luxury skincare with artistic composition.',
    details: {
      'Camera': 'Sony A7R IV',
      'Lens': '90mm Macro',
      'Technique': 'Focus Stacking',
      'Retouching': 'High-end'
    },
    tags: ['beauty', 'luxury', 'macro']
  },
  {
    id: 22,
    type: 'image',
    title: 'Skincare Brand Visual',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/peach&musk_4.jpg',
    date: 'August 2023',
    description: 'Clean and minimalist product photography emphasizing the natural ingredients and premium packaging.',
    details: {
      'Camera': 'Nikon Z7II',
      'Lens': '105mm f/2.8',
      'Background': 'Seamless White',
      'Style': 'Minimalist'
    },
    tags: ['minimalist', 'clean', 'branding']
  },
  // Photography - Portrait & Lifestyle Shoots
  {
    id: 23,
    type: 'image',
    title: 'Professional Portrait Session',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_1.JPG',
    date: 'July 2023',
    description: 'Dynamic portrait photography capturing personality and professionalism for corporate branding.',
    details: {
      'Camera': 'Canon 5D Mark IV',
      'Lens': '85mm f/1.2',
      'Lighting': '3-Point Setup',
      'Location': 'Studio'
    },
    tags: ['portrait', 'professional', 'corporate']
  },
  {
    id: 24,
    type: 'image',
    title: 'Creative Portrait Study',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_2.JPG',
    date: 'July 2023',
    description: 'Artistic portrait photography with creative lighting and composition for personal branding.',
    details: {
      'Camera': 'Sony A7 III',
      'Lens': '135mm f/1.8',
      'Technique': 'Natural Light',
      'Processing': 'Film Emulation'
    },
    tags: ['portrait', 'artistic', 'natural']
  },
  {
    id: 25,
    type: 'image',
    title: 'Lifestyle Photography',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_3.JPG',
    date: 'July 2023',
    description: 'Lifestyle photography capturing authentic moments and expressions for brand storytelling.',
    details: {
      'Camera': 'Fujifilm X-T4',
      'Lens': '56mm f/1.2',
      'Style': 'Documentary',
      'Color Grading': 'Warm Tones'
    },
    tags: ['lifestyle', 'authentic', 'storytelling']
  },
  {
    id: 26,
    type: 'image',
    title: 'Fashion Portrait Series',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_4.JPG',
    date: 'July 2023',
    description: 'High-fashion portrait photography with dramatic lighting and sophisticated styling.',
    details: {
      'Camera': 'Canon EOS R6',
      'Lens': '70-200mm f/2.8',
      'Lighting': 'Dramatic Setup',
      'Styling': 'High Fashion'
    },
    tags: ['fashion', 'dramatic', 'editorial']
  },
  {
    id: 27,
    type: 'image',
    title: 'Commercial Portrait Work',
    category: 'Photography',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/shoot_image_5.JPG',
    date: 'July 2023',
    description: 'Commercial photography focused on brand representation and professional image building.',
    details: {
      'Camera': 'Nikon D850',
      'Lens': '105mm f/1.4',
      'Setup': 'Corporate Style',
      'Delivery': 'High Resolution'
    },
    tags: ['commercial', 'branding', 'professional']
  },
  // Graphic Design Category
  {
    id: 28,
    type: 'image',
    title: 'Creative Brand Design',
    category: 'Graphic Design',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/(5).jpg',
    date: 'September 2023',
    description: 'Innovative graphic design showcasing modern brand identity and visual communication.',
    details: {
      'Software': 'Adobe Creative Suite',
      'Type': 'Brand Design',
      'Format': 'Digital',
      'Resolution': 'Print Ready'
    },
    tags: ['design', 'branding', 'creative']
  },
  {
    id: 29,
    type: 'image',
    title: 'Digital Marketing Graphics',
    category: 'Graphic Design',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/(6).PNG',
    date: 'September 2023',
    description: 'Eye-catching digital graphics designed for social media and marketing campaigns.',
    details: {
      'Software': 'Adobe Photoshop',
      'Purpose': 'Social Media',
      'Dimensions': 'Multi-format',
      'Style': 'Modern'
    },
    tags: ['digital', 'marketing', 'social']
  },
  {
    id: 30,
    type: 'image',
    title: 'Visual Identity System',
    category: 'Graphic Design',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/IMG_4269.PNG',
    date: 'September 2023',
    description: 'Comprehensive visual identity system including logo, typography, and brand guidelines.',
    details: {
      'Software': 'Adobe Illustrator',
      'Type': 'Brand Identity',
      'Components': 'Logo, Typography, Colors',
      'Application': 'Cross-platform'
    },
    tags: ['identity', 'logo', 'guidelines']
  },
  {
    id: 31,
    type: 'image',
    title: 'Campaign Visual Design',
    category: 'Graphic Design',
    src: 'https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/IMG_4276.PNG',
    date: 'September 2023',
    description: 'Strategic campaign visuals designed to engage audiences and drive brand awareness.',
    details: {
      'Software': 'Adobe InDesign',
      'Campaign': 'Multi-channel',
      'Target': 'B2C',
      'Deliverables': 'Print & Digital'
    },
    tags: ['campaign', 'advertising', 'visual']
  }
])

const categories = ref(['All', 'Animated Video', 'Brand Promotion', 'Event Video', 'Talking Head', 'UGC Video', 'Fashion Video', 'Photography', 'Graphic Design'])
const activeCategory = ref('All')
const lightboxItem = ref(null)
const currentLightboxIndex = ref(0)
const zoomLevel = ref(1)
const masonryGrid = ref(null)

const filteredItems = computed(() => {
  console.log('Computing filtered items...')
  console.log('Active category:', activeCategory.value)
  console.log('Media items count:', mediaItems.value.length)
  
  if (activeCategory.value === 'All') {
    console.log('Returning all items:', mediaItems.value.length)
    return mediaItems.value
  }
  
  const filtered = mediaItems.value.filter(item => item.category === activeCategory.value)
  console.log('Filtered items count:', filtered.length)
  return filtered
})

const openLightbox = async (item, index) => {
  lightboxItem.value = item
  currentLightboxIndex.value = index
  zoomLevel.value = 1
  document.body.style.overflow = 'hidden'
  
  // Reset video states
  isPlaying.value = false
  progress.value = 0
  currentTime.value = '0:00'
  
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
  // Pause video before closing
  if (videoPlayer.value) {
    videoPlayer.value.pause()
    isPlaying.value = false
  }
  lightboxItem.value = null
  document.body.style.overflow = ''
}

const navigateGallery = async (direction) => {
  const newIndex = currentLightboxIndex.value + direction
  if (newIndex >= 0 && newIndex < filteredItems.value.length) {
    // Pause current video
    if (videoPlayer.value) {
      videoPlayer.value.pause()
      isPlaying.value = false
    }
    
    currentLightboxIndex.value = newIndex
    lightboxItem.value = filteredItems.value[newIndex]
    zoomLevel.value = 1
    
    // Auto-play new video
    if (filteredItems.value[newIndex].type === 'video') {
      await nextTick()
      if (videoPlayer.value) {
        videoPlayer.value.play()
        isPlaying.value = true
      }
    }
  }
}

const handleZoom = (event) => {
  event.preventDefault()
  const delta = event.deltaY > 0 ? -0.1 : 0.1
  zoomLevel.value = Math.max(0.5, Math.min(3, zoomLevel.value + delta))
}

// Video control functions
const togglePlayPause = () => {
  if (!videoPlayer.value) return
  
  if (isPlaying.value) {
    videoPlayer.value.pause()
  } else {
    videoPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const toggleMute = () => {
  if (!videoPlayer.value) return
  
  videoPlayer.value.muted = !videoPlayer.value.muted
  isMuted.value = videoPlayer.value.muted
}

const changeVolume = () => {
  if (!videoPlayer.value) return
  
  videoPlayer.value.volume = volume.value / 100
  if (volume.value === 0) {
    isMuted.value = true
  } else {
    isMuted.value = false
    videoPlayer.value.muted = false
  }
}

const updateProgress = () => {
  if (!videoPlayer.value) return
  
  const current = videoPlayer.value.currentTime
  const total = videoPlayer.value.duration
  
  if (total) {
    progress.value = (current / total) * 100
    currentTime.value = formatTime(current)
  }
}

const onVideoLoaded = () => {
  if (!videoPlayer.value) return
  
  duration.value = formatTime(videoPlayer.value.duration)
}

const seekVideo = (event) => {
  if (!videoPlayer.value) return
  
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = (event.clientX - rect.left) / rect.width
  videoPlayer.value.currentTime = percent * videoPlayer.value.duration
}

const toggleFullscreen = () => {
  const container = document.querySelector('.lightbox')
  if (!document.fullscreenElement) {
    container.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
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

// Video preview functions
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
  console.log('MasonryGallery mounted')
  console.log('Media items on mount:', mediaItems.value.length)
  
  window.addEventListener('keydown', handleKeyboard)
  
  // Delay animation to ensure DOM is ready
  setTimeout(() => {
    console.log('Starting GSAP animation')
    const items = document.querySelectorAll('.masonry-item')
    console.log('Found masonry items:', items.length)
    
    if (items.length > 0) {
      gsap.fromTo('.masonry-item', 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          onComplete: () => {
            console.log('GSAP animation complete')
          }
        }
      )
    }
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
})
</script>

<style scoped>
.masonry-container {
  padding: 0 20px 40px;
  background: var(--color-black);
  min-height: 100vh;
  z-index: 999;
}

/* Filters */
.filters-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  padding: 20px 0;
  /* background: linear-gradient(180deg, var(--color-black) 0%, rgba(0, 0, 0, 0.8) 100%); */
  position: sticky;
  top: 80px;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.filter-btn {
  padding: 10px 24px;
  background: var(--color-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.filter-btn:hover {
  background: var(--color-dark);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.filter-btn.active {
  background: var(--color-dark);
  color: white;
  border-color: var(--color-accent);
  box-shadow: 0 8px 30px rgba(230, 57, 70, 0.3);
}

/* Masonry Grid */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
}

.masonry-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 320px;
  height: 400px;
}

.masonry-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
}

.media-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
}

.video-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.masonry-item:hover .video-preview,
.masonry-item:hover .image-preview {
  transform: scale(1.1);
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.masonry-item:hover .overlay {
  opacity: 1;
}

.overlay-content {
  margin-top: auto;
}

.overlay-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: white;
}

.overlay-content p {
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 500;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: var(--color-dark);;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-black);
  transition: all 0.3s ease;
}

.play-icon svg {
  width: 24px;
  height: 24px;
  margin-left: 4px;
}

.masonry-item:hover .play-icon {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--color-dark);;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

.lightbox-content {
  position: relative;
  width: 90%;
  height: 90%;
  max-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  max-width: 1600px;
}

.lightbox-close {
  position: absolute;
  top: -40px;
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

/* Media Display */
.media-display {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
}

.zoomable-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: zoom-in;
  transition: transform 0.3s ease;
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
  cursor: pointer;
}

/* Custom Reel Controls */
.reel-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-container:hover .reel-controls {
  opacity: 1;
}

.control-btn {
  background: var(--color-dark);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.control-btn svg {
  width: 20px;
  height: 20px;
}

.play-pause {
  background: var(--color-black);
  border-color: var(--color-accent);
}

.play-pause:hover {
  background: var(--color-primary);
  opacity: 0.8;
}

/* Progress Bar */
.progress-container {
  flex: 1;
  position: relative;
  cursor: pointer;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: relative;
  margin-bottom: 5px;
}

.progress-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: 2px;
  position: relative;
  transition: width 0.1s linear;
}

.progress-handle {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

.progress-container:hover .progress-handle {
  transform: translate(-50%, -50%) scale(1.2);
}

.time-display {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* Volume Control */
.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.volume-slider {
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.volume-control:hover .volume-slider {
  opacity: 1;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

/* Side Panel */
.side-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  overflow-y: auto;
  backdrop-filter: blur(10px);
}

.side-panel h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
}

.meta-info {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.category-tag {
  padding: 6px 12px;
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.date {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  font-size: 0.85rem;
}

.description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 30px;
}

.technical-details {
  margin-bottom: 30px;
}

.technical-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
}

.technical-details ul {
  list-style: none;
  padding: 0;
}

.technical-details li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.detail-key {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.detail-value {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Gallery Navigation */
.gallery-nav {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-btn {
  width: 40px;
  height: 40px;
  background: var(--color-dark);;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: var(--color-dark);;
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-btn svg {
  width: 20px;
  height: 20px;
}

.thumbnail-strip {
  display: flex;
  gap: 8px;
  max-width: 400px;
  overflow-x: auto;
  padding: 4px;
}

.thumbnail-strip::-webkit-scrollbar {
  height: 4px;
}

.thumbnail-strip::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.thumbnail-strip::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.thumb.active {
  border-color: var(--color-accent);
  transform: scale(1.1);
}

.thumb-video,
.thumb-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Transitions */
.masonry-item-enter-active,
.masonry-item-leave-active {
  transition: all 0.4s ease;
}

.masonry-item-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.masonry-item-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .lightbox-content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
  
  .side-panel {
    max-height: 300px;
  }
}

@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fit, 280px);
    gap: 15px;
  }
  
  .masonry-item {
    width: 280px;
    height: 350px;
  }
  
  .filters-container {
    top: 60px;
  }
  
  .lightbox-content {
    width: 95%;
    height: 95%;
    gap: 20px;
  }
  
  .gallery-nav {
    bottom: -60px;
    padding: 8px;
  }
  
  .thumbnail-strip {
    max-width: 200px;
  }
  
  .thumb {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .masonry-grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  
  .masonry-item {
    width: 280px;
    height: 350px;
  }
}
</style>