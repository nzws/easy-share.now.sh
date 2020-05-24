export const localeData = {
  ja: require('./ja'),
  en: require('./en'),
  fr: require('./fr')
};

export const localeName = {
  ja: '日本語',
  en: 'English',
  fr: 'français'
};

export const selectLocale = () => {
  const selected = process.browser ? localStorage.getItem('es_lang') : null;

  const browserLanguage = (
    (typeof navigator !== 'undefined' &&
      (navigator.browserLanguage || navigator.language)) ||
    ''
  )
    .toLowerCase()
    .substr(0, 2);
  const locale =
    selected || (localeData[browserLanguage] && browserLanguage) || 'en';

  return locale;
};
