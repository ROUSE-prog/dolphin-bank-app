// components/UserInfo.tsx
import React from 'react';

interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <div className="user-info">
      <h2>Welcome, {name}!</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;
