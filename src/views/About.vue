<template>
  <div class="about-page">
    <!-- Who We Are Section -->
    <section id="who-we-are" class="who-we-are-section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h1 class="section-title">Who We Are</h1>
        </div>

        <div class="content-grid">
          <div class="text-content">
            <p class="description">
              Based in Gurgaon, Fame Spread Media is a full-service marketing and creative
              agency dedicated to helping brands scale, stand out, and thrive in the
              digital age. We combine strategy, design, content, and performance under one
              roof to create bold brand identities and high-impact campaigns that deliver
              results.
            </p>
            <p class="description">
              Whether you're a startup discovering your voice or an established brand
              looking to evolve, we craft every solution with purpose, precision, and
              creativity. We don't just run campaigns — we build presence, performance,
              and perception.
            </p>
            <p class="description">
              From branding and strategy to social media marketing, content creation,
              website and e-commerce development, performance marketing, WhatsApp
              marketing, marketplace support, sales enablement, and analytics, we provide
              end-to-end solutions that help your brand grow.
            </p>
            <p class="description">
              Because when your brand is ready to grow, we're ready to spread the fame.
            </p>
          </div>
          <div class="image-content">
            <div class="team-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Fame Spread Media Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Story Section -->
    <section id="founders-story" class="founders-story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-image">
            <img
              src="https://pub-d52e6487b06345a0b5b78c56edc9e666.r2.dev/IMG_0164.JPEG"
              alt="Founder"
            />
            <div class="image-overlay"></div>
          </div>
          <div class="story-content">
            <div class="accent-line"></div>
            <h2 class="story-title">Our Journey</h2>
            <p class="story-text">
              Fame Spread Media was born from a spark — a mix of passion, curiosity and the desire to make an impact. Ridham Singh Bhatia (Founder & CEO) was an engineering student running his own clothing brand on the side. But as the brand grew and went viral, people didn't just notice the products — they noticed the strategy, the creativity and the way ideas turned into results. That's when our true purpose became clear: helping brands grow, telling their stories and creating impact that lasts.
            </p>
            <p class="story-text">
              Our first client came to us two years ago — and today they're still with us, a testament to the trust, dedication and results we deliver. Since then, we've worked on countless projects and nearly 20+ brands, each one teaching us something new, pushing us further and helping us evolve.
            </p>
            <p class="story-text">
              We're a team of Gen Z thinkers, creators and doers — always on the move, always available and always exploring new ways to help brands stand out.
            </p>
            <p class="story-signature">"As Steve Jobs once said, 'The people who are crazy enough to think they can change the world are the ones who do.' That's the energy we bring to every brand, every story, every campaign."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Existing Components -->
    <ClientsSection />
    <ContactFormSection />
    <TestimonialSection />
  </div>
</template>

<script setup>
import ClientsSection from "@/components/ClientsSection.vue";
import ContactFormSection from "@/components/ContactFormSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
</script>

<style scoped>
.about-page {
  background: var(--color-black);
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-10);
}

/* Who We Are Section */
.who-we-are-section {
  padding: var(--space-24) 0 var(--space-20) 0;
  background: var(--color-black);
  position: relative;
}

.section-header {
  margin-bottom: var(--space-16);
}

.accent-line {
  width: 60px;
  height: 4px;
  background: var(--color-primary);
  margin-bottom: var(--space-6);
}

.section-title {
  font-family: var(--font-family-heading);
  font-size: clamp(48px, 6vw, 72px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  margin: 0;
  letter-spacing: -2px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-20);
  align-items: center;
}

.text-content {
  max-width: 700px;
}

.description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  text-align: justify;
}

.image-content {
  position: relative;
}

.team-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.team-image img {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0.9);
}

/* Founder's Story Section */
.founders-story-section {
  padding: var(--space-24) 0;
  background: var(--color-accent);
  position: relative;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-20);
  align-items: start;
}

.story-image {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 600px;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) brightness(0.8);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(var(--color-primary-rgb), 0.3), transparent);
}

.story-content {
  padding-top: var(--space-8);
}

.story-title {
  font-family: var(--font-family-heading);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-8) 0;
  letter-spacing: -1px;
}

.story-text {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  text-align: justify;
}

.story-signature {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-style: italic;
  color: var(--color-primary);
  margin-top: var(--space-10);
}

/* Team Section */
.team-section {
  padding: var(--space-24) 0;
  background: linear-gradient(to bottom, var(--color-accent), var(--color-white));
}

.team-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.team-title {
  font-family: var(--font-family-heading);
  font-size: clamp(36px, 5vw, 64px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-12) 0;
  letter-spacing: -1px;
  font-style: italic;
}

.team-silhouettes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin-bottom: var(--space-16);
  filter: brightness(0) invert(0);
  opacity: 0.9;
}

.silhouette {
  width: 120px;
  height: 180px;
  object-fit: cover;
  margin: 0 -10px;
  filter: brightness(0) contrast(200%);
  transition: var(--transition-base);
}

.silhouette:hover {
  transform: translateY(-10px);
  filter: brightness(0) contrast(200%) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.team-description {
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-white);
  padding: var(--space-12);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.team-description p {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
  text-align: center;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .story-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .story-image {
    height: 400px;
  }

  .team-silhouettes {
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .silhouette {
    width: 80px;
    height: 120px;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: var(--font-size-4xl);
  }

  .story-title {
    font-size: var(--font-size-3xl);
  }

  .team-title {
    font-size: var(--font-size-3xl);
  }

  .description,
  .story-text {
    font-size: var(--font-size-base);
    text-align: left;
  }

  .team-description {
    padding: var(--space-8);
  }

  .team-description p {
    font-size: var(--font-size-base);
    text-align: left;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .who-we-are-section,
  .founders-story-section,
  .team-section {
    padding: var(--space-16) 0;
  }

  .story-image {
    height: 300px;
  }

  .silhouette {
    width: 60px;
    height: 90px;
  }
}
</style>
