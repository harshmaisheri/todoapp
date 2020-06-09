import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "./reducers";
import { reducer as formReducer } from "redux-form";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};

const rootReducer = combineReducers({
  todo: todoReducer,
  form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
