import React, { Component } from 'react';
import Home from './ui/Home';

class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default HomeContainer;
