import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  status: 'All',
  priority: [],
};

export default createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterChangeText: (state, action) => {
      state.search = action.payload;
    },
    filterChangeStatus: (state, action) => {
      state.status = action.payload;
    },
    filterChangePriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
