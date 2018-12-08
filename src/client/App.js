import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './containers/Header';
import { fetchCurrentUser } from './actions';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
`;

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;

const App = ({ route }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>
        {renderRoutes(route.routes)}
      </Container>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
