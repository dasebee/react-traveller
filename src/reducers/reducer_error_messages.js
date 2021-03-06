import * as actions from '../actions/ActionTypes';
import update from 'react-addons-update';

const initial_state = {
  'error_type': "",
  'message': ""
}

export default function(state = initial_state, action) {
  switch (action.type) {
    case actions.THROW_ERROR_MESSAGE:
      return update(state, {
        'error_type': {$set: action.error_type},
        'message': {$set: action.message}
      })
    default:
      return state;
  }
}