// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #007bff;
  padding: 10px 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
      <Link href="/" passHref>
        <div className="navbar-brand">Dolphin Bank</div>
      </Link>
      <div className="profile">
        <img src="/profile-pic.jpg" alt="Profile" />
        <span>John Doe</span>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
