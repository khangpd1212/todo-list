import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Auth from "./features/auth";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ManageTask from "./features/manage-task";
import ManageUser from "./features/user";
import ContainerLayout from "./layouts/ContainerLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <Navigate to="/login" /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <ContainerLayout />,
    children: [
      {
        path: "/manage-user",
        element: <ManageUser />,
      },
      {
        path: "/manage-task",
        element: <ManageTask />,
      },
    ],
  },
]);
export default router;
