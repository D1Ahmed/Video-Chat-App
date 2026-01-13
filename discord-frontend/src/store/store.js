import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import authReducer from "./actions/reducers/authReducer";

// combineReducers takes all your individual reducers and merges them into one state tree
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
