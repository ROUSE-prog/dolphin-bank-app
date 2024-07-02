// components/Transactions.tsx
import React from 'react';

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <div className="transactions">
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.description}</p>
            <p>${transaction.amount.toFixed(2)}</p>
            <p>{transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
