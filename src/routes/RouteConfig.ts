import { Home } from "../components";
import { SignInContainer, SignUpContainer } from "../containers";
import { AppPath } from "./RouteNames";

export interface IRouteConfig {
  path: string;
  component: React.ComponentType;
  subRoutes?: IRouteConfig[];
}

const PrivateRoutes: IRouteConfig[] = [
  {
    path: AppPath.home,
    component: Home,
  },
];

const PublicRoutes: IRouteConfig[] = [
  {
    path: AppPath.login,
    component: SignInContainer,
  },
  {
    path: AppPath.signup,
    component: SignUpContainer,
  },
];

export { PrivateRoutes, PublicRoutes };
