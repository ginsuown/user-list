import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

class PageNumbers extends Component {
  //helper function to render page numbers according to the amount of data
  renderPageNumbers = () => {
    const { page, numItems, selectPage } = this.props;
    //calculate total pages, cannot be less than 1
    const totalPages = Math.ceil(numItems / 10) || 1;
    let pageElements = [];

    //return up to 4 pages before and after current page
    for (let i = page - 4; i <= page + 4; i++) {
      //but make sure pages are not out of range
      if (i > 0 && i <= totalPages) {
        //check if current index is the selected page
        if (page === i) {
          pageElements.push(
            <span key={i} className="PageNumber SelectedPage">
              {i}
            </span>
          );
        } else {
          pageElements.push(
            <span
              key={i}
              className="PageNumber NotSelectedPage"
              onClick={() => selectPage(i)}
            >
              {i}
            </span>
          );
        }
      }
    }
    return pageElements;
  };

  //conditionally render "first" and "prev" buttons based on current page
  renderPrevButtons = () => {
    const { page } = this.props;
    return (
      <span>
        <span
          className={page === 1 ? "PageButtonInactive" : "PageButton"}
          onClick={page === 1 ? null : this.firstPage}
        >
          <FontAwesomeIcon className="PageArrow" icon={faArrowLeft} />
          First
        </span>
        <span
          className={page === 1 ? "PageButtonInactive" : "PageButton"}
          onClick={page === 1 ? null : this.prevPage}
        >
          <FontAwesomeIcon className="PageArrow" icon={faLongArrowAltLeft} />
          Prev
        </span>
      </span>
    );
  };

  //conditionally render "last" and "next" buttons based on current page
  renderNextButtons = () => {
    const { page } = this.props;
    const lastPage = Math.ceil(this.props.numItems / 10) || 1;
    return (
      <span>
        <span
          className={page === lastPage ? "PageButtonInactive" : "PageButton"}
          onClick={page === lastPage ? null : this.nextPage}
        >
          Next
          <FontAwesomeIcon className="PageArrow" icon={faLongArrowAltRight} />
        </span>
        <span
          className={page === lastPage ? "PageButtonInactive" : "PageButton"}
          onClick={page === lastPage ? null : this.lastPage}
        >
          Last
          <FontAwesomeIcon className="PageArrow" icon={faArrowRight} />
        </span>
      </span>
    );
  };

  nextPage = () => {
    this.props.selectPage(this.props.page + 1);
  };

  prevPage = () => {
    this.props.selectPage(this.props.page - 1);
  };

  firstPage = () => {
    this.props.selectPage(1);
  };

  lastPage = () => {
    this.props.selectPage(Math.ceil(this.props.numItems / 10) || 1);
  };

  render() {
    return (
      <div className="PageNumbers">
        {this.renderPrevButtons()}
        {this.renderPageNumbers()}
        {this.renderNextButtons()}
      </div>
    );
  }
}

export default PageNumbers;
