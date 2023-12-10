import { Navigate, useLocation, Outlet } from "react-router-dom";
import { Dashboard } from "../components";

interface IProtectedRouteProps {
  isAuthenticated: boolean;
  redirectTo: string;
}

const ProtectedRoute = ({
  isAuthenticated,
  redirectTo,
}: IProtectedRouteProps) => {
  const location = useLocation();
  if (isAuthenticated) {
    return (
      <Dashboard>
        <Outlet />
      </Dashboard>
    );
  }
  return <Navigate to={redirectTo} state={{ ...location }} />;
};

export default ProtectedRoute;
