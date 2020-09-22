import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

/**
 * For redux-persist
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //reducer name in string which we want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

/**
 * Not exporting anymore since we are using redux-persist
 */
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });
