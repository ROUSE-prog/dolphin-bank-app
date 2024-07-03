# Dolphin Bank 🐬🏦

Dolphin Bank is a modern banking application designed to provide a seamless and secure banking experience. Built using Next.js, React, and TypeScript, Dolphin Bank integrates with Appwrite, Dwolla, and Plaid to offer robust backend services and financial functionalities.

![Dolphin Bank](path/to/your/banner/image.png)

## Features

- **User Authentication**: Secure user authentication using Appwrite.
- **Bank Account Integration**: Connect multiple bank accounts with Plaid.
- **Fund Transfers**: Transfer funds between users using Dwolla.
- **Real-time Transactions**: View real-time transaction data.
- **Transaction History**: Access detailed transaction history and spending categories.
- **Secure & Scalable**: Enhanced security with Sentry and scalable architecture.

## Getting Started

Follow these instructions to set up and run the Dolphin Bank app locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite account
- Dwolla account
- Plaid account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ROUSE-prog/DolphinBank.git
    cd DolphinBank
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    Create a `.env.local` file in the root directory and add your environment variables:
    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
    NEXT_PUBLIC_APPWRITE_PROJECT=your-appwrite-project-id
    NEXT_PUBLIC_PLAID_CLIENT_ID=your-plaid-client-id
    NEXT_PUBLIC_PLAID_SECRET=your-plaid-secret
    NEXT_PUBLIC_DWOLLA_KEY=your-dwolla-key
    NEXT_PUBLIC_DWOLLA_SECRET=your-dwolla-secret
    ```

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### Deployment

To deploy the app to a production environment:

1. Build the app:
    ```bash
    npm run build
    # or
    yarn build
    ```

2. Start the production server:
    ```bash
    npm start
    # or
    yarn start
    ```

### Folder Structure

```plaintext
DolphinBank/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── hooks/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
└── README.md
