import { AppPath } from '../../routes/RouteNames';

const leftbarMenuItems = [
  {
    id: 1,
    label: 'Home',
    active: false,
    path: AppPath.home,
    subPaths: [AppPath.friendRequest],
  },
  {
    id: 2,
    label: 'Search',
    active: false,
    path: AppPath.search,
    subPaths: [],
  },
  {
    id: 3,
    label: 'Explore',
    active: false,
    path: AppPath.explore,
    subPaths: [],
  },
  {
    id: 4,
    label: 'Chats',
    active: false,
    path: AppPath.messages,
    subPaths: [],
  },
  {
    id: 5,
    label: 'Notifications',
    active: false,
    path: AppPath.notifications,
    subPaths: [],
  },
  {
    id: 6,
    label: 'Create',
    active: false,
    path: AppPath.create,
    subPaths: [],
  },
  {
    id: 7,
    label: 'Profile',
    active: false,
    path: AppPath.profile,
    subPaths: [],
  },
];
export default leftbarMenuItems;
export { leftbarMenuItems };
