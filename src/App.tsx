import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { AppPath, ProtectedRoute, PublicRoutes, PrivateRoutes } from "./routes";
import { IRouteConfig } from "./routes/RouteConfig";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const location = useLocation();
  const isAuthenticated = false;

  const presistedPath = location.state?.pathname
    ? `${location.state.pathname}${location.state.search}`
    : AppPath.home;

  const isPublicRoute = (pathname: string) => {
    return PublicRoutes.some((route) => pathname.startsWith(route.path));
  };

  const renderRoutes = (routes: IRouteConfig[]): React.ReactElement[] => {
    return routes.map((route: IRouteConfig) => {
      const { path, component: Component } = route;

      const element = <Route key={path} path={path} element={<Component />} />;

      return element;
    });
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
      />

      <Routes>
        {/* when logged in user try to access public routes */}
        {/* when url is shared with someone and after he logged in it should redirect to the same url */}

        {isAuthenticated && isPublicRoute(location.pathname) ? (
          <Route path="*" element={<Navigate to={presistedPath} replace />} />
        ) : (
          <>
            {/* protected routes */}
            <Route
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirectTo="/login"
                />
              }
            >
              {renderRoutes(PrivateRoutes)}
            </Route>

            {/* public routes */}
            {renderRoutes(PublicRoutes)}

            {/* For wild case */}
            <Route
              path="*"
              element={
                <Navigate
                  to={isAuthenticated ? AppPath.home : AppPath.login}
                  replace
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
