import { FETCH_USER } from '../actions';
import _ from 'lodash';

const initialState = { data: [] };

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}