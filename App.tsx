import React from 'react';
import { createStore, combineReducers, applyMiddleware}from "redux"
import {Provider } from "react-redux"
import ReduxThunk from "redux-thunk";

import Navigator from './navigators/MainNavigator';

// const rootReducer = combineReducers({

// })

// const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const App: () => any = () => {
  return <Navigator />
  // <Provider store={store}>
  // </Provider>
};

export default App;
