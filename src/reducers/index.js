import {combineReducers} from 'redux';
import employees from './employeeReducer';
import managers from './managerReducer';

const rootReducer=combineReducers({
  employees,
  managers
});

export default rootReducer;
