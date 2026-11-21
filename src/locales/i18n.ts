'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLang } from './config-lang';

import translationEn from './langs/en.json';
import translationFr from './langs/fr.json';
import translationVi from './langs/vi.json';
import translationCn from './langs/cn.json';
import translationAr from './langs/ar.json';

// ----------------------------------------------------------------------

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      fr: { translations: translationFr },
      vi: { translations: translationVi },
      cn: { translations: translationCn },
      ar: { translations: translationAr },
    },

    // Must be deterministic during SSR and hydration.
    lng: defaultLang.value,
    fallbackLng: defaultLang.value,

    debug: false,

    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;