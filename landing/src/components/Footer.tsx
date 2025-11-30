import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Viral Growth Toolkit. All rights reserved.</p>
          <div>
            <Link href="/" className="mx-2 hover:text-gray-400">Home</Link>
            <Link href="/about" className="mx-2 hover:text-gray-400">About</Link>
            <Link href="/contact" className="mx-2 hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
