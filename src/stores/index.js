import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentSlide: 0,
    isMenuOpen: false,
    loading: false,
    siteData: {
      title: 'Fame Spread Media',
      phone: '+91 9871521144',
      email: 'info@famespreadmedia.com'
    },
    services: [
      {
        id: 1,
        name: 'Social Media',
        description: 'Elevate Your Digital Presence',
        icon: 'social-media'
      },
      {
        id: 2,
        name: 'Website',
        description: 'Crafting Your Online Identity',
        icon: 'website'
      },
      {
        id: 3,
        name: 'Packaging Design',
        description: 'Unwrap the Art of Packaging',
        icon: 'packaging'
      },
      {
        id: 4,
        name: 'Brand Design',
        description: 'Unleashing the Power of Your Brand',
        icon: 'branding'
      },
      {
        id: 5,
        name: 'Logo Design',
        description: 'Unveil Your Brand\'s Essence',
        icon: 'logo'
      }
    ]
  }),

  getters: {
    getCurrentService: (state) => {
      return state.services[state.currentSlide] || state.services[0]
    },
    getServiceById: (state) => {
      return (id) => state.services.find(service => service.id === id)
    }
  },

  actions: {
    setCurrentSlide(index) {
      this.currentSlide = index
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    setLoading(status) {
      this.loading = status
    },
    updateSiteData(data) {
      this.siteData = { ...this.siteData, ...data }
    }
  }
})