import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Counters from './component/counters'
import Navigation from './component/navigation';

class App extends Component {
  render() { 
      return (
        <Container>
          <Navigation />
          <Counters />
        </Container>
      );
  }
}

export default App;
