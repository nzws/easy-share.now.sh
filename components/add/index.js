import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { FormattedMessage } from 'react-intl';
import { Box, Share } from 'react-feather';
import Link from 'next/link';
import ExternalLink from '../external-link';
import items from './items';

const Preview = styled.div`
  display: block;
  text-align: left;
  margin: 20px auto 10px;
  padding: 10px;
  background: ${({ theme: { background } }) => darken(0.1, background)};
  color: ${({ theme: { text } }) => lighten(0.2, text)};
`;

const Prompt = styled.div`
  margin: 10px 0;
  padding: 10px;
  background: ${({ theme: { background } }) => darken(0.05, background)};

  b {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 90%;
    background: #fff;
    padding: 5px;
    border: none;
    font-size: 0.9rem;
  }

  button {
    display: block;
    margin: 5px auto;
    padding: 5px 20px;
    border: none;
    background: ${({ theme: { linkBase } }) => linkBase};
    color: #fff;

    :hover {
      background: ${({ theme: { linkBase } }) => darken(0.05, linkBase)};
    }
  }
`;

const Items = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  cursor: pointer;
  text-align: center;
  margin: 5px;
  padding: auto;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${({ theme: { background } }) => darken(0.1, background)};
  }

  .icon {
    display: block;
    margin: 0 auto 5px;
  }
`;

const Tips = styled.div`
  font-size: 0.8rem;
  color: ${({ theme: { text } }) => lighten(0.2, text)};
`;

const replaceRunner = (text, values = {}) => {
  Object.keys(values).forEach(key => {
    const replace = values[key];
    text = text.replace(new RegExp(`{${key}}`, 'g'), replace);
  });

  return text;
};

const Add = ({ t, link }) => {
  const [pmpt, setPrompt] = useState();
  const [inputValue, setInputValue] = useState('');
  const [storageSuggestions, setSS] = useState([]);
  const [hasShareAPI, setHasShareAPI] = useState(false);

  useEffect(() => {
    if (window?.navigator?.share) {
      setHasShareAPI(true);
    }
  }, []);

  const onClick = (item, isPrompt = false) => {
    if (item.onClick) {
      return item.onClick(t, link);
    }
    if (item.prompt && !isPrompt) {
      const storage = JSON.parse(
        localStorage.getItem('es_suggestions') || '{}'
      );
      setSS(storage[item.name] || []);
      return setPrompt(item);
    }
    if (isPrompt && !inputValue) {
      return;
    }
    if (item.prompt && inputValue) {
      const storage = JSON.parse(
        localStorage.getItem('es_suggestions') || '{}'
      );
      if (!storage[item.name]) {
        storage[item.name] = [];
      }
      const index = storage[item.name].indexOf(inputValue);
      if (index !== -1) {
        delete storage[item.name][index];
      }
      storage[item.name].unshift(inputValue);
      localStorage.setItem('es_suggestions', JSON.stringify(storage));
    }

    if (item.link) {
      location.href = replaceRunner(item.link, {
        text: t,
        link,
        domain: inputValue
      });
    }
  };

  return (
    <>
      <h1>
        <FormattedMessage id="add.title" />
      </h1>

      <Preview>
        {t}
        {link && (
          <>
            <br />
            {link}
          </>
        )}
      </Preview>

      {pmpt && (
        <Prompt>
          <b>
            <FormattedMessage
              id={`add.prompt.${pmpt.prompt}`}
              values={{
                ex: pmpt.suggestions[0]
              }}
            />
          </b>

          <input
            type="text"
            autoComplete="on"
            list="suggestions"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <datalist id="suggestions">
            {storageSuggestions.map(v => (
              <option value={v} key={v} />
            ))}
            {pmpt.suggestions.map(v => (
              <option value={v} key={v} />
            ))}
          </datalist>

          <button onClick={() => onClick(pmpt, true)}>
            <FormattedMessage id="add.prompt.go" />
          </button>
        </Prompt>
      )}

      <Items>
        {hasShareAPI && (
          <Item
            onClick={() =>
              onClick({
                name: 'Device',
                if: !!(process.browser && window?.navigator?.share),
                icon: Share,
                onClick(text, url) {
                  navigator.share({
                    url,
                    text
                  });
                }
              })
            }
          >
            <div>
              <Share className="icon" size={30} />
              <FormattedMessage id="add.device" />
            </div>
          </Item>
        )}
        {items.map(item => {
          const Icon = item.icon || Box;

          return (
            <Item key={item.name} onClick={() => onClick(item)}>
              <div>
                <Icon className="icon" color={item.color} size={30} />
                {item.name}
              </div>
            </Item>
          );
        })}
      </Items>

      <Tips>
        <FormattedMessage
          id="add.add-service"
          values={{
            link: (
              <ExternalLink href="https://github.com/nzws/easy-share.now.sh/issues">
                <FormattedMessage id="add.add-service-link" />
              </ExternalLink>
            )
          }}
        />
        <br />
        <Link href="/">
          <a>
            <FormattedMessage id="add.your-site" />
          </a>
        </Link>
      </Tips>
    </>
  );
};

Add.propTypes = {
  t: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Add;
