import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
        <Link to={{ pathname: "/add", state: { title: "Add User" } }}>
          <button className="AddUserButton">
            <FontAwesomeIcon className="AddUser" icon={faUser} />
            Add User
          </button>
        </Link>
      </div>
    );
  }
}

export default UserList;
