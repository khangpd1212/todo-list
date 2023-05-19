import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./common/components/ProtectedRoute";
import Auth from "./features/auth";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ManageUser from "./features/user";
import ContainerLayout from "./layouts/ContainerLayout";
import { store } from "./store/store";
import ManageTask from "./features/manage-task";
import { useEffect } from "react";
import { useUser } from "./common/hooks/useUser";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route path="/" element={<ContainerLayout />}>
            <Route
              path="/manage-user"
              element={
                <ProtectedRoute>
                  <ManageUser />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/manage-task"
              element={
                <ProtectedRoute>
                  <ManageTask />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
