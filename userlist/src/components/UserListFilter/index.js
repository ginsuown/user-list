import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

class UserListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { filterInput: "" };
  }

  updateFilterInput = e => {
    this.setState({ filterInput: e.target.value });
    this.props.updateFilter(e.target.value);
    this.props.resetPage();
  };

  //helper function to toggle a sort header
  handleSort = sortBy => {
    //check if the selected sort item is already active, if so, toggle desc/asc order
    if (this.props.sortBy === sortBy) {
      this.props.setSortDesc(!this.props.sortDesc);
    } else {
      //update sortBy with new selected item
      this.props.setSortBy(sortBy);
      this.props.setSortDesc(false);
    }
  };

  //function to render a chevron next to selected sort item
  renderChevron = item => {
    if (item === this.props.sortBy) {
      return this.props.sortDesc ? (
        <FontAwesomeIcon className="DownIcon ArrowIcon" icon={faChevronDown} />
      ) : (
        <FontAwesomeIcon className="UpIcon ArrowIcon" icon={faChevronUp} />
      );
    }
  };

  //render a table category with onclick methods and conditional chevron when selected
  renderSortHeader = name => {
    return (
      <div className="SortHeaderItem">
        <p
          className={
            this.props.sortBy === name ? "SortTitleActive" : "SortTitle"
          }
          onClick={() => this.handleSort(name)}
        >
          {name}
          {this.renderChevron(name)}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="UserListFilter">
        <input
          value={this.state.filterInput}
          onChange={this.updateFilterInput}
          placeholder="Search"
        />
        <div className="SortHeader">
          {this.renderSortHeader("First Name")}
          {this.renderSortHeader("Last Name")}
          {this.renderSortHeader("Sex")}
          {this.renderSortHeader("Age")}
          <p className="EditDelete">Edit</p>
          <p className="EditDelete">Delete</p>
        </div>
      </div>
    );
  }
}

export default UserListFilter;
