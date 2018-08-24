import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "../components/UserList";
import * as userActions from "../actions/user";

class UserListContainer extends Component {
  render() {
    return (
      <UserList users={this.props.users} fetchUsers={this.props.fetchUsers} />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(userActions.getData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
