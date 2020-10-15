import React from "react";
import ReactDOM from "react-dom";

//Importing Components
import App from "./components/App/App";

//Importing Redux stuff
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

//Importing Redux Saga Middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

//Importing Axios
import axios from "axios";

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
  combineReducers({ search: searchReducer, favorites: favoritesReducer }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

function* rootSaga() {
  yield takeEvery("GET_SEARCH", fetchSearchSaga);
  yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
  yield takeEvery("DELETE_FAVORITE", deleteFavoriteSaga);
  yield takeEvery("GET_FAVORITES", fetchFavoriteSaga);
}

function* addFavoriteSaga(action) {
  try {
    const response = yield axios.post("/api/favorite", action.payload);
    yield put({ type: "SET_SEARCH", payload: response.data });
  } catch (err) {
    alert("Unable to add gif to favorites.");
  }
}

function* fetchFavoriteSaga(action) {
  try {
    const response = yield axios.get("/api/favorite", {
      searchParam: action.payload,
    });

    yield put({ type: "GET_FAVORITES", payload: response.data });
  } catch (err) {
    alert("Unable to get GIFS from the server");
  }
}

function* fetchSearchSaga(action) {
  try {
    console.log("payload in fetchSearchSaga", action.payload);
    const response = yield axios.post("/api/search", action.payload);
    yield put({ type: "SET_SEARCH", payload: response.data });
  } catch (err) {
    alert("Unable to get GIFS from the server", err);
  }
}

function* deleteFavoriteSaga(action) {
  try {
    const response = yield axios.delete(`api/favorite/${action.payload}`);
    yield put({ type: "GET_FAVORITES", payload: response.data });
  } catch (err) {
    alert("Unable to remove gif from favorites");
  }
}

//Blaine hack
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
