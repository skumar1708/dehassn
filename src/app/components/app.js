import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import Form from "./Form";

const initialState = {
  route: "/" || window.location.pathname
};

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

const App = (props) => {
  console.log("store  are", store.getState().route);
  const currRoute = store.getState().route;
  let contentJSX = <Form />;
  switch (currRoute) {
    case "/":
      contentJSX = <Form />;
      break;
    case "/dashboard":
      contentJSX = <Dashboard />;
      break;
    default:
      contentJSX = <Form />;
      break;
  }

  return (
    <Provider store={store}>
      {contentJSX}
    </Provider>
  );
}

export default App;