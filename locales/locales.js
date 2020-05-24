export const localeData = {
  en: require('./en'),
  fr: require('./fr'),
  ja: require('./ja')
};

export const localeName = {
  en: 'English',
  fr: 'français',
  ja: '日本語'
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
