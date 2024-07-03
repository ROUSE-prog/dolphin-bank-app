// pages/api/create-customer.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dwollaClient from '../../utils/dwolla';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email } = req.body;

  try {
    const customer = await dwollaClient.post('customers', {
      firstName,
      lastName,
      email,
      type: 'receive-only',
    });
    res.json(customer.body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
}
