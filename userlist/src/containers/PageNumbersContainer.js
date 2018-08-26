import React, { Component } from "react";
import { connect } from "react-redux";
import PageNumbers from "../components/PageNumbers";
import * as pageActions from "../actions/page";

class PageNumbersContainer extends Component {
  render() {
    return (
      <PageNumbers
        page={this.props.page}
        selectPage={this.props.selectPage}
        numItems={this.props.numItems}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPage: page => dispatch(pageActions.selectPage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNumbersContainer);
