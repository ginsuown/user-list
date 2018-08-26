import React, { Component } from "react";
import "./index.css";
import UserListItem from "../UserListItem";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  //helper function to determine if given index is in current selected page
  inPage = index => {
    return (
      index >= this.state.page * 10 && index <= (this.state.page + 1) * 10 - 1
    );
  };

  filterAndSort = () => {
    const { data, filter, sortBy, sortDesc } = this.props;

    //object to sort parameter to API name
    const mapName = {
      "First Name": "fName",
      "Last Name": "lName",
      Age: "age",
      Sex: "sex"
    };

    let filteredData = data;
    //return any item that contains the filter string
    if (filter) {
      const caseFilter = filter.toUpperCase();
      filteredData = filteredData.filter(item => {
        return (
          item.fName.toUpperCase().includes(caseFilter) ||
          item.lName.toUpperCase().includes(caseFilter) ||
          item.age.toString().includes(caseFilter) ||
          item.sex.toUpperCase().includes(caseFilter)
        );
      });
    }
    if (sortBy) {
      filteredData.sort((a, b) => {
        const first = a[mapName[sortBy]];
        const second = b[mapName[sortBy]];
        if (first < second) {
          return sortDesc ? 1 : -1;
        } else {
          return sortDesc ? -1 : 1;
        }
      });
    }
    return filteredData;
  };

  render() {
    return (
      <div className="UserListTable">
        {this.filterAndSort().map(item => {
          return (
            <div className="ListItem">
              <UserListItem
                key={item._id}
                fName={item.fName}
                lName={item.lName}
                age={item.age}
                sex={item.sex}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserList;
