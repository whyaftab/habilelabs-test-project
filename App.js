import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import HomeScreen from "./src/screens/HomeScreen";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
