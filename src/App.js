import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/reducer";
import MainRoute from "./routes/MainRoute";
import allSagas from "./saga/allSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

allSagas.map(saga => sagaMiddleware.run(saga));

function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}

export default App;
