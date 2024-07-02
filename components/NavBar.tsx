// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Dolphin Bank
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
