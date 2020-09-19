import logger from "redux-logger";

import rootReducer from "./root-reducer";
const { createStore, applyMiddleware } = require("redux");

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
