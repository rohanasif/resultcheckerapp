import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];

const reducer = combineReducers({ rootReducer });

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
