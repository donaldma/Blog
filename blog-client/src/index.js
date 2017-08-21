import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PostsBeauty from './components/posts_beauty';
import PostsFashion from './components/posts_fashion';
import PostsTravel from './components/posts_travel';
import PostsFitness from './components/posts_fitness';
import AboutMe from './components/about_me';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/category/beauty" component={PostsBeauty} />
          <Route path="/category/fashion" component={PostsFashion} />
          <Route path="/category/travel" component={PostsTravel} />
          <Route path="/category/fitness" component={PostsFitness} />
          <Route path="/category/about" component={AboutMe} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
</Provider>
, document.getElementById('react-root'));
