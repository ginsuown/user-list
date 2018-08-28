import React, { Component } from "react";
import "./index.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      buttonText = "Confirm",
      cancelButtonText = "Cancel",
      content = "Default Content",
      title = "Default Title"
    } = this.props;
    const widthStyle = { width: (this.props.width || "500") + "px" };

    return (
      <div className="Modal">
        <div className={this.props.visible ? "Modal-Background" : null} />
        <div
          className={this.props.visible ? "Modal-Visible" : "Modal-Hidden"}
          style={widthStyle}
        >
          <h3>{title}</h3>
          <hr />
          <p className="Modal-Content">{content}</p>
          <hr />
          <div className="Modal-Buttons">
            <button
              className="Modal-Cancel-Button"
              onClick={this.props.cancelButton}
            >
              {cancelButtonText}
            </button>
            <button className="Modal-Button" onClick={this.props.submitButton}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
