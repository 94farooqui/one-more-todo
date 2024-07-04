import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TaskDetailsContextProivder from "./context/TaskDetailsContext.jsx";
import "./index.css";
import RootContextProvider from "./context/RootContextProvider.jsx";
import TaskProvider from "./context/TaskContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import CurrentTaskContextProvider from "./context/CurrentTaskContext.jsx";
import NewTaskContextProvider from "./context/NewTaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TaskProvider>
        <TaskDetailsContextProivder>
          <CurrentTaskContextProvider>
            <NewTaskContextProvider>
              <App />
            </NewTaskContextProvider>
          </CurrentTaskContextProvider>
        </TaskDetailsContextProivder>
      </TaskProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
