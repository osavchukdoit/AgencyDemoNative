import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { utilityReducers } from "./reducers/utils";

const rootReducer = combineReducers({
  utils: utilityReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
