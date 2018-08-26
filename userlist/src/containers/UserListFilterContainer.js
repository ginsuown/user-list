import React, { Component } from "react";
import { connect } from "react-redux";
import UserListFilter from "../components/UserListFilter";
import * as filterActions from "../actions/filter";

class UserListFilterContainer extends Component {
  render() {
    return (
      <UserListFilter
        sortBy={this.props.sortBy}
        sortDesc={this.props.sortDesc}
        updateFilter={this.props.updateFilter}
        setSortBy={this.props.setSortBy}
        setSortDesc={this.props.setSortDesc}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    sortBy: state.filter.sortBy,
    sortDesc: state.filter.sortDesc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: filter => dispatch(filterActions.updateFilter(filter)),
    setSortBy: sortBy => dispatch(filterActions.setSortBy(sortBy)),
    setSortDesc: sortDesc => dispatch(filterActions.setSortDesc(sortDesc))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListFilterContainer);
