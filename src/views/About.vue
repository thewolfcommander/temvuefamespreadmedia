<template>
  <div class="about-page">
    <!-- Who We Are Section -->
    <section class="who-we-are-section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h1 class="section-title">Who We Are?</h1>
        </div>
        
        <div class="content-grid">
          <div class="text-content">
            <p class="description">
              Fame Spread Media is a group of young enthusiasts who have a common crave: i.e. 
              Developing a better future by building aesthetic brands with powerful branding and 
              marketing strategies.
            </p>
            <p class="description">
              Hello, Fame Spread Media is a group of "Creative Aspirants". You can call us either bold 
              thinkers or authentic creatives, but whatever we do leads to a revolution. We give 
              preference to independence and space and are always responsible for you. We get 
              into the real market and understand the taste of people as well as keep a strong eye 
              on the current trends, to make your brand stand out. Our team is fulfilled with proven 
              abundance of ideas, directing impactful custom-made strategies and engaging 
              actions now and forever.
            </p>
          </div>
          <div class="image-content">
            <div class="team-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Fame Spread Media Team" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Story Section -->
    <section class="founders-story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-image">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600" alt="Founder" />
            <div class="image-overlay"></div>
          </div>
          <div class="story-content">
            <div class="accent-line"></div>
            <h2 class="story-title">Our journey</h2>
            <p class="story-text">
              It all starts when a bunch of professional mortals 
              who are having tremendous experience in their 
              segments combine together to start an 
              enterprise where they can explore more of what 
              they have done and give life to many new and 
              existing brands.
            </p>
            <p class="story-text">
              We still love to consider ourselves as "keen 
              learners" as we believe every work that we 
              encounter helps us to gain more knowledge and 
              grow in more heights. With an overall experience 
              of 10 years, we got the privilege to associate with 
              more than 1000+ brands and completed 5000+ 
              projects.
            </p>
            <p class="story-text">
              As a creative group, we clearly know what it 
              makes for a brand to get highlighted through all 
              forms of challenges. So, what are you waiting 
              for? Get in touch with us to upfit or give a new 
              outlook for your brand.
            </p>
            <p class="story-signature">get me connected .....</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="team-header">
          <h2 class="team-title">We Are Ample & Efficient</h2>
          <div class="team-silhouettes">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200" alt="Team member" class="silhouette" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Team member" class="silhouette" />
          </div>
        </div>
        <div class="team-description">
          <p>
            Our strategies are effective and agile. Markets are growing like nothing and the 
            competition is increasing day by day so you need to be unique and have an ideal 
            identity. As a startup or SME, you need to take care of the element "Budget"; we are 
            flexible and work upon your needs and requirements. For us, we look forward to a long-
            distance business relationship with each client, so we understand your situations and 
            are there to help you as best we can.
          </p>
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
import ClientsSection from '@/components/ClientsSection.vue'
import ContactFormSection from '@/components/ContactFormSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
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