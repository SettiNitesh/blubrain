import Avatar from '@mui/joy/Avatar';
import { isEqual } from '../utils/helper';

interface IListTileProps {
  title: string;
  subTitle: string;
  titleStyle?: string;
  subTitleStyle?: string;
  imageUrl?: string;
  parentStyle?: string;
  leadingAvatarText?: string;
  trailingText?: string;
  timeStamp?: string;
  isFollowing?: boolean;
  trailingBtnStyle?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'requests' | 'post-header';
  onTrailingBtnClicked?: () => void;
}

const ListTile = ({
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  imageUrl,
  type = 'requests',
  timeStamp,
  isFollowing = false,
  leadingAvatarText,
  trailingText,
  trailingBtnStyle,
  parentStyle,
  size = 'md',
  onTrailingBtnClicked,
}: IListTileProps) => {
  return (
    <main className={`flex flex-row items-center w-full p-1 ${parentStyle}`}>
      <section className="flex justify-start items-center w-full">
        {/* Avatar */}
        <Avatar variant="outlined" size={size} src={imageUrl}>
          {leadingAvatarText}
        </Avatar>

        {isEqual(type, 'requests') && (
          <>
            {/* Title and SubTitle */}
            <section className="flex flex-col items-start justify-start px-2 w-3/4">
              <p className={`flex w-full font-semibold text-sm ${titleStyle} truncate`}>{title}</p>
              <span className="flex w-full">
                <p className={`w-auto text-xs ${subTitleStyle} truncate`}>{subTitle}</p>
              </span>
            </section>
            {/* Button Section */}
            <section className="flex w-auto justify-end">
              <button onClick={onTrailingBtnClicked} className={`w-full ${trailingBtnStyle} text-sm`}>
                {trailingText}
              </button>
            </section>
          </>
        )}
      </section>
    </main>
  );
};

export default ListTile;
