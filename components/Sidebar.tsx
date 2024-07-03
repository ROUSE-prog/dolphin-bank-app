// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { FaHome, FaMoneyCheckAlt, FaExchangeAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white bg-opacity-20 shadow-md backdrop-blur-lg p-5 w-64 text-white flex flex-col items-center border-r border-white border-opacity-30">
      <ul className="w-full">
        <li className="mb-2 w-full">
          <Link href="/banks/my-banks" passHref>
            <div className="flex items-center p-3 rounded-md hover:bg-white hover:bg-opacity-30 transition">
              <FaHome className="mr-2" />
              My Banks
            </div>
          </Link>
        </li>
        <li className="mb-2 w-full">
          <Link href="/transactions/history" passHref>
            <div className="flex items-center p-3 rounded-md hover:bg-white hover:bg-opacity-30 transition">
              <FaMoneyCheckAlt className="mr-2" />
              Transaction History
            </div>
          </Link>
        </li>
        <li className="mb-2 w-full">
          <Link href="/transfer" passHref>
            <div className="flex items-center p-3 rounded-md hover:bg-white hover:bg-opacity-30 transition">
              <FaExchangeAlt className="mr-2" />
              Transfer Funds
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
