import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import ExternalLink from './external-link';
import { GitHub } from 'react-feather';

const Head = styled.div`
  font-size: 1.2rem;
  letter-spacing: 2px;

  p {
    color: ${({ theme: { text } }) => lighten(0.5, text)};
  }

  a {
    display: inline-block;
    padding-top: 10px;
    font-size: 1rem;
    letter-spacing: 0;
  }
`;

const URL = styled.code`
  display: block;
  margin: 20px auto 10px;
  padding: 10px;
  background: ${({ theme: { background } }) => darken(0.1, background)};
  color: ${({ theme: { text } }) => lighten(0.2, text)};
`;

const Tips = styled.div`
  text-align: left;
  font-size: 0.8rem;
  color: ${({ theme: { text } }) => lighten(0.2, text)};
`;

const bracket = t => `<${t}>`;

const Home = () => {
  return (
    <>
      <Head>
        <h1>Easy Share</h1>
        <p>
          <FormattedMessage id="home.description" />
          <br />
          <small>
            <FormattedMessage id="home.description2" />
          </small>
        </p>
        <ExternalLink href="https://github.com/nzws/easy-share.now.sh">
          <GitHub className="icon" size={14} /> nzws/easy-share.now.sh
        </ExternalLink>
      </Head>

      <URL>
        GET https://easy-share.now.sh/?t={bracket('text')}&link=
        {bracket('link')}
      </URL>

      <Tips>
        <ExternalLink href="">
          <FormattedMessage id="home.tips.ref" />
        </ExternalLink>{' '}
        /{' '}
        <Link href="/?t=Easy%20Share&link=https%3A%2F%2Feasy-share.now.sh">
          <a>
            <FormattedMessage id="home.tips.demo" />
          </a>
        </Link>
        <br />
        * <FormattedMessage id="home.tips.1" />
      </Tips>
    </>
  );
};

export default Home;
