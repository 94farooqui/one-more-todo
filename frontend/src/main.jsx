import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TaskDetailsContextProivder from "./context/TaskDetailsContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskDetailsContextProivder>
      <App  />
    </TaskDetailsContextProivder>
  </React.StrictMode>
);
