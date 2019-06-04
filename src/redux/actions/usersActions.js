import * as types from './actionTypes';
import zafClient from '../../api/zafClient';

export function getRequesterSuccess(requester) {
  return { type: types.GET_REQUESTER_SUCCESS, requester };
}

/**
 * Get current tickets Requester via zafClient
 * TODO: Add more examples
 */
export const getRequester = () => dispatch => {
  zafClient.get('ticket.requester').then(function(data) {
    const requester = data['ticket.requester'];
    dispatch(getRequesterSuccess(requester));
  });
};
