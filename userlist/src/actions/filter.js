function updateFilter(filter) {
  return {
    type: "UPDATE_FILTER",
    filter: filter
  };
}

function setSortBy(sortBy) {
  return {
    type: "SET_SORT_BY",
    sortBy: sortBy
  };
}

function setSortDesc(sortDesc) {
  return {
    type: "SET_SORT_DESC",
    sortDesc: sortDesc
  };
}

export { updateFilter, setSortBy, setSortDesc };
