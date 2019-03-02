// @flow
import React, { PureComponent } from "react";

// components
import logo from "../../assets/logo.svg";

// styles
import "./styles/login.css";

// // type
type StateType = {
  test: Number,
};
type PropsType = {};

class App extends PureComponent<PropsType, StateType> {
  state = {
    test: 0,
  };

  render() {
    const { test } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {test}
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
