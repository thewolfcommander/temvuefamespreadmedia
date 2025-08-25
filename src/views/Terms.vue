<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <div class="accent-line"></div>
        <h1 class="page-title">Terms & Conditions</h1>
        <p class="last-updated">Last Updated: January 2025</p>
      </div>

      <div class="legal-content">
        <section class="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Fame Spread Media. These Terms and Conditions ("Terms") govern your use of our website and services. 
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these 
            terms, then you may not access our services.
          </p>
        </section>

        <section class="legal-section">
          <h2>2. Services</h2>
          <p>
            Fame Spread Media provides branding, packaging design, digital marketing, and creative consulting services. 
            Our services are tailored to meet the specific needs of each client, and the scope of work will be defined 
            in individual service agreements.
          </p>
        </section>

        <section class="legal-section">
          <h2>3. Intellectual Property Rights</h2>
          <p>
            All intellectual property rights in the materials, designs, and content created by Fame Spread Media remain 
            the property of Fame Spread Media until full payment has been received from the client. Upon full payment, 
            ownership of the agreed deliverables transfers to the client, except for any pre-existing intellectual 
            property of Fame Spread Media.
          </p>
          <p>
            Fame Spread Media retains the right to showcase completed work in our portfolio and marketing materials 
            unless otherwise agreed in writing with the client.
          </p>
        </section>

        <section class="legal-section">
          <h2>4. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide accurate and complete information necessary for project completion</li>
            <li>Respond to requests for feedback and approval in a timely manner</li>
            <li>Make payments according to the agreed schedule</li>
            <li>Respect the intellectual property rights of Fame Spread Media and third parties</li>
            <li>Use our services only for lawful purposes</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>5. Payment Terms</h2>
          <p>
            Payment terms will be specified in individual service agreements. Standard terms include:
          </p>
          <ul>
            <li>A deposit may be required before work commences</li>
            <li>Payment milestones will be established for larger projects</li>
            <li>Final payment is due upon project completion and before final files are delivered</li>
            <li>Late payments may incur additional charges</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of any proprietary or confidential information 
            shared during the course of the business relationship. This obligation continues after the termination 
            of services.
          </p>
        </section>

        <section class="legal-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            Fame Spread Media's liability for any claim arising out of or related to our services shall not exceed 
            the amount paid by the client for the specific service giving rise to the claim. We are not liable for 
            any indirect, incidental, special, or consequential damages.
          </p>
        </section>

        <section class="legal-section">
          <h2>8. Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice. Upon termination, the client is 
            responsible for payment of all work completed up to the termination date. Fame Spread Media will provide 
            all completed work upon receipt of payment.
          </p>
        </section>

        <section class="legal-section">
          <h2>9. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or our services will first be addressed through good faith 
            negotiations. If resolution cannot be reached, disputes will be subject to mediation or arbitration 
            as mutually agreed by both parties.
          </p>
        </section>

        <section class="legal-section">
          <h2>10. Modifications</h2>
          <p>
            Fame Spread Media reserves the right to modify these Terms at any time. We will notify clients of any 
            material changes. Continued use of our services after modifications constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section class="legal-section">
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
            its conflict of law provisions.
          </p>
        </section>

        <section class="legal-section">
          <h2>12. Contact Information</h2>
          <p>
            For any questions about these Terms & Conditions, please contact us at:
          </p>
          <div class="contact-info">
            <p>Fame Spread Media</p>
            <p>Email: info@famespreadmedia.com</p>
            <p>Phone: +91 9871521144</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// Terms & Conditions page
</script>

<style scoped>
.legal-page {
  background: var(--color-black);
  min-height: 100vh;
  padding: var(--space-24) 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--space-10);
}

.legal-header {
  margin-bottom: var(--space-16);
}

.accent-line {
  width: 60px;
  height: 4px;
  background: var(--color-primary);
  margin-bottom: var(--space-6);
}

.page-title {
  font-family: var(--font-family-heading);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  margin: 0 0 var(--space-4) 0;
  letter-spacing: -1px;
}

.last-updated {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0;
}

.legal-content {
  background: rgba(var(--color-white-rgb), 0.02);
  border: 1px solid rgba(var(--color-white-rgb), 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-12);
}

.legal-section {
  margin-bottom: var(--space-10);
}

.legal-section:last-child {
  margin-bottom: 0;
}

.legal-section h2 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--space-4) 0;
}

.legal-section p {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4) 0;
}

.legal-section ul {
  margin: var(--space-4) 0 var(--space-4) var(--space-6);
  padding: 0;
  list-style: none;
}

.legal-section li {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  position: relative;
  padding-left: var(--space-6);
}

.legal-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

.contact-info {
  margin-top: var(--space-4);
  padding: var(--space-6);
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: var(--radius-base);
  border-left: 4px solid var(--color-primary);
}

.contact-info p {
  margin: 0 0 var(--space-2) 0;
  color: var(--color-text-white);
  font-weight: var(--font-weight-medium);
}

.contact-info p:last-child {
  margin-bottom: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .legal-page {
    padding: var(--space-16) 0;
  }

  .container {
    padding: 0 var(--space-6);
  }

  .legal-content {
    padding: var(--space-8);
  }

  .page-title {
    font-size: var(--font-size-3xl);
  }

  .legal-section h2 {
    font-size: var(--font-size-xl);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .legal-content {
    padding: var(--space-6);
  }

  .legal-section {
    margin-bottom: var(--space-8);
  }
}
</style>