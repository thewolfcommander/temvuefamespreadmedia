<template>
  <section id="contact-us" class="contact-form-section">


    <div class="contact-container">
      <!-- Left Side - Consultation Info -->
      <div class="consultation-section">
        <div class="consultation-icon">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" fill="var(--color-primary)" opacity="0.1" />
            <path
              d="M30 40C30 35.5817 33.5817 32 38 32H62C66.4183 32 70 35.5817 70 40V55C70 59.4183 66.4183 63 62 63H45L35 70V63H38C33.5817 63 30 59.4183 30 55V40Z"
              fill="var(--color-primary)" />
            <circle cx="42" cy="47" r="3" fill="white" />
            <circle cx="50" cy="47" r="3" fill="white" />
            <circle cx="58" cy="47" r="3" fill="white" />
            <path
              d="M65 25C65 22.2386 67.2386 20 70 20C72.7614 20 75 22.2386 75 25V35C75 37.7614 72.7614 40 70 40C67.2386 40 65 37.7614 65 35V25Z"
              fill="var(--color-primary)" />
            <path
              d="M25 25C25 22.2386 27.2386 20 30 20C32.7614 20 35 22.2386 35 25V35C35 37.7614 32.7614 40 30 40C27.2386 40 25 37.7614 25 35V25Z"
              fill="var(--color-primary)" />
            <path
              d="M40 70C40 72.7614 37.7614 75 35 75H30C27.2386 75 25 72.7614 25 70C25 67.2386 27.2386 65 30 65H35C37.7614 65 40 67.2386 40 70Z"
              fill="var(--color-primary)" />
          </svg>
        </div>
        <h2 class="consultation-title">
          <span class="free-text">Let's Work</span>
          <span class="consultation-text">Together!</span>
        </h2>
        <p class="consultation-description">
          Fame isn't luck—it's strategy, storytelling, and showing up right. 
          Contact us to learn how we can build that kind of fame with you.
        </p>
        
        <!-- Trust Signals -->
        <div class="trust-signals">
          <div class="trust-item">✓ Full-Service Creative & Marketing Agency</div>
          <div class="trust-item">✓ Strategy, Design & Content Under One Roof</div>
          <div class="trust-item">✓ Serving Startups & Established Brands</div>
        </div>
      </div>

      <!-- Right Side - Contact Form -->
      <div class="form-section">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-grid">
            <div class="form-group">
              <input type="text" v-model="formData.name" placeholder="Name*" required class="form-input">
            </div>
            <div class="form-group">
              <input type="email" v-model="formData.email" placeholder="Email*" required class="form-input">
            </div>
            <div class="form-group">
              <input type="text" v-model="formData.city" placeholder="City*" required class="form-input">
            </div>
            <div class="form-group">
              <input type="tel" v-model="formData.phone" placeholder="Phone*" required class="form-input">
            </div>
          </div>
          <div class="form-group message-group">
            <textarea v-model="formData.message" placeholder="Your Message*" required class="form-textarea"
              rows="6"></textarea>
          </div>
          <div class="form-submit">
            <button type="submit" class="submit-btn" :disabled="isSubmitting">{{ isSubmitting ? 'SUBMITTING...' :
              'SUBMIT' }}</button>
          </div>
        </form>
      </div>
    </div>


  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useGoogleSheets } from '@/composables/useGoogleSheets'

const { saveToGoogleSheets } = useGoogleSheets()

const formData = ref({
  name: '',
  email: '',
  city: '',
  phone: '',
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
      service: " ",
      company: " ",
      source: 'Fame Spread Media Contact Form'
    }

    await saveToGoogleSheets(orderedData)

    // Reset form
    formData.value = {
      name: '',
      email: '',
      city: '',
      phone: '',
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
.contact-form-section {
  background: var(--bg-dark);
  min-height: 100vh;
  padding: var(--space-20) 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}


/* Main Container */
.contact-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-10);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-20);
  align-items: center;
}

/* Consultation Section */
.consultation-section {
  color: var(--color-text-white);
}

.consultation-icon {
  margin-bottom: var(--space-10);
}

.consultation-title {
  font-family: var(--font-family-heading);
  font-size: clamp(36px, 5vw, 52px);
  font-weight: var(--font-weight-light);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-tight);
}

.free-text {
  color: var(--color-primary);
  font-weight: var(--font-weight-normal);
}

.consultation-text {
  color: var(--color-text-white);
  font-weight: var(--font-weight-light);
}

.consultation-description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-6) 0;
  max-w: 480px;
}

/* Trust Signals */
.trust-signals {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.trust-item {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

/* Form Section */
.form-section {
  width: 100%;
}

.contact-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-5);
}

.form-group {
  width: 100%;
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
  margin-bottom: var(--space-8);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  background: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  padding: var(--space-4) var(--space-10);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-heading);
  letter-spacing: var(--letter-spacing-wide);
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--color-primary-rgb), 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}



/* Responsive Design */
@media (max-width: 1200px) {
  .contact-container {
    gap: var(--space-16);
    padding: 0 var(--space-8);
  }
}

@media (max-width: 968px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: var(--space-16);
    text-align: center;
  }

  .consultation-description {
    max-width: 100%;
  }

}

@media (max-width: 768px) {
  .contact-form-section {
    padding: var(--space-16) 0;
  }

  .contact-container {
    padding: 0 var(--space-5);
    gap: var(--space-10);
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .consultation-title {
    font-size: var(--font-size-4xl);
  }

  .consultation-description {
    font-size: var(--font-size-base);
  }

  .form-input,
  .form-textarea {
    padding: var(--space-4) var(--space-5);
    font-size: var(--font-size-sm);
  }

  .submit-btn {
    width: 100%;
    padding: var(--space-4);
  }

  .form-submit {
    justify-content: stretch;
  }

  .chat-button {
    bottom: var(--space-5);
    right: var(--space-5);
    padding: var(--space-3) var(--space-5);
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 0 var(--space-4);
  }

  .consultation-icon svg {
    width: 60px;
    height: 60px;
  }
}
</style>