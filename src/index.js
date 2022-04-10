import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./component/reducer";
import { StateProvider } from "./component/StateProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
