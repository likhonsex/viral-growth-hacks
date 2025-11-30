export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">Viral Growth</h3>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} Viral Growth. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
