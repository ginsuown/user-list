import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import UserList from "../UserList";
import EditUser from "../EditUser";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact={true} component={UserList} />
          <Route path="/edit" component={EditUser} />
          <Route path="/add" component={EditUser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
