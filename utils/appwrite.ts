// utils/appwrite.ts
import { Client, Account, Databases } from 'appwrite';

const client = new Client();
client.setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]').setProject('YOUR_PROJECT_ID');

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
