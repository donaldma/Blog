import { FETCH_USER } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_USER:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}