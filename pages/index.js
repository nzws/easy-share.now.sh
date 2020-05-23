import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useRouter } from 'next/router';

import Add from '../components/add';
import Home from '../components/home';

const mobile = media.lessThan('small');
const desktop = media.greaterThan('small');

const Container = styled.div`
  text-align: center;
  height: 100vh;

  ${desktop`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      width: 500px;
    }
  `};
  ${mobile`
    padding: 40px 10px;
  `};
`;

const Index = () => {
  const {
    query: { t, link }
  } = useRouter();

  return (
    <Container>
      <div>{t ? <Add t={t} link={link} /> : <Home />}</div>
    </Container>
  );
};

export default Index;
