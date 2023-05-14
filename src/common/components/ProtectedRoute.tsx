import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
type Props = {
  children: JSX.Element;
};
export const ProtectedRoute = ({ children }: Props) => {
  const { getUser } = useUser();
  const user = getUser()
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
