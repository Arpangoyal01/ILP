import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";

// Redux store
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux available globally */}
    <Provider store={store}>
      {/* Router available globally */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
