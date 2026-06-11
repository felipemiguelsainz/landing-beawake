import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./Locales/en/translation.json";
import translationES from "./Locales/es/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "htmlTag"]
    },
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES }
    }
  });

export default i18n;
