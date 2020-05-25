export const localeName = {
  en: 'English',
  fr: 'français',
  ja: '日本語'
};

export const selectLocale = (defLocale, cookie) => {
  const selected = cookie.lang;

  const browserLanguage = (
    (typeof navigator !== 'undefined' &&
      (navigator.browserLanguage || navigator.language)) ||
    defLocale
  )
    .toLowerCase()
    .substr(0, 2);
  const locale =
    selected || (localeName[browserLanguage] && browserLanguage) || 'en';

  return locale;
};
