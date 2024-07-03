// pages/api/initiate-transfer.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dwollaClient from '../../utils/dwolla';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { source, destination, amount } = req.body;

  try {
    const transfer = await dwollaClient.post('transfers', {
      _links: {
        source: {
          href: source,
        },
        destination: {
          href: destination,
        },
      },
      amount: {
        currency: 'USD',
        value: amount,
      },
    });
    res.json(transfer.body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
}
