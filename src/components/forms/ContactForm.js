'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useContactForm } from '@/hooks/useContactForm'
import styles from './ContactForm.module.css'

// Single Responsibility: Handle contact form display and user interaction
export default function ContactForm({ className = '' }) {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useContactForm()

  return (
    <Card variant="elevated" padding="large" className={`${styles.contactForm} ${className}`}>
      <h2>Send us a Message</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            required
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            required
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select a subject</option>
            <option value="project-inquiry">Project Inquiry</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="general-information">General Information</option>
            <option value="careers">Career Opportunities</option>
            <option value="investor-relations">Investor Relations</option>
            <option value="media-inquiry">Media Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            placeholder="Tell us about your project..."
            required
          />
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  )
} 