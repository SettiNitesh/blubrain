import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkPath } from '../../utils/helper';

import {
  AccountCircle,
  AccountCircleOutlined,
  Create,
  CreateOutlined,
  Explore,
  ExploreOutlined,
  Home,
  HomeOutlined,
  Message,
  MessageOutlined,
  Notifications,
  NotificationsNoneOutlined,
  Search,
  SearchOutlined,
} from '@mui/icons-material';

import { LeftNavbar } from '../../components';
import leftbarMenuItems from './LeftNavbarMenuItems';

const LeftNavBarContainer = () => {
  const [menuOptions, setMenuOption] = useState(leftbarMenuItems);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenuOption((prevOptions) => {
      const updatedOptions = prevOptions.map((option) => {
        return {
          ...option,
          active:
            option.path === checkPath(location.pathname) || option.subPaths.includes(checkPath(location.pathname)),
        };
      });

      return updatedOptions;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleMenuItemClick = (itemId: number) => {
    const updatedOptions = menuOptions.map((option) => {
      if (option.id === itemId) {
        navigate(option.path);
        return { ...option, active: true };
      }
      return { ...option, active: false };
    });
    setMenuOption(updatedOptions);
  };

  const getIconByLabel = (label: string, isActive: boolean): React.ReactNode => {
    switch (label.toUpperCase()) {
      case 'HOME':
        return isActive ? <Home /> : <HomeOutlined className="rounded" />;
      case 'SEARCH':
        return isActive ? <Search /> : <SearchOutlined />;
      case 'EXPLORE':
        return isActive ? <Explore /> : <ExploreOutlined />;
      case 'CHATS':
        return isActive ? <Message /> : <MessageOutlined />;
      case 'NOTIFICATIONS':
        return isActive ? <Notifications /> : <NotificationsNoneOutlined />;
      case 'CREATE':
        return isActive ? <Create /> : <CreateOutlined />;
      case 'PROFILE':
        return isActive ? <AccountCircle /> : <AccountCircleOutlined />;
      default:
        return null;
    }
  };

  return (
    <LeftNavbar menuOptions={menuOptions} handleMenuItemClick={handleMenuItemClick} getIconByLabel={getIconByLabel} />
  );
};

export default LeftNavBarContainer;
