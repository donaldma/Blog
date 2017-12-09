import { FETCH_MOST_RECENT } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_MOST_RECENT:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}