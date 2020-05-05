import React, { Component } from 'react';
import Header from './components/header';
import RustExample from './components/rust-example';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RustExample />
      </div>
    );
  }
}
export default App;
