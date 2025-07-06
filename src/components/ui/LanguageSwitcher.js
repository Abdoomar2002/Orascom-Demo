'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className={styles.languageSwitcher}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span className={styles.languageText}>
        {language === 'en' ? 'العربية' : 'English'}
      </span>
      <div className={styles.flag}>
        {language === 'en' ? '🇸🇦' : '🇺🇸'}
      </div>
    </button>
  );
};

export default LanguageSwitcher; 