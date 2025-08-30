<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left Section: Logo and Description -->
      <div class="footer-left">
        <div class="footer-brand">
          <img src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/assets/FSM-logo/FSM-Trans-Logo.png" alt="Fame Spread Media"
            class="footer-logo" />
          <span class="footer-brand-name">Fame Spread Media</span>
        </div>
        <p class="footer-description">
          Every brand deserves fame.<br />
          Fame Spread Media is a Gurgaon-based, full-service marketing and creative agency built to help brands succeed in the digital age.
        </p>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
          <a href="#" aria-label="Twitter"><i class="ri-twitter-x-fill"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a>
          <a href="#" aria-label="Instagram"><i class="ri-instagram-fill"></i></a>
          <a href="#" aria-label="Pinterest"><i class="ri-pinterest-fill"></i></a>
          <a href="#" aria-label="YouTube"><i class="ri-youtube-fill"></i></a>
        </div>
      </div>

      <!-- Center Section: Navigation Links -->
      <div class="footer-nav">
        <div class="nav-column">
          <a href="#" class="nav-link">HOME</a>
          <a href="#" class="nav-link">ABOUT US</a>
          <a href="#" class="nav-link">OUR WORK</a>
          <a href="#" class="nav-link">TESTIMONIALS</a>
          <a href="#" class="nav-link">CONTACT US</a>
        </div>
        <div class="nav-column">
          <a href="#" class="nav-link">SOCIAL MEDIA MANAGEMENT</a>
          <a href="#" class="nav-link">CONTENT CREATION</a>
          <a href="#" class="nav-link">SEO</a>
          <a href="#" class="nav-link">WEB DEVELOPMENT</a>
          <a href="#" class="nav-link">AD MANAGEMENT</a>
        </div>
      </div>

      <!-- Right Section: Contact Details -->
      <div class="footer-contact">
        <h3 class="contact-heading">CONTACT DETAILS</h3>
        <div class="contact-info">
          <p>Mobile : <a href="tel:+919711431917">+91 9711431917</a></p>
          <p>Email : <a href="mailto:info@famespreadmedia.com">info@famespreadmedia.com</a></p>
          <p>Instagram : <a href="https://instagram.com/famespreadmedia" target="_blank">@famespreadmedia</a></p>
        </div>
      </div>
    </div>

    <!-- Address Section -->
    <div class="footer-address">
      <p>Address: Tower 5, 815B - 8th Floor, RPS 12th Avenue, Sarai Khwaja, Faridabad, Haryana-121003</p>
    </div>

    <!-- Copyright Section -->
    <div class="footer-bottom">
      <p>
        <span>&copy; Fame Spread Media {{ currentYear }}, All Rights Reserved. | </span>
        <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
        <span> | </span>
        <router-link to="/terms" class="footer-link">Terms & Conditions</router-link>
      </p>
    </div>

    <!-- Chat Button -->
    <!-- <div class="chat-button">
      <span>LET'S CHAT!</span>
      <div class="chat-arrow">→</div>
    </div> -->

    <!-- Curved Design Element -->
    <div class="footer-curve"></div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  position: relative;
  background-color: var(--bg-dark);
  color: var(--color-text-white);
  padding: var(--space-20) 0 0;
  overflow: hidden;
}

.footer-content {
  max-width: 1600px;
  margin-left: 160px;
  padding-left: 102px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

/* Left Section */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.footer-logo {
  width: 40px;
  height: 40px;
}

.footer-brand-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
}

.footer-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
  font-size: var(--font-size-sm);
}

.social-icons {
  display: flex;
  gap: var(--space-4);
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-base);
  color: var(--color-text-white);
  transition: var(--transition-base);
}

.social-icons a:hover {
  background-color: var(--color-primary);
  transform: translateY(-2px);
}

/* Center Section - Navigation */
.footer-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  justify-self: center;
}

.nav-column {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.nav-link {
  color: var(--color-text-white);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: var(--transition-base);
  letter-spacing: var(--letter-spacing-wide);
}

.nav-link:hover {
  color: var(--color-primary);
  transform: translateX(4px);
}

/* Right Section - Contact */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-heading {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  margin-bottom: var(--space-4);
  letter-spacing: var(--letter-spacing-wide);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-info p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.contact-info a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}

.contact-info a:hover {
  color: var(--color-primary-light);
}

/* Address Section */
.footer-address {
  text-align: center;
  padding: var(--space-12) var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: var(--space-16);
}

.footer-address p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Bottom Section */
.footer-bottom {
  text-align: center;
  padding: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.footer-bottom .footer-link {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: var(--transition-base);
  cursor: pointer;
}

.footer-bottom .footer-link:hover {
  color: var(--color-primary);
}

.footer-bottom div {
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}



/* Curved Design Element */
.footer-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(45deg, transparent 0%, rgba(193, 122, 96, 0.1) 50%, transparent 100%);
  clip-path: ellipse(100% 100% at 50% 100%);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
    text-align: center;
    margin-left: 0;
  }

  .footer-nav {
    justify-self: stretch;
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .nav-column {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-6);
  }

  .footer-brand {
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
  }

  .chat-button {
    bottom: var(--space-4);
    right: var(--space-4);
    padding: var(--space-3) var(--space-5);
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .footer {
    padding: var(--space-16) 0 0;
  }

  .footer-content {
    padding: 0 var(--space-4);
    gap: var(--space-8);
  }

  .nav-column {
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }
}
</style>