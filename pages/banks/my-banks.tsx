// pages/banks/my-banks.tsx
import React, { useState, useEffect } from 'react';
import { account, databases } from '../../utils/appwrite';
import { BankAccount } from '../../components/BankAccount';

interface BankAccountInfo {
  bankName: string;
  balance: number;
  accountNumber: string;
}

const MyBanksPage: React.FC = () => {
  const [bankAccounts, setBankAccounts] = useState<BankAccountInfo[]>([]);

  useEffect(() => {
    const fetchBankAccounts = async () => {
      try {
        const response = await databases.listDocuments(
          'databaseId', // replace with your database ID
          'collectionId', // replace with your collection ID for bank accounts
        );
        setBankAccounts(response.documents);
      } catch (error) {
        console.error('Failed to fetch bank accounts:', error);
      }
    };

    fetchBankAccounts();
  }, []);

  return (
    <div>
      <h1>My Banks</h1>
      {bankAccounts.length > 0 ? (
        bankAccounts.map((account) => (
          <BankAccount
            key={account.accountNumber}
            bankName={account.bankName}
            balance={account.balance}
            accountNumber={account.accountNumber}
          />
        ))
      ) : (
        <p>No bank accounts connected.</p>
      )}
    </div>
  );
};

export default MyBanksPage;
