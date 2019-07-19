import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './templates/Home';
import Gallery from './components/Gallery';

import img from './images/WWa/fontanna.jpg';

class App extends React.Component {
  data = [
    {
      title: 'Warszawa - Wisła',
      images: [{ src: img, description: 'Park fontann' }],
      path: '/articles/WWa',
      nextArt: {
        title: 'Bielsko Podlaski zachód',
        subtitle: 'Spokojny dzień w domu',
        img: '',
        date: '19.07.2019r.',
      },
    },
  ];

  interval;

  state = {
    loaded: false,
  };

  changeLoad = () => {
    this.setState({ loaded: true });
  };

  componentDidMount() {
    const { loaded } = this.state;
    this.interval = setTimeout(this.changeLoad, 3000);
  }

  componentWillUpdate() {
    const { loaded } = this.state;
    if (loaded) {
      clearTimeout(this.interval);
    }
  }

  render() {
    const { loaded } = this.state;
    const { data, changeLoad } = this;
    const routes = data.map(art => (
      <Route
        key={art.path}
        path={art.path}
        exact
        render={() => <Gallery title={art.title} changeLoad={changeLoad} images={art.images} nextArt={art.nextArt} />}
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
