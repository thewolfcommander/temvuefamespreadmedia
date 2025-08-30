<template>
  <div class="nav_toggle_wrapper">
    <a href="#">
      <img :src="logo" class="mini-logo" alt="logo" @click="closeNav" />
    </a>

    <div class="d-block d-md-none mob_number_box">
      <a class="text-decoration-none text-white" href="tel:9711431917">
        <i class="ri-phone-fill"></i> 9711431917
      </a>
    </div>

    <div type="button" name="btn_nav" class="nav_toggle" @click="toggleNav">
      <div class="open-close-btn">
        <div id="nav-icon2" :class="{ open: isNavOpen }">
          <span class="toggle1"></span>
          <span class="toggle2 second"></span>
          <span></span>
          <span></span>
          <span class="toggle5"></span>
          <span class="toggle2 second"></span>
        </div>
      </div>
    </div>

    <div class="h-social-icon d-none d-md-block">
      <a href="https://www.facebook.com/" class="text-decoration-none" target="_blank">
        <i class="ri-facebook-fill fill-anime"></i>
      </a>
      <a href="https://twitter.com/" class="text-decoration-none" target="_blank">
        <i class="ri-twitter-x-fill fill-anime"></i>
      </a>
      <a href="https://www.linkedin.com/company/" class="text-decoration-none" target="_blank">
        <i class="ri-linkedin-fill fill-anime"></i>
      </a>
      <a href="https://www.instagram.com/" class="text-decoration-none" target="_blank">
        <i class="ri-instagram-line fill-anime"></i>
      </a>
    </div>
  </div>

  <nav id="mb_nav" class="nav" :class="{ active: isNavOpen }">
    <div class="container ps-lg-5">
      <li class="logo">
        <a class="nav__link mb-5 d-none d-md-block" href="#" @click="closeNav">
          <img :src="fullLogo" class="img-fluid" alt="logo" style="width: 250px" />
        </a>
      </li>
      <div class="row">
        <div class="col-lg-4">
          <ul>
            <li><a class="nav__link" href="#" @click="closeNav">Home</a></li>
            <li><a class="nav__link" @click="scrollToSection('who-we-are')">About Us</a></li>
            <li><a class="nav__link" @click="scrollToSection('founders-story')">Founder Story</a></li>
            <li><a class="nav__link" @click="scrollToSection('testimonials')">Testimonials</a></li>
            <li><a class="nav__link" @click="scrollToSection('contact-us')">Contact Us</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <ul>
            <li><a class="nav__link" @click="scrollToSection('social-media-management')">Social Media Management</a>
            </li>
            <li><a class="nav__link" @click="scrollToSection('photography-and-videography')">Content Creation</a></li>
            <li><a class="nav__link" @click="scrollToSection('search-engine-optimization-seo')">SEO</a></li>
            <li><a class="nav__link" @click="scrollToSection('website-development')">Website Development</a></li>
            <li><a class="nav__link" @click="scrollToSection('ad-manager')">AD Manager</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <ul>
            <li>
              <div class="nav__link nav_link_text">
                <h3 class="d-none d-md-none d-lg-block">Want to<br /> Elevate Your Brand and Expand Your Reach?</h3>
                <p class="d-none d-md-none d-lg-block">
                  Tell us about your project. Elevate Your Brand, Expand Your Reach - Your Success, Our Strategy. Boost
                  Your Online Presence with Our Expert Digital Marketing Agency Services.
                </p>
                <p>
                  <a href="mailto:famespreadmedia@gmail.com" class="nav__link call-link2 text-lowercase"
                    style="font-size: 16px">
                    famespreadmedia@gmail.com
                  </a>
                </p>
                <div>
                  <a href="tel:9711431917" class="text-white call-link anime">
                    9711431917
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 1. Import your logo asset from the assets folder
import logo from '../assets/logo.svg';
import fullLogo from '../assets/fullLogo.png';

// 2. Create a "reactive" variable to track the menu's open/closed state
const isNavOpen = ref(false);
const router = useRouter();

// 3. Create functions to control the state, replacing the old JavaScript
function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
  // Disable/enable body scroll
  if (isNavOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

function closeNav() {
  isNavOpen.value = false;
  // Re-enable body scroll when closing nav
  document.body.style.overflow = 'auto';
}

// Define which sections are on which pages
const sectionPages = {
  'founders-story': '/about',
  'who-we-are': '/about',
  'testimonials': '/',
  'contact-us': '/',
  'social-media-management': '/',
  'photography-and-videography': '/',
  'search-engine-optimization-seo': '/',
  'website-development': '/',
  'ad-manager': '/'
};

function scrollToSection(sectionId) {
  closeNav(); // Close the navigation first

  const targetPage = sectionPages[sectionId] || '/';
  const currentPath = router.currentRoute.value.path;

  setTimeout(() => {
    // If we're already on the correct page, just scroll
    if (currentPath === targetPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to the correct page first, then scroll
      router.push(targetPage).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          } else {
            console.log(`Section with ID '${sectionId}' not found on page ${targetPage}`);
          }
        }, 500); // Wait for page to load
      });
    }
  }, 100); // Small delay to allow nav to close
}

