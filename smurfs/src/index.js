// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";
// import { applyMiddleware, createStore } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { SmurfReducer } from "./reducers"

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { SmurfReducer } from "./reducers"


const store = createStore(SmurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App />, </Provider>, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root"));