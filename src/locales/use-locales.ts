'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSettingsContext } from 'src/components/settings';

import i18n from './i18n';
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------

export function useLocales() {
  // IMPORTANT:
  // The first render must be identical on server and client.
  // Therefore we always start with the same language.
  const [langStorage, setLangStorage] = useState(defaultLang.value);

  useEffect(() => {
    const storedLang = window.localStorage.getItem('i18nextLng');

    const isValidLanguage = allLangs.some((lang) => lang.value === storedLang);

    if (isValidLanguage && storedLang) {
      setLangStorage(storedLang);

      // Keep i18next in sync with the stored language.
      if (i18n.language !== storedLang) {
        void i18n.changeLanguage(storedLang);
      }
    }
  }, []);

  const currentLang =
    allLangs.find((lang) => lang.value === langStorage) || defaultLang;

  return {
    allLangs,
    currentLang,
  };
}

// ----------------------------------------------------------------------

export function useTranslate() {
  const { t, i18n: translationI18n, ready } = useTranslation();

  const settings = useSettingsContext();

  const onChangeLang = useCallback(
    (newlang: string) => {
      void translationI18n.changeLanguage(newlang);
      settings.onChangeDirectionByLang(newlang);
    },
    [translationI18n, settings]
  );

  return {
    t,
    i18n: translationI18n,
    ready,
    onChangeLang,
  };
}