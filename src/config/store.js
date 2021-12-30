import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);

const composeE =  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
  rootReducer,
  composeE(applyMiddleware(thunk))
);