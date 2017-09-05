import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostCreate from './components/post_create';
import PostDetail from './components/post_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route path="/posts/new" component={PostCreate} />
                      <Route path="/posts/:id" component={PostDetail} />
                      <Route path="/" component={PostsIndex} />
                  </Switch>
              </div>
          </BrowserRouter>
      </div>
  </Provider>
  , document.querySelector('.container'));
