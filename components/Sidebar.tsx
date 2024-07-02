// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link href="/banks/my-banks">
            My Banks
          </Link>
        </li>
        <li>
          <Link href="/transactions/history">
            Transaction History
          </Link>
        </li>
        <li>
          <Link href="/transfer">
            Transfer Funds
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
