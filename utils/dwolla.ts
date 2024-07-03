// utils/dwolla.ts
import Dwolla from 'dwolla-v2';

const dwollaClient = new Dwolla.Client({
  key: process.env.DWOLLA_APP_KEY,
  secret: process.env.DWOLLA_APP_SECRET,
  environment: 'sandbox', // Use 'production' for live environment
});

export default dwollaClient;
