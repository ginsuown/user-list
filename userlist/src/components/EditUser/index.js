import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class EditUser extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.state) {
      const { fName, lName, age, sex, password } = this.props.location.state;
      this.state = {
        fNameInput: fName || "",
        lNameInput: lName || "",
        ageInput: age || "",
        sexInput: sex || "",
        passwordInput1: password || "",
        passwordInput2: password || ""
      };
    } else {
      this.state = {
        fNameInput: "",
        lNameInput: "",
        ageInput: "",
        sexInput: "",
        passwordInput1: "",
        passwordInput2: ""
      };
    }
  }

  //Update state with data input fields
  handleInputChange = (name, e) => {
    this.setState({ [name]: e.target.value });
  };

  //Submit to API
  submitData = () => {
    const {
      fNameInput,
      lNameInput,
      ageInput,
      sexInput,
      passwordInput1,
      passwordInput2
    } = this.state;

    //Check whether updating or adding new user
    if (this.props.location.state.title === "Add User") {
      console.log("add");
      axios({
        method: "post",
        url: "/api/users",
        data: {
          fName: fNameInput,
          lName: lNameInput,
          age: Number.parseInt(ageInput),
          sex: sexInput,
          password: passwordInput1
        }
      }).then(response => {
        this.props.history.push("/");
      });
    } else {
      //editing user
      console.log("edit");
      axios({
        method: "put",
        url: "/api/users",
        data: {
          id: this.props.location.state._id,
          fName: fNameInput,
          lName: lNameInput,
          age: Number.parseInt(ageInput),
          sex: sexInput,
          password: passwordInput1
        }
      }).then(response => {
        this.props.history.push("/");
      });
    }
    //this.props.history.push("/");
  };

  render() {
    const {
      fNameInput,
      lNameInput,
      ageInput,
      sexInput,
      passwordInput1,
      passwordInput2
    } = this.state;
    return (
      <div>
        <h1>{this.props.location.state.title}</h1>
        <div className="Inputs">
          <div className="FieldNames">
            First Name: <br /> Last Name: <br />
            Sex: <br />
            Age: <br />
            Password: <br />
            Repeat Password:
          </div>
          <div className="InputFields">
            <input
              value={fNameInput}
              onChange={e => this.handleInputChange("fNameInput", e)}
              placeholder="First Name"
            />
            <br />
            <input
              value={lNameInput}
              onChange={e => this.handleInputChange("lNameInput", e)}
              placeholder="Last Name"
            />
            <br />
            <select
              value={sexInput || "Select One"}
              onChange={e => this.handleInputChange("sexInput", e)}
            >
              <option disabled="disabled">Select One</option>
              <option>Female</option>
              <option>Male</option>
            </select>
            <br />
            <input
              value={ageInput}
              onChange={e => this.handleInputChange("ageInput", e)}
              type="number"
              placeholder="Age"
            />
            <br />
            <input
              value={passwordInput1}
              onChange={e => this.handleInputChange("passwordInput1", e)}
              type="password"
              placeholder="Password"
            />
            <br />
            <input
              value={passwordInput2}
              onChange={e => this.handleInputChange("passwordInput2", e)}
              type="password"
              placeholder="Repeat Password"
            />
          </div>
        </div>
        <button className="AddButton" onClick={this.submitData}>
          Submit
          <FontAwesomeIcon className="AddButtonIcon" icon={faPlusCircle} />
        </button>
      </div>
    );
  }
}

export default EditUser;
