import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-indigo-700 hover:text-indigo-900">
              CRUD Auth
            </Link>
          </div>
          <div className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-indigo-600 font-medium">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
