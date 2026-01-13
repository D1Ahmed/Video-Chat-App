import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. Wrap your App in the Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
