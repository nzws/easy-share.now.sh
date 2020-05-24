import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { darken } from 'polished';

import 'ress/dist/ress.min.css';

const background = '#e3e3e3';
const text = '#030303';
const linkBase = '#2986ff';
const theme = {
  linkBase,
  background,
  text
};

const GlobalStyle = createGlobalStyle({
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: 400,
    fontStyle: 'normal',
    color: ({ theme: { text } }) => text,
    background: ({ theme: { background } }) => background
  },
  'b, strong': {
    fontWeight: 600,
    fontSize: '1.1rem',
    marginRight: '2px'
  },
  a: {
    color: ({ theme: { linkBase } }) => linkBase,
    textDecoration: 'none',
    fontWeight: 400,
    wordBreak: 'break-all',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  'h1, h2, h3': {
    fontWeight: 600,
    margin: '5px 0'
  },
  '*, *:after, *:before': {
    boxSizing: 'border-box',
    transition: '200ms ease',
    outline: 0,
    scrollbarColor: ({ theme: { background } }) =>
      `${darken(0.2, background)} ${background}`,
    scrollbarWidth: 'thin'
  },
  '.icon': {
    position: 'relative',
    top: '3px'
  },
  '::-webkit-scrollbar': {
    width: '6px',
    height: '6px'
  },
  '::-webkit-scrollbar-thumb': {
    background: ({ theme: { background } }) => darken(0.2, background),
    border: 'none'
  }
});

const locales = {
  ja: require('../locales/ja'),
  en: require('../locales/en'),
  fr: require('../locales/fr')
};

const App = ({ Component, pageProps }) => {
  const browserLanguage = (
    (typeof navigator !== 'undefined' &&
      (navigator.browserLanguage || navigator.language)) ||
    ''
  )
    .toLowerCase()
    .substr(0, 2);
  const locale = (locales[browserLanguage] && browserLanguage) || 'en';

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Easy Share</title>
      </Head>
      <GlobalStyle />

      <IntlProvider locale={locale} messages={locales[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default App;
