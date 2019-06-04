import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function users(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_REQUESTER_SUCCESS:
      const newState = { ...state, requester: action.requester };
      return newState;
    default:
      return state;
  }
}
