import ManagerApi from '../api/mockManager';
import * as types from './actionTypes';

export function loadManagerSuccess(managers) {
  debugger;
  return {
    type: types.LOAD_MANAGER_SUCCESS, managers};
}

export function loadManagers(){
  return function(dispatch){
    return ManagerApi.getAllManagers().then(managers =>{
      dispatch(loadManagerSuccess(managers))
    }).catch(error =>{
      throw(error);
    });
  };
}
