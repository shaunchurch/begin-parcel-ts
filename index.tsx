import React from 'react';
import { render } from 'react-dom';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return <div>Hello, world!</div>;
  }
}

render(<App />, document.getElementById('app'));
