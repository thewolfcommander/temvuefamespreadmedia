<template>
  <div class="section">
    <div>
      <!-- We're Everything You Need Section -->
      <section class="need-section" ref="needSectionEl">
        <div class="container">
          <div class="content-wrapper">
            <!-- Left Side - Heading and CTA -->
            <div class="left-content">
              <h2 class="main-heading intro-text">
                <span class="heading-line-1">Your Full-Service Creative &</span>
                <span class="heading-line-2">Marketing Partner</span>
              </h2>
              <p class="overview-subheading">Strategy, design, content, and performance under one roof.</p>
              <div class="cta-wrapper">
                <a href="#/contact" class="cta-link">
                  Discuss Your Project
                  <span class="bell-icon">→</span>
                </a>
              </div>
            </div>

            <!-- Right Side - Industries Section -->
            <div class="right-content">
              <h3 class="industries-title">Industries We Serve</h3>
              <div class="tags-grid">
                <div class="tag-column">
                  <a href="#" class="tag-link">#Fashion</a>
                  <a href="#" class="tag-link">#Beauty & Skincare</a>
                  <a href="#" class="tag-link">#E-commerce & Retail</a>
                </div>
                <div class="tag-column">
                  <a href="#" class="tag-link">#Real Estate</a>
                  <a href="#" class="tag-link">#Events</a>
                  <a href="#" class="tag-link">#Corporate</a>
                </div>
                <div class="tag-column">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- India's Leading Agency Section -->
      <section class="agency-section" ref="agencySectionEl">
        <div class="container">
          <div class="agency-content">
            <h1 class="agency-heading">
              GURGAON'S CREATIVE<br />
              MARKETING AGENCY
            </h1>
            <p class="agency-description">
              Helping Brands Scale, Stand Out, and Succeed.<br /><br />
              As a full-service agency based in Gurgaon, we are built to help brands navigate the digital age.
              With experience serving over 20+ brands, we tailor every move to your goals with purpose, precision, and
              creativity to build your brand's presence, performance, and perception.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Create refs to hold the elements we want to animate
const needSectionEl = ref(null);
const agencySectionEl = ref(null);

// onMounted hook runs after the component's HTML is on the page
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe the Vue refs
  const animatedElements = [needSectionEl.value, agencySectionEl.value];
  animatedElements.forEach((el) => {
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(el);
    }
  });
});
</script>

<style scoped>
/* Root variables */
:root {
  --primary-blue: #00a3ff;
  --text-light: #ffffff;
  --text-gray: #a0a0a0;
  --bg-black: #000000;
  --transition: all 0.3s ease;
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* We're Everything You Need Section */
.need-section {
  background-color: var(--bg-black);
  padding: 30px 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 100px;
  align-items: center;
}

.intro-text {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-light);
  color: var(--color-text-white);
  /* margin-bottom: var(--space-4); */
  position: relative;
  display: block;
  /* padding-top: 10px; */
  cursor: pointer;
  transition: color 0.3s ease;
}

.intro-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.intro-text:hover::before {
  width: 120px;
}

/* Left Content */
.left-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.main-heading {
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-light);
  margin: 0;
  letter-spacing: -2px;
}

.heading-line-1 {
  display: block;
  position: relative;
  padding-top: 25px;
}

.heading-line-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--primary-blue);
}

.heading-line-2 {
  display: block;
}

.overview-subheading {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-normal);
  color: var(--color-text-secondary);
  margin: var(--space-4) 0 var(--space-8) 0;
  line-height: var(--line-height-relaxed);
}

/* CTA Wrapper */
.cta-wrapper {
  margin-top: 20px;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
}

.cta-link:hover {
  color: var(--text-light);
  transform: translateX(5px);
}

.bell-icon {
  font-size: 20px;
  display: inline-block;
  animation: ring 2s ease-in-out infinite;
  transform-origin: 50% 4px;
}

/* Right Content - Industries Section */
.right-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.industries-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  margin-bottom: var(--space-6);
  text-align: left;
}

.tags-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 80px;
  max-width: 700px;
}

.tag-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tag-link {
  font-size: 18px;
  font-weight: 400;
  color: var(--text-light);
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
  opacity: 0.8;
}

.tag-link:hover {
  color: var(--primary);
  transform: translateX(5px);
  opacity: 1;
}

/* Agency Section */
.agency-section {
  background-color: var(--bg-black);
  padding: 120px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  /* margin-top: 100px; */
}

.agency-content {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.agency-heading {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-light);
  margin: 0 0 40px 0;
  letter-spacing: -1px;
}

.agency-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--text-gray);
  margin: 0;
}

.inline-link {
  color: var(--primary-blue);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
}

.inline-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-blue);
  transition: width 0.3s ease;
}

.inline-link:hover {
  color: var(--text-light);
}

.inline-link:hover::after {
  width: 100%;
  background-color: var(--text-light);
}

/* Animations */
@keyframes ring {

  0%,
  100% {
    transform: rotate(0deg);
  }

  10%,
  30% {
    transform: rotate(-10deg);
  }

  20%,
  40% {
    transform: rotate(10deg);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .content-wrapper {
    gap: 60px;
  }

  .tags-grid {
    gap: 40px 60px;
  }
}

@media (max-width: 992px) {
  .need-section {
    padding: 30px 0;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .main-heading {
    font-size: 56px;
  }

  .right-content {
    justify-content: flex-start;
  }

  .tags-grid {
    max-width: 100%;
  }

  .agency-section {
    padding: 80px 0;
  }

  .agency-heading {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 30px;
  }

  .need-section {
    padding: 0px 0;
    min-height: auto;
  }

  .main-heading {
    font-size: 42px;
  }

  .cta-link {
    font-size: 16px;
  }

  .tags-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 40px;
  }

  .tag-link {
    font-size: 16px;
  }

  .agency-section {
    padding: 60px 0;
  }

  .agency-heading {
    font-size: 28px;
    line-height: 1.4;
  }

  .agency-description {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }

  .main-heading {
    font-size: 32px;
  }

  .heading-line-1::before {
    width: 40px;
    height: 3px;
  }

  .left-content {
    gap: 30px;
  }

  .cta-link {
    font-size: 14px;
  }

  .tags-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .tag-column {
    gap: 15px;
  }

  .tag-link {
    font-size: 14px;
  }

  .agency-heading {
    font-size: 24px;
  }

  .agency-description {
    font-size: 14px;
    line-height: 1.7;
  }
}
</style>
