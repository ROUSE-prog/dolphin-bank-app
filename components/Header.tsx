// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-secondary py-4">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Dolphin Bank
        </Link>
        <nav className="space-x-4">
          <Link href="/banks" className="text-accent hover:text-primary">
            Banks
          </Link>
          <Link href="/transfer" className="text-accent hover:text-primary">
            Transfer Funds
          </Link>
          <Link href="/connect" className="text-accent hover:text-primary">
            Connect to Plaid
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
