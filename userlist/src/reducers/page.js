//initial state
const initState = { page: 1 };

const page = (state = initState, action) => {
  switch (action.type) {
    case "SELECT_PAGE":
      return {
        page: action.page
      };
    default:
      return state;
  }
};

export default page;
