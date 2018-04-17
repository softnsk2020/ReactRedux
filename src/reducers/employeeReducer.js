import * as types from '../actions/actionTypes'
//import initialstate from './initialState';

export default function ratingReducer(state = [],action){
  debugger;
  switch (action.type) {
    case types.LOAD_EMPLOYEE_SUCCESS:
      return action.employees;
    case types.UPDATE_EMPLOYEE_SUCCESS:
      return [
        ...state.filter(employee => employee.id !== action.employee.id),
        Object.assign({}, action.employee)
      ];
    default:
      return state;
  }
}
