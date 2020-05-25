import React from 'react';
import styled from 'styled-components';
import { MessageSquare, Moon, Sun } from 'react-feather';
import { useIntl } from 'react-intl';
import { setCookie } from 'nookies';
import { useDarkMode } from 'next-dark-mode';
import { localeName } from '../locales/locales';

const StyledSettings = styled.div`
  position: fixed;
  bottom: 10px;
  left: 15px;
  display: flex;

  .locale {
    border: 1px solid ${({ theme: { text } }) => text};
  }

  .theme {
    margin-left: 5px;
    margin-top: 2px;
    cursor: pointer;
  }

  .icon {
    margin-left: 8px;
  }

  select {
    font-size: 1.1rem;
    padding: 4px;
    border: none;
    margin-left: 5px;
  }

  select,
  option {
    cursor: pointer;
    color: ${({ theme: { text } }) => text};
    background: ${({ theme: { background } }) => background};
  }
`;

const Settings = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  const intl = useIntl();

  const onChange = e => {
    const newLang = e.target.value;
    setCookie(null, 'lang', newLang);
    location.reload();
  };

  return (
    <StyledSettings>
      <div className="locale">
        <MessageSquare className="icon" size={18} />

        <select value={intl.locale} onChange={onChange}>
          {Object.keys(localeName).map(v => (
            <option value={v} key={v}>
              {localeName[v]}
            </option>
          ))}
        </select>
      </div>

      <div
        className="theme"
        onClick={darkModeActive ? switchToLightMode : switchToDarkMode}
      >
        {darkModeActive ? (
          <Moon className="icon" size={24} />
        ) : (
          <Sun className="icon" size={24} />
        )}
      </div>
    </StyledSettings>
  );
};

export default Settings;
