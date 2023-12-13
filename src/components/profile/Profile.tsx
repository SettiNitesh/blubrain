import { Settings } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { BluBrainButton } from '../../shared';
import { IAction, ILabel, profileActionItems, profileDetails, profileHeaderButtons } from './ProfileItems';

const Profile = () => {
  return (
    <div className="bg-gray h-screen flex justify-center">
      {/* This section is Profile Pic of a user */}
      <div className="flex w-[40%] justify-center pt-10">
        <Avatar src="/images/logo.png" sx={{ width: 200, height: 200 }} />
      </div>
      {/* This is the Header for the Profile with username and Actions */}
      <div className="w-[60%] pt-4">
        <div className="flex items-center">
          <p className="font-semibold  text-3xl font-cormorant pr-3">me.niteshvikram</p>
          {Object.values(profileHeaderButtons).map((button, index) => {
            return (
              <BluBrainButton
                key={`${button.title}-${index}`}
                title={button.title}
                onClick={() => null}
                styles="rounded-[0.5rem] bg-green text-[0.9rem] px-[1rem] mx-1 tracking-wider opacity-90"
              />
            );
          })}
          <IconButton aria-label="delete" size="large">
            <Settings />
          </IconButton>
        </div>
        {/* Posts Count , Followers Count , Following Count */}
        <div className="flex justify-start gap-x-7 pt-3">
          {Object.values(profileActionItems).map((actionItem: IAction, index) => {
            return (
              <div key={`${actionItem.key}-${index}`} className="cursor-pointer">
                <p className="mr-1">{actionItem.count}</p>
                <p className="font-cormorant  text-xl">{actionItem.title}</p>
              </div>
            );
          })}
        </div>
        {/* Details Part which includes Name , Education , profession Etc .. */}
        <div className="flex  flex-col justify-start items-start pt-3">
          <p className="text-[1.3rem] font-semibold pt-1 pb-1">Nitesh Vikram Setti</p>
          {Object.values(profileDetails).map((profile: ILabel, index) => {
            return (
              profile.title && (
                <p key={`${profile.title}-${index}`} className="text-[1rem]  pt-1">
                  {profile.title}
                </p>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
