// Import modules:
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./services/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Render React application in "root" element using React Router.
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
