// pages/index.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import BankAccount from '../components/BankAccount';
import Transactions from '../components/Transactions';
import ConnectBank from '../components/ConnectBank';
import TransferFunds from '../components/TransferFunds';
import Sidebar from '../components/Sidebar';
import { MainContent } from '../components/MainContent';

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
  const [bankAccount, setBankAccount] = useState({
    bankName: 'Bank of Next.js',
    balance: 1234.56,
    accountNumber: '1234567890',
  });
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', amount: 50, date: '2024-01-01', description: 'Grocery Store' },
    { id: '2', amount: 100, date: '2024-01-02', description: 'Restaurant' },
    // Add more transactions as needed
  ]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <MainContent>
          <div className="section">
            <UserInfo name={user.name} email={user.email} />
          </div>
          <div className="section">
            <BankAccount
              bankName={bankAccount.bankName}
              balance={bankAccount.balance}
              accountNumber={bankAccount.accountNumber}
            />
          </div>
          <div className="section">
            <Transactions transactions={transactions} />
          </div>
          <div className="section">
            <ConnectBank />
          </div>
          <div className="section">
            <TransferFunds />
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default Home;
