import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Loading from './components/Loading';
import Home from './templates/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Nav />
        <Loading />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
