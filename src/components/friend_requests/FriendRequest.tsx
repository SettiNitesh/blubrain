// import ListTile from '../../shared/ListTile';

// const FriendRequests = () => {
//   return (
//     <div>
//       <ListTile
//         title={'hello'}
//         subTitle={
//           'this is subtitle this is subtitle this is subtitle this is subtitle this is subtitle this is subtitle'
//         }
//         trailingText="Follow"
//         leadingAvatarText="HC"
//         imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3itNxlM5gBRjiS9gYfcpxv0VKJFRFaGFlw&usqp=CAU"
//       />
//     </div>
//   );
// };

// export default FriendRequests;

import ListTile from '../../shared/ListTile';

const FriendRequests = () => {
  const friendRequestsData = [
    {
      title: 'hello',
      subTitle: 'this is subtitle this is subtitle this is subtitle this is subtitle this is subtitle this is subtitle',
      trailingText: 'Follow',
      leadingAvatarText: 'HC',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3itNxlM5gBRjiS9gYfcpxv0VKJFRFaGFlw&usqp=CAU',
    },
    {
      title: 'hey there',
      subTitle: 'another subtitle another subtitle another subtitle another subtitle another subtitle',
      trailingText: 'Follow',
      leadingAvatarText: 'AB',
      imageUrl: 'https://example.com/avatar2.jpg',
    },
    {
      title: 'greetings',
      subTitle: 'more subtitle more subtitle more subtitle more subtitle more subtitle more subtitle',
      trailingText: 'Follow',
      leadingAvatarText: 'DE',
      imageUrl: 'https://example.com/avatar3.jpg',
    },
    {
      title: 'hi',
      subTitle: 'additional subtitle additional subtitle additional subtitle additional subtitle',
      trailingText: 'Follow',
      leadingAvatarText: 'FG',
      imageUrl: 'https://example.com/avatar4.jpg',
    },
    {
      title: 'yo',
      subTitle: 'extra subtitle',
      trailingText: 'Follow',
      leadingAvatarText: 'HI',
      imageUrl: 'https://example.com/avatar5.jpg',
    },
  ];

  const renderFriendRequests = () => {
    return friendRequestsData.map((request, index) => (
      <ListTile
        key={index}
        title={request.title}
        subTitle={request.subTitle}
        trailingText={request.trailingText}
        leadingAvatarText={request.leadingAvatarText}
        imageUrl={request.imageUrl}
        trailingBtnStyle="text-blue-700"
      />
    ));
  };

  return <div>{renderFriendRequests()}</div>;
};

export default FriendRequests;
