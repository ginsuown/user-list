import React, { Component } from "react";
import "./index.css";
import UserListItem from "../UserListItem";
import PageNumbersContainer from "../../containers/PageNumbersContainer";

class UserListTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  selectPage = page => {
    this.setState({ page: page });
  };

  //helper function to determine if given index is in current selected page
  inPage = index => {
    return (
      index >= (this.props.page - 1) * 10 && index <= this.props.page * 10 - 1
    );
  };

  //process data with seleted filter and sort parameters
  filterAndSort = () => {
    const { data, filter, sortBy, sortDesc } = this.props;

    //object to map parameter to API name
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
    //return array in sorted order according to sort selection
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
    const filteredData = this.filterAndSort();
    return (
      <div className="UserListTable">
        {filteredData
          .filter((item, index) => {
            return this.inPage(index);
          })
          .map(item => {
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
        <PageNumbersContainer numItems={filteredData.length} />
      </div>
    );
  }
}

export default UserListTable;
