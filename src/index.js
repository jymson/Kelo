import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Homepage from './components/homepage';
import Shareketo from './components/shareketo';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/shareketo" component={Shareketo}/>
          <Route path="/" component={Homepage}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
