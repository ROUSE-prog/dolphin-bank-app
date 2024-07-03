// pages/transfer.tsx
import React from 'react';

const Transfer: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Transfer Funds</h1>
      <form className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="recipient">
            Recipient Account Number
          </label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
