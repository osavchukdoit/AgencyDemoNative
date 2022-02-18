import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { utilityReducers } from "./reducers/utils";
import { pageDescReducer } from "./reducers/pageDesc";

const rootReducer = combineReducers({
  utils: utilityReducers,
  pageDesc: pageDescReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
