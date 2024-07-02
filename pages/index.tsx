// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import UserInfo from '../components/UserInfo';
import BankAccount from '../components/BankAccount';
import Transactions from '../components/Transactions';

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState({ name: 'Alexa Leoto', email: 'AlBeDamned@meBeingSuchaHotAssBitch.com' });
  const [bankAccount, setBankAccount] = useState({
    bankName: 'Bank of Next.js',
    balance: 12340000000.56,
    accountNumber: '1234567890'
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
        <UserInfo name={user.name} email={user.email} />
        <BankAccount
          bankName={bankAccount.bankName}
          balance={bankAccount.balance}
          accountNumber={bankAccount.accountNumber}
        />
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
