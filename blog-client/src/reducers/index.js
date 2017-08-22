import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import UserReducer from './reducer_user';
import SidebarReducer from './reducer_sidebar';
import RecentReducer from './reducer_recent';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  user: UserReducer,
  sidebar: SidebarReducer,
  recent: RecentReducer
});

export default rootReducer;
