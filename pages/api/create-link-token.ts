// pages/api/create-link-token.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import plaidClient from '../../utils/plaid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const configs = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: 'unique_user_id',
    },
    client_name: 'Dolphin Bank',
    products: ['auth', 'transactions'],
    country_codes: ['US'],
    language: 'en',
  };

  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(configs);
    res.json(createTokenResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
}
