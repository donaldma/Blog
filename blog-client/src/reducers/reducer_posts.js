import { FETCH_POSTS, FETCH_RANDOM_POSTS, FETCH_POSTS_BEAUTY, FETCH_POSTS_FASHION, FETCH_POSTS_TRAVEL, FETCH_POSTS_FITNESS, FETCH_ABOUT, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_RANDOM_POSTS:
      return _.mapKeys(action.payload.data.rows, 'id');
    case FETCH_POSTS_BEAUTY:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POSTS_FASHION:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POSTS_TRAVEL:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POSTS_FITNESS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_ABOUT:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}