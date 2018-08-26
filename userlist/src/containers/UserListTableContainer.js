import React, { Component } from "react";
import { connect } from "react-redux";
import UserListTable from "../components/UserListTable";
import * as userActions from "../actions/user";

class UserListTableContainer extends Component {
  render() {
    return (
      <UserListTable
        data={this.props.data}
        isFetching={this.props.isFetching}
        err={this.props.err}
        fetchUsers={this.props.fetchUsers}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.users.data,
    isFetching: state.users.isFetching,
    err: state.users.err,
    filter: state.filter.filter,
    sortBy: state.filter.sortBy,
    sortDesc: state.filter.sortDesc
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
)(UserListTableContainer);
