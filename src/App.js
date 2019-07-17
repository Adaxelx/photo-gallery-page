import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

import Loading from './components/Loading';
import Home from './templates/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Loading />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
