//initial state
const initState = { filter: "", sortBy: "", sortDesc: false };

const filter = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        filter: action.filter
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_SORT_DESC":
      return {
        ...state,
        sortDesc: action.sortDesc
      };
    default:
      return state;
  }
};

export default filter;
