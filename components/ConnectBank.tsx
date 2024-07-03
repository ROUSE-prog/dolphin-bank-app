// components/ConnectBank.tsx
import React, { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import styled from 'styled-components';

const ConnectBankContainer = styled.div`
  margin-top: 20px;
`;

const ConnectBankButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
`;

const AccountDataContainer = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

const ConnectBank: React.FC = () => {
  const [linkToken, setLinkToken] = useState('');
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch('/api/create-link-token');
      const data = await response.json();
      setLinkToken(data.link_token);
    };

    createLinkToken();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      const response = await fetch('/api/exchange-public-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_token }),
      });
      const data = await response.json();
      const { access_token } = data;

      const accountResponse = await fetch('/api/get-bank-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ access_token }),
      });
      const accountData = await accountResponse.json();
      setAccountData(accountData);
    },
  });

  return (
    <ConnectBankContainer>
      <ConnectBankButton onClick={() => open()} disabled={!ready}>
        Connect your bank account
      </ConnectBankButton>
      {accountData && (
        <AccountDataContainer>
          <h3>Bank Account Information</h3>
          <pre>{JSON.stringify(accountData, null, 2)}</pre>
        </AccountDataContainer>
      )}
    </ConnectBankContainer>
  );
};

export default ConnectBank;
