import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from '../components/Todo/todoListSlice';

import filtersSlice from '../components/Filters/filtersSlice';

const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export default store;
