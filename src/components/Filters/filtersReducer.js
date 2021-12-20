const initState = {
  search: '',
  status: 'All',
  priority: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'filterText/filterTextChange':
      return {
        ...state,
        search: action.payload,
      };
    case 'filterStatus/filterStatusChange':
      return {
        ...state,
        status: action.payload,
      };
    case 'filterPriority/filterPriorityChange':
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default filterReducer;
