import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export default createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleCheckbox: (state, action) => {
      state.map((item) => (item.id === action.payload ? (item.completed = !item.completed) : item));
    },
  },
});
