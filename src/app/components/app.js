import React, { useState } from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import { ROUTE_CHANGE } from "../actions"
import AppContainer from "./appContainer";
import { getSessionData } from "../utils";

const initialState = {
  payload: {
    route: "/" || getSessionData("path")
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ROUTE_CHANGE:
      const { route = "/" } = action.payload;
      return {
        route: route
      };
    default:
      return { route };
  }
}

const store = createStore(reducer);

const App = () => {
 
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

export default App;