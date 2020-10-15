import React from "react";
import ReactDOM from "react-dom";

//Importing Components
import App from "./components/App/App";

//Importing Redux stuff
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleWare } from "redux";
import logger from "redux-logger";

//Importing Redux Saga Middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

//Importing Axios
import axios from "axios";

function* rootSaga() {}

//Placing our reducers
const searchReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

const favoritesReducer = (state = null, action) => {
  if (action.type === "") {
    return action.payload;
  }
  return state;
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({}),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

//Blaine hack
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
