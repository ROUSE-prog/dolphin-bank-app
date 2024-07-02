// components/BankAccount.tsx
import React from 'react';

interface BankAccountProps {
  bankName: string;
  balance: number;
  accountNumber: string;
}

const BankAccount: React.FC<BankAccountProps> = ({ bankName, balance, accountNumber }) => {
  return (
    <div className="bank-account">
      <h3>{bankName}</h3>
      <p>Balance: ${balance.toFixed(2)}</p>
      <p>Account Number: ****{accountNumber.slice(-4)}</p>
    </div>
  );
};

export default BankAccount;
