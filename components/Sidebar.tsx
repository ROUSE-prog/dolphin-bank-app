// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaHome, FaMoneyCheckAlt, FaExchangeAlt } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  background-color: #343a40;
  padding: 20px;
  width: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
    width: 100%;
  }

  li {
    width: 100%;
    margin-bottom: 10px;
  }

  .link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .link:hover {
    background-color: #495057;
  }

  svg {
    margin-right: 10px;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link href="/banks/my-banks" passHref>
            <div className="link">
              <FaHome />
              My Banks
            </div>
          </Link>
        </li>
        <li>
          <Link href="/transactions/history" passHref>
            <div className="link">
              <FaMoneyCheckAlt />
              Transaction History
            </div>
          </Link>
        </li>
        <li>
          <Link href="/transfer" passHref>
            <div className="link">
              <FaExchangeAlt />
              Transfer Funds
            </div>
          </Link>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
