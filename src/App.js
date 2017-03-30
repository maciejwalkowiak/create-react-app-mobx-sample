import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import logo from './logo.svg';
import './App.css';

@observer
class App extends Component {
  @observable counter = 0;

  componentDidMount() {
    setInterval(() => this.counter++, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>You are here already for {this.counter} seconds.</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
