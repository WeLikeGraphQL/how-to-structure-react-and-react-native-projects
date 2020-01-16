import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import videoReducer from "@graphan/components/video/reducer";

const initialState = {};

const initializeStore = (preloadedState = initialState) => {
  return createStore(
    videoReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};

let reduxStore;
export const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === "undefined") {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};
