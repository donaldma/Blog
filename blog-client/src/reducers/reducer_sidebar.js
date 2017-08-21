import { FETCH_SIDEBAR} from '../actions';
import _ from 'lodash';

const initialState = { data: [] };

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SIDEBAR:
      return {
        data: _.mapKeys(action.payload.data, 'id')
      };
    default:
      return state;
  }
}