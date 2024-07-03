// pages/api/exchange-public-token.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import plaidClient from '../../utils/plaid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { public_token } = req.body;

  try {
    const tokenResponse = await plaidClient.itemPublicTokenExchange({ public_token });
    res.json(tokenResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
}
