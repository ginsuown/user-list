import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function UserListItem(props) {
  const { fName, lName, age, sex, deleteUser, password, _id } = props;
  return (
    <div className="UserListItem">
      <span className="ItemProperty">{fName}</span>
      <span className="ItemProperty">{lName}</span>
      <span className="ItemProperty">{sex}</span>
      <span className="ItemProperty">{age}</span>
      <Link
        to={{
          pathname: "/edit",
          state: {
            title: "Edit User",
            fName,
            lName,
            sex,
            age,
            password,
            _id
          }
        }}
      >
        <FontAwesomeIcon className="Edit Icon" icon={faEdit} />
      </Link>
      <FontAwesomeIcon
        onClick={deleteUser}
        className="Trash Icon"
        icon={faTrash}
      />
    </div>
  );
}

export default UserListItem;
