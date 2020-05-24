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

export const selectLocale = (defLocale, cookie) => {
  const selected = (process.browser ? document.cookie : cookie)
    ?.split('; ')
    .find(v => v.split('=')[0] === 'lang')
    ?.split('=')[1];

  const browserLanguage = (
    (typeof navigator !== 'undefined' &&
      (navigator.browserLanguage || navigator.language)) ||
    defLocale
  )
    .toLowerCase()
    .substr(0, 2);
  const locale =
    selected || (localeData[browserLanguage] && browserLanguage) || 'en';

  return locale;
};
