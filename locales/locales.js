export const localeName = {
  en: 'English',
  fr: 'Français',
  ja: '日本語',
  'zh-TW': '繁體中文（台灣）',
  zh: '简体中文'
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
