export interface ILabel {
  title: string;
}

export interface IAction {
  key: string;
  count: number;
  title: string;
}

interface IProfileButtons {
  editProfile: ILabel;
  shareProfile: ILabel;
  contact: ILabel;
}

export interface IProfileActions {
  posts: IAction;
  followers: IAction;
  following: IAction;
}

interface IprofileDetails {
  dob: ILabel;
  bio: ILabel;
  profilePic: ILabel;
  education: ILabel;
  profession: ILabel;
  college: ILabel;
  place: ILabel;
}

const profileHeaderButtons: IProfileButtons = {
  editProfile: {
    title: 'Edit profile',
  },
  shareProfile: {
    title: 'Share profile',
  },
  contact: {
    title: 'Contact',
  },
};

const profileActionItems: IProfileActions = {
  posts: {
    key: 'posts',
    count: 3,
    title: 'post',
  },
  followers: {
    key: 'followers',
    count: 169,
    title: 'followers',
  },
  following: {
    key: 'following',
    count: 1456,
    title: 'following',
  },
};

const profileDetails: IprofileDetails = {
  dob: {
    title: '15-03-2001',
  },
  profilePic: {
    title: '',
  },
  education: {
    title: 'B.Tech CSE',
  },
  profession: {
    title: 'Doctor',
  },
  college: {
    title: 'Sasi Institute of Engineering & Technology',
  },
  place: {
    title: 'TadepalliGudem (West Godavari)',
  },
  bio: {
    title: 'I am a Enthusiastic Developer in Flutter  With more skills and lot more .',
  },
};

export { profileActionItems, profileDetails, profileHeaderButtons };
