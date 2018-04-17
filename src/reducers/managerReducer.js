import * as types from '../actions/actionTypes'
//import initialstate from './initialState';

export default function managerReducer(state = [],action){
  debugger;
  switch (action.type) {
    case types.LOAD_MANAGER_SUCCESS:
      return action.managers;
    default:
      return state;
  }
}
