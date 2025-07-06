'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useContactForm } from '@/hooks/useContactForm'
import { useLanguage } from '@/lib/i18n/LanguageContext'
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
  
  const { t } = useLanguage();

  return (
    <Card variant="elevated" padding="large" className={`${styles.contactForm} ${className}`}>
      <h2>{t('common.sendUsMessage')}</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t('common.name')} *</label>
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
          <label htmlFor="email">{t('common.email')} *</label>
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
          <label htmlFor="phone">{t('common.phone')}</label>
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
          <label htmlFor="subject">{t('common.subject')}</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">{t('common.selectSubject')}</option>
            <option value="project-inquiry">{t('common.projectInquiry')}</option>
            <option value="partnership">{t('common.partnership')}</option>
            <option value="general-information">{t('common.generalInfo')}</option>
            <option value="careers">{t('common.careers')}</option>
            <option value="investor-relations">{t('common.investorRelations')}</option>
            <option value="media-inquiry">{t('common.mediaInquiry')}</option>
            <option value="other">{t('common.other')}</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">{t('common.message')} *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            placeholder={t('common.tellUsAbout')}
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
          {isSubmitting ? t('common.sending') : t('common.sendMessage')}
        </Button>
      </form>
    </Card>
  )
} 