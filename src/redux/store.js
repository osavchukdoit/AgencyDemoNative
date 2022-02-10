import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducers from "./login/loginReducers";

const rootReducer = combineReducers({
  login: loginReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
