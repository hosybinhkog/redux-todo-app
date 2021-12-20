import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const prioritySelector = (state) => state.filters.priority;

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, statusFilter, prioritySelector) => {
    console.log(prioritySelector);
    const todoListRe = prioritySelector.length
      ? todoList.filter(
          (item) => item.name.includes(searchText) && prioritySelector.includes(item.prioriry)
        )
      : todoList.filter((item) => item.name.includes(searchText));
    switch (statusFilter) {
      case 'All':
        return todoListRe;
      case 'Completed':
        return todoListRe.filter((item) => item.completed === true);
      case 'Todo':
        return todoListRe.filter((item) => item.completed === false);
      default:
        return todoListRe;
    }
  }
);
