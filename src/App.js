import React from 'react';
import Home from './templates/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
