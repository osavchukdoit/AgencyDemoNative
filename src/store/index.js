import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { utilityReducers } from "./reducers/utils";
import { pageDescReducer } from "./reducers/pageDesc";
import { userReducer } from "./reducers/user";
import { domainModelReducer } from "./reducers/domain";
import { flashMessagesReducers } from "./reducers/flashMessages";

const rootReducer = combineReducers({
  utils: utilityReducers,
  pageDesc: pageDescReducer,
  user: userReducer,
  domain: domainModelReducer,
  flashMessages: flashMessagesReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
