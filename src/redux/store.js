import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
const { createStore, applyMiddleware } = require("redux");

const middleWares = [];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

//To cache our store (this is optional, as per the use case)
export const persistor = persistStore(store);

//Commenting since now we are using persistStore by redux-persist
// export default store;

export default { store, persistor };
