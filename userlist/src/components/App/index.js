import React, { Component } from "react";
import "./index.css";
import UserListContainer from "../../containers/UserListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserListContainer />
      </div>
    );
  }
}

export default App;
