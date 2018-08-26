import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function UserListItem(props) {
  const { fName, lName, age, sex } = props;
  return (
    <div className="UserListItem">
      <span className="ItemProperty">{fName}</span>
      <span className="ItemProperty">{lName}</span>
      <span className="ItemProperty">{sex}</span>
      <span className="ItemProperty">{age}</span>
      <FontAwesomeIcon className="Edit Icon" icon={faEdit} />
      <FontAwesomeIcon className="Trash Icon" icon={faTrash} />
    </div>
  );
}

export default UserListItem;
