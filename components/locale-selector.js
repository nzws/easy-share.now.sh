import React from 'react';
import styled from 'styled-components';
import { MessageSquare } from 'react-feather';
import { useIntl } from 'react-intl';
import { localeName } from '../locales/locales';

const StyledLocale = styled.div`
  position: fixed;
  bottom: 10px;
  left: 15px;
  border: 1px solid ${({ theme: { text } }) => text};

  .icon {
    margin-left: 8px;
  }

  select {
    font-size: 1.1rem;
    padding: 4px;
    border: none;
    margin-left: 5px;
  }
`;

const LocaleSelector = () => {
  const intl = useIntl();

  const onChange = e => {
    const newLang = e.target.value;
    document.cookie = `lang=${newLang}`;
    location.reload();
  };

  return (
    <StyledLocale>
      <MessageSquare className="icon" size={18} />

      <select value={intl.locale} onChange={onChange}>
        {Object.keys(localeName).map(v => (
          <option value={v} key={v}>
            {localeName[v]}
          </option>
        ))}
      </select>
    </StyledLocale>
  );
};

export default LocaleSelector;
