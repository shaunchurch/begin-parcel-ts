import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './defaultTheme';
import { Page } from './App.styles';
import { Home } from './home';

interface Props {}

interface State {}

class App extends Component<Props, State> {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