// Alternative function for navigation that always goes to home first (for home page sections)
function navigateToSection(sectionId) {
  closeNav();

  // Always navigate to home page first
  router.push('/').then(() => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log(`Section with ID '${sectionId}' not found even on home page`);
      }
    }, 300);
  });
}
</script>

<style scoped>
/* All of the CSS you provided that is SPECIFIC to the nav goes here, ensuring it won't conflict with other components. */

.nav_toggle_wrapper {
  position: fixed;
  width: 70px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.863);
  z-index: 99999999;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.nav_toggle_wrapper .mini-logo {
  width: 50px;
  height: auto;
  margin-top: 20px;
}

.mob_number_box {
  display: none;
}

.mob_number_box a {
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}

/* Hamburger Menu Icon */
.nav_toggle {
  position: relative;
  z-index: 99999;
  display: inline-block;
  margin: 15px;
  background-color: transparent;
  padding: 5px;
  text-align: center;
  font-weight: 700;
  line-height: 18px;
  border: none;
  transition: 1s;
  outline: 0;
  color: #fff;
  cursor: pointer;
}

#nav-icon2 {
  width: 44px;
  height: 45px;
  position: relative;
  transform: rotate(0);
  transition: 0.5s ease-in-out;
}

#nav-icon2 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  background-color: #fff;
  opacity: 1;
  transform: rotate(0);
  transition: 0.25s ease-in-out;
}

#nav-icon2 span:nth-child(2n) {
  left: 47%;
  border-radius: 0 9px 9px 0;
}

#nav-icon2 span:nth-child(odd) {
  left: 0;
  border-radius: 9px 0 0 9px;
}

#nav-icon2 span:first-child,
#nav-icon2 span:nth-child(2) {
  top: 0;
}

#nav-icon2 span:nth-child(3),
#nav-icon2 span:nth-child(4) {
  top: 14px;
}

#nav-icon2 span:nth-child(5),
#nav-icon2 span:nth-child(6) {
  top: 29px;
}

/* Hamburger Animation */
#nav-icon2.open span:first-child,
#nav-icon2.open span:nth-child(6) {
  transform: rotate(45deg);
}

#nav-icon2.open span:nth-child(2),
#nav-icon2.open span:nth-child(5) {
  transform: rotate(-45deg);
}

#nav-icon2.open span:first-child {
  left: 5px;
  top: 9px;
}

#nav-icon2.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 9px;
}

#nav-icon2.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(5) {
  left: 5px;
  top: 21px;
}

#nav-icon2.open span:nth-child(6) {
  left: calc(50% - 6px);
  top: 20px;
}

/* Social Icons */
.h-social-icon {
  display: grid !important;
  grid-template-columns: 1fr !important;
  align-items: center;
  gap: 0.1rem !important;
  margin-bottom: 20px;
}

.h-social-icon a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 4px 0;
}

.fill-anime {
  color: var(--white);
  font-size: 20px;
  transition: var(--transition);
}

.fill-anime:hover {
  color: var(--primary);
}

/* Main Navigation */
.nav {
  z-index: 9999999;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
  display: flex;
  align-items: center;
  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;
}

.nav.active {
  transform: translateX(0);
}

.nav li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav li a {
  font-size: 25px;
  line-height: 1.8;
  color: #fff;
  transition: 0.7s ease-in-out;
  font-weight: 700;
  text-decoration: none;
  display: block;
  z-index: 1;
  background-image: linear-gradient(to right, var(--primary), 50%, #fff 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
}

.nav li a:hover {
  letter-spacing: 1px;
  transform: scale(1.08);
  background-position: 0;
}

.nav_link_text {
  transition: 0.3s;
  z-index: 9999;
  color: white;
}


/* Mobile Fixes Only */
@media (max-width: 768px) {
  .nav_toggle_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: var(--bg-dark);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }

  .nav_toggle_wrapper .mini-logo {
    width: 40px;
    margin: 0;
  }

  .mob_number_box {
    display: block !important;
    margin: 0;
  }

  .nav_toggle {
    margin: 0;
  }

  .h-social-icon {
    display: none !important;
  }

  .nav {
    transform: translateY(-100%);
  }

  .nav.active {
    transform: translateY(0);
  }
}
</style>