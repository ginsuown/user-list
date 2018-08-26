import React, { Component } from "react";
import "./index.css";
import UserListTableContainer from "../../containers/UserListTableContainer";
import UserListFilterContainer from "../../containers/UserListFilterContainer";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserList">
        <h1>Users</h1>
        <UserListFilterContainer />
        <UserListTableContainer />
      </div>
    );
  }
}

export default UserList;
