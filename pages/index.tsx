// pages/index.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import BankAccount from '../components/BankAccount';
import Transactions from '../components/Transactions';
import ConnectBank from '../components/ConnectBank';
import TransferFunds from '../components/TransferFunds';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

const Home: React.FC = () => {
  const [user] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
  const [bankAccount] = useState({
    bankName: 'Bank of Next.js',
    balance: 1234.56,
    accountNumber: '1234567890',
  });
  const [transactions] = useState<Transaction[]>([
    { id: '1', amount: 50, date: '2024-01-01', description: 'Grocery Store' },
    { id: '2', amount: 100, date: '2024-01-02', description: 'Restaurant' },
    // Add more transactions as needed
  ]);

  return (
    <div>
      <Navbar />
      <div className="container flex">
        <Sidebar />
        <MainContent>
          <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg mb-5">
            <UserInfo name={user.name} email={user.email} />
          </div>
          <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg mb-5">
            <BankAccount
              bankName={bankAccount.bankName}
              balance={bankAccount.balance}
              accountNumber={bankAccount.accountNumber}
            />
          </div>
          <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg mb-5">
            <Transactions transactions={transactions} />
          </div>
          <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg mb-5">
            <ConnectBank />
          </div>
          <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg mb-5">
            <TransferFunds />
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default Home;
