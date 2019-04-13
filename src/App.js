import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import data from './data/accordionData';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Accordion data={data} />
      </div>
    );
  }
}

export default App;
