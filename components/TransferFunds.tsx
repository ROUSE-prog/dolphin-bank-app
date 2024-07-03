// components/TransferFunds.tsx
import React, { useState } from 'react';

const TransferFunds: React.FC = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/initiate-transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source, destination, amount }),
      });
      const data = await response.json();
      console.log('Transfer successful:', data);
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Source URL"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destination URL"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferFunds;
