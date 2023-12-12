import { Home } from '../../components';
import ListTile from '../../shared/ListTile';
import { FriendRequestContainer } from '../requests';

const HomeContainer = () => {
  return (
    <div className="flex h-screen w-[calc(100vh - 20rem)]">
      <div className="w-[70%] p-4">
        <Home />
      </div>
      <div className="w-[30%] h-full pr-6 pt-10">
        <div className="flex w-full">
          <ListTile
            title={'ironman3000'}
            subTitle={'Tony Stark'}
            trailingText={'switch'}
            leadingAvatarText={'GR'}
            imageUrl={'https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg'}
            size="lg"
            trailingBtnStyle="text-blue-700"
          />
        </div>
        <FriendRequestContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
