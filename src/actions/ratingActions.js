import employeeAPI from '../api/mockEmployees';
import * as types from './actionTypes';

export function loadEmployeeSuccess(employees) {
  debugger;
  return {
    type: types.LOAD_EMPLOYEE_SUCCESS, employees};
}

export function updateEmployeeSuccess(employee) {
  return { type: types.UPDATE_EMPLOYEE_SUCCESS, employee };
}

export function loadEmployees(){
  return function(dispatch){
    return employeeAPI.getAllEmployees().then(employees =>{
      dispatch(loadEmployeeSuccess(employees))
    }).catch(error =>{
      throw(error);
    });
  };
}

export function saveEmployee(employee) {
  return function(dispatch, getState) {
    return employeeAPI.saveRating(employee).then(savedCourse => {
      dispatch(updateEmployeeSuccess(employee))
    }).catch(error => {
      throw(error);
    });
  };
}
