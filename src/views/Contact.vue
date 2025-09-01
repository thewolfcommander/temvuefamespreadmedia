<template>
  <div id="get-a-quote" class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-line-1">LOOKING FOR A PERFECT KICK</span>
              <span class="title-line-2">FOR YOUR NEW BRAND?</span>
            </h1>
            <h2 class="hero-subtitle">Just push up and say</h2>
            <p class="hero-description">
              We are happy to guide you for a fresh start; Let's unite and build a
              better tomorrow with innovative ideas and opportunities. We clearly
              understand the taste of Indian and international audiences, getting
              the perfect pitch for your venture.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="container">
        <div class="form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-header">
              <h3 class="form-title">Get in Touch</h3>
              <div class="phone-display">
                <span class="phone-number">+91 9871521144</span>
                <button type="button" class="cta-button">Get a Quote</button>
              </div>
            </div>

            <div class="form-grid">
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="formData.name" placeholder="Type your name" required
                  class="form-input" />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="formData.email" placeholder="Type your email" required
                  class="form-input" />
              </div>

              <div class="form-group">
                <label for="city" class="form-label">City</label>
                <input type="text" id="city" v-model="formData.city" placeholder="City*" required class="form-input" />
              </div>

              <div class="form-group">
                <label for="service" class="form-label">Service</label>
                <select id="service" v-model="formData.service" required class="form-input form-select">
                  <option value="" disabled>Service Required:</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="packaging">Packaging Design</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="web">Web Development</option>
                  <option value="social">Social Media Management</option>
                  <option value="consulting">Brand Consulting</option>
                </select>
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">Phone</label>
                <div class="phone-input-wrapper">
                  <span class="country-code">🇮🇳</span>
                  <input type="tel" id="phone" v-model="formData.phone" placeholder="Type your phone" required
                    pattern="[0-9]{10}" class="form-input phone-input" />
                </div>
              </div>

              <div class="form-group">
                <label for="company" class="form-label">Company</label>
                <input type="text" id="company" v-model="formData.company" placeholder="Company name (Optional)"
                  class="form-input" />
              </div>
            </div>

            <div class="form-group message-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" v-model="formData.message" placeholder="Type your Message" required rows="8"
                class="form-textarea"></textarea>
            </div>

            <div class="form-footer">
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                {{ isSubmitting ? 'SUBMITTING...' : 'SUBMIT' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGoogleSheets } from '@/composables/useGoogleSheets'

const { saveToGoogleSheets } = useGoogleSheets()

const formData = ref({
  name: '',
  email: '',
  city: '',
  service: '',
  phone: '',
  company: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    const orderedData = {
      name: formData.value.name,
      email: formData.value.email,
      city: formData.value.city,
      phone: formData.value.phone,
      message: formData.value.message,
      timestamp: new Date().toISOString(),
      service: formData.value.service,
      company: formData.value.company,
      source: 'Fame Spread Media Contact Form'
    }

    await saveToGoogleSheets(orderedData)

    // Reset form
    formData.value = {
      name: '',
      email: '',
      city: '',
      service: '',
      phone: '',
      company: '',
      message: ''
    }

    alert('Thank you for contacting us! We will get back to you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting your form. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  background: var(--color-black);
  min-height: 100vh;
}

/* Hero Section */
.contact-hero {
  padding: var(--space-24) 0 var(--space-20) 0;
  background: var(--color-black);
  position: relative;
}

.contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--color-primary);
  margin-left: 40px;
  margin-top: 80px;
}

.hero-content {
  max-width: 900px;
}

.hero-title {
  font-family: var(--font-family-heading);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-8);
  letter-spacing: -1px;
}

.title-line-1,
.title-line-2 {
  display: block;
}

.hero-subtitle {
  font-family: var(--font-family-heading);
  font-size: clamp(48px, 6vw, 80px);
  font-weight: var(--font-weight-light);
  color: var(--color-text-white);
  margin-bottom: var(--space-8);
  line-height: 1;
}

.hero-description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0;
}

/* Contact Form Section */
.contact-form-section {
  padding: var(--space-20) 0;
  background: var(--color-black);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-10);
}

.form-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  background: rgba(var(--color-white-rgb), 0.02);
  border: 1px solid rgba(var(--color-white-rgb), 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-12);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-12);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid rgba(var(--color-white-rgb), 0.1);
}

.form-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-white);
  margin: 0;
}

.phone-display {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.phone-number {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  color: var(--color-text-white);
  font-weight: var(--font-weight-medium);
}

.cta-button {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-text-white);
  border: none;
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-heading);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: var(--transition-base);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(234, 102, 113, 0.3);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-white);
  text-transform: capitalize;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: transparent;
  border: 1px solid rgba(var(--color-white-rgb), 0.2);
  border-radius: var(--radius-base);
  color: var(--color-text-white);
  font-size: var(--font-size-base);
  font-family: var(--font-family-body);
  transition: var(--transition-base);
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-muted);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  border-color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.05);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);
}

.form-select option {
  background: var(--color-black);
  color: var(--color-text-white);
}

.phone-input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.country-code {
  font-size: var(--font-size-xl);
  padding: var(--space-3);
  background: rgba(var(--color-white-rgb), 0.05);
  border-radius: var(--radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}

.phone-input {
  flex: 1;
}

.message-group {
  grid-column: 1 / -1;
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: var(--space-6);
}

.submit-button {
  background: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-heading);
  letter-spacing: var(--letter-spacing-wider);
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
  min-width: 200px;
}

.submit-button:hover:not(:disabled) {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--color-primary-rgb), 0.3);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 968px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .form-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .contact-form {
    padding: var(--space-8);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-5xl);
  }

  .form-title {
    font-size: var(--font-size-3xl);
  }

  .phone-display {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .submit-button {
    width: 100%;
  }

  .form-footer {
    justify-content: stretch;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .contact-form {
    padding: var(--space-6);
  }

  .hero-description {
    font-size: var(--font-size-base);
  }
}
</style>