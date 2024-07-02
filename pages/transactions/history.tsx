// pages/transactions/history.tsx
import React, { useState, useEffect } from 'react';
import { databases } from '../../utils/appwrite';
import { Transactions } from '../../components/Transactions';

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

const TransactionHistoryPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await databases.listDocuments(
          'databaseId', // replace with your database ID
          'collectionId', // replace with your collection ID for transactions
        );
        setTransactions(response.documents);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      {transactions.length > 0 ? (
        <Transactions transactions={transactions} />
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionHistoryPage;
