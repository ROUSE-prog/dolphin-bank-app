// pages/api/get-bank-account.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import plaidClient from '../../utils/plaid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = req.body;

  try {
    const response = await plaidClient.authGet({ access_token });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
}
