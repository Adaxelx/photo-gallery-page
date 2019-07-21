import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* ogarnąć te renderowanie tych rzeczy tak jak na stronie tamtej */

import Home from './templates/Home';
import Gallery from './components/Gallery';

import img from './images/WWa/fontanna.jpg';

class App extends React.Component {
  data = [
    {
      title: 'Warszawa - Wisła',
      images: [
        { src: img, description: 'Multimedialny park fontann' },
        { src: img, description: 'Multimedialny park fontann' },
      ],
      path: '/articles/WWa',
      date: '17-18.07.2019r.',
      nextArt: {
        title: 'Bielsko Podlaski zachód',
        subtitle: 'Spokojny dzień w domu',
        img: '',
        date: '19.07.2019r.',
        src: '/articles/BP',
      },
    },
  ];

  state = {
    loaded: false,
  };

  changeLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    const { data, changeLoad } = this;
    const routes = data.map(art => (
      <Route
        key={art.path}
        path={art.path}
        exact
        render={() => (
          <Gallery
            title={art.title}
            date={art.date}
            changeLoad={changeLoad}
            images={art.images}
            nextArt={art.nextArt}
          />
        )}
      />
    ));
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact render={() => <Home loaded={loaded} changeLoad={changeLoad} />} />
            {routes}
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
