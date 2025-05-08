import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enCommon from "./en/common.json";

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },
    },
    fallbackLng: "en",
    debug: location.hostname === "localhost", // Enable debug only on localhost

    // Namespaces
    ns: ["common", "anime", "ui"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
