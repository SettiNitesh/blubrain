export interface IUser {
  uid: string;
  email: string;
  username: string;
  authorization: string;
  hospitalId: string;
  name: string;
  bio: string;
  profilePic: string;
  education: string;
  profession: string;
  college: string;
  place: string;
  followersCount: number;
  followingCount: number;
  blockedCount: number;
  amIFollowing: boolean;
  refreshToken: string;
}
