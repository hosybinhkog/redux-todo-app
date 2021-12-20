import { combineReducers } from 'redux';
import todoReducer from '../components/Todo/todoReducer';
import filtersReducer from '../components/Filters/filtersReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
