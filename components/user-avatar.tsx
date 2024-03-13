import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type UserAvatarProps = {
  avatarUrl: string;
  fallback: string;
};

const UserAvatar = ({ avatarUrl, fallback }: UserAvatarProps) => {
  return (
    <Avatar className="cursor-pointer ">
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
