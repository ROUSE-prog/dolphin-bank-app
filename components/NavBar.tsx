// components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 10px 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .profile img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div className="navbar-brand">Dolphin Bank</div>
      <div className="profile">
        <img src="/profile-pic.jpg" alt="Profile" />
        <span>John Doe</span>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
