import React, { useState } from "react";
import { Provider } from "react-redux";

import BaseStackNavigator from "./navigation/BaseStackNavigator";
import store from "./state";

export default function App() {
  return (
    <Provider store={store}>
       <BaseStackNavigator /> 
     
    </Provider>
  );
}
