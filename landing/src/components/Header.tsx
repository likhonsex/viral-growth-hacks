import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Viral Growth Toolkit
            </Link>
          </div>
          <nav>
            <Link href="/" className="mx-2 text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="mx-2 text-gray-800 hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="mx-2 text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
