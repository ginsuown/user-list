import axios from "axios";

//Action creators for user store
function reqStart() {
  return {
    type: "USER_FETCH_START"
  };
}

function reqSuccess(res) {
  return {
    type: "USER_FETCH_SUCCESS",
    data: res.data
  };
}

function reqFail(err) {
  return {
    type: "USER_FETCH_FAIL",
    err
  };
}

function getData() {
  return (dispatch, getState) => {
    dispatch(reqStart());
    axios
      .get("/api/users")
      .then(res => {
        dispatch(reqSuccess(res));
      })
      .catch(err => {
        dispatch(reqFail(err));
      });
  };
}

export { getData };
