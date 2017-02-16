
import React, { Component } from 'react';
import {createStore, combineReducers,applyMiddleware,compose } from 'redux';
import { Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from '../reducers';
import Component_1 from '../components/Component_1';
const reducer = combineReducers(reducers);

const store = compose(applyMiddleware(thunkMiddleware))(createStore)(reducer);
//const store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default class App extends Component {
  render() {
	  console.log("App store ",applyMiddleware);
    return (
      <div>
        <Provider store={store}>
          {() => <Component_1 /> }
        </Provider>
      </div>
    );
  }
}

