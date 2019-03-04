/* eslint-disable no-underscore-dangle */
/**
 * Store configuration
 */
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

const args = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = rootReducer => {
  const store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(...args)),
  );
  return store;
};
/* eslint-enable */

export default configureStore;
