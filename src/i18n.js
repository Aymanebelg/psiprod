import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

// Check for saved language preference in localStorage
const savedLanguage = localStorage.getItem('language') || 'ar';

const resources = {
  en: {
    translation: enTranslation
  },
  ar: {
    translation: arTranslation
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // Set initial language based on saved preference
    fallbackLng: 'ar',
    keySeparator: '.', // We use keys in the form 'header.aboutUs'
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
