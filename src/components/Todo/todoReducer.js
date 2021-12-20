const initState = [];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    case 'todoList/toggleCheckbox':
      return state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : { ...item }
      );
    default:
      return [...state];
  }
};

export default todoReducer;
