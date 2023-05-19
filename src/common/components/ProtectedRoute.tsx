import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
type Props = {
  children: JSX.Element;
};
export const ProtectedRoute = ({ children }: Props) => {
  const { checkToken } = useUser();
  if (!checkToken()) {
    return <Navigate to="/" />;
  }
  return children;
};
