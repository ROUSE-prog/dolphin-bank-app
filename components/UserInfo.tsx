// components/UserInfo.tsx
import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  .info {
    font-size: 16px;
  }

  .name {
    font-weight: bold;
    font-size: 18px;
  }
`;

interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <UserInfoContainer>
      <img src="/profile-pic.jpg" alt="Profile" />
      <div className="info">
        <div className="name">{name}</div>
        <div>{email}</div>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
