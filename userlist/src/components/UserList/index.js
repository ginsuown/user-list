import React, { Component } from "react";
import "./index.css";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <p>Hello world</p>
        <button onClick={this.props.fetchUsers}>GET DATA</button>
        {this.props.users.data.map(item => {
          return <p key={item._id}>{item.fName}</p>;
        })}
        <p>Error: {JSON.stringify(this.props.users.err)}</p>
      </div>
    );
  }
}

export default UserList;
