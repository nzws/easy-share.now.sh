import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { darken, lighten } from 'polished';
import { parseCookies } from 'nookies';
import { localeData, selectLocale } from '../locales/locales';

import 'ress/dist/ress.min.css';

const lightTheme = {
  linkBase: '#2986ff',
  background: '#e3e3e3',
  text: '#030303',
  lighten: lighten,
  darken: darken
};

const darkTheme = {
  linkBase: '#2986ff',
  background: '#121212',
  text: '#e3e3e3',
  lighten: darken,
  darken: lighten
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
    margin: '5px 0',
    color: ({ theme: { text } }) => text
  },
  '*, *:after, *:before': {
    boxSizing: 'border-box',
    transition: '100ms ease',
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

const App = ({ Component, pageProps, locale }) => {
  const { darkModeActive } = useDarkMode();

  return (
    <ThemeProvider theme={darkModeActive ? darkTheme : lightTheme}>
      <Head>
        <title>Easy Share</title>
      </Head>
      <GlobalStyle />

      <IntlProvider locale={locale} messages={localeData[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const locale = selectLocale(
    ctx?.req?.headers['accept-language'],
    parseCookies(ctx)
  );
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, locale };
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  locale: PropTypes.string
};

export default withDarkMode(App);
