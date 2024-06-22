import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TaskDetailsContextProivder from "./context/TaskDetailsContext.jsx";
import "./index.css";
import RootContextProvider from "./context/RootContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContextProvider>
      <App  />
    </RootContextProvider>
  </React.StrictMode>
);
