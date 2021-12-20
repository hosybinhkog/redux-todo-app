export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const filterChangeText = (data) => {
  return {
    type: 'filterText/filterTextChange',
    payload: data,
  };
};

export const filterChangeStatus = (data) => {
  return {
    type: 'filterStatus/filterStatusChange',
    payload: data,
  };
};

export const filterChangePriority = (data) => {
  return {
    type: 'filterPriority/filterPriorityChange',
    payload: data,
  };
};

export const toggleCheckboxChange = (id) => {
  return {
    type: 'todoList/toggleCheckbox',
    payload: id,
  };
};
