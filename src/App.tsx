import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./common/components/ProtectedRoute";
import Auth from "./features/auth";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ManageUser from "./features/user";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route
            path="/manage-user"
            element={
              <ProtectedRoute>
                <ManageUser />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
