import { ComingSoon } from '../components';
import { HomeContainer, ProfileContainer, SignInContainer, SignUpContainer } from '../containers';
import { AppPath } from './RouteNames';

export interface IRouteConfig {
  path: string;
  component: React.ComponentType;
  subRoutes?: IRouteConfig[];
  children?: IRouteConfig[]; //For adding nested routes using interface.
}

const PrivateRoutes: IRouteConfig[] = [
  {
    path: AppPath.home,
    component: HomeContainer,
  },
  {
    path: AppPath.search,
    component: ComingSoon,
  },
  {
    path: AppPath.explore,
    component: ComingSoon,
  },
  {
    path: AppPath.messages,
    component: ComingSoon,
  },
  {
    path: AppPath.notifications,
    component: ComingSoon,
  },
  {
    path: AppPath.create,
    component: ComingSoon,
  },
  {
    path: AppPath.profile,
    component: ProfileContainer,
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
