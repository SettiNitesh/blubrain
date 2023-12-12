import { FriendRequests } from '../../components';

const FriendRequestContainer = () => {
  return (
    <div className="w-full h-full items-start justify-start">
      <div className="flex justify-between mb-2">
        <p className="text-md font-semibold text-gray-500">Suggested For You</p>
        <p className="text-sm">See All</p>
      </div>
      <FriendRequests />
    </div>
  );
};

export default FriendRequestContainer;
