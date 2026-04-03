import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library (or use Heroicons if preferred)
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authslice';
import { useLogoutManagerMutation } from '../redux/api/mangerapi';
import { useLogoutDeveloperMutation } from '../redux/api/developerApi';
import { FaUserCircle } from 'react-icons/fa';
import Logo from '../images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const [logoutManager] = useLogoutManagerMutation();
  const [logoutDeveloper] = useLogoutDeveloperMutation();

  const handleLogout = async () => {
    try {
      if (user?.role === 'manager') {
        await logoutManager().unwrap();
      } else if (user?.role === 'developer') {
        await logoutDeveloper().unwrap();
      }

      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const goToDashboard = () => {
    if (user?.role === 'manager') {
      navigate('/manager');
    } else if (user?.role === 'developer') {
      navigate('/developer');
    }
  };

  return (
    <header className="bg-white shadow-md position-static">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              className="w-20 cursor-pointer"
              />
              </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to={"/"} className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to={"/about"} className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to={"/contact"} className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </nav>



  {user && (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
          >
            <FaUserCircle className="text-3xl text-blue-600 cursor-pointer" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
              <button
                onClick={goToDashboard}
                className="block cursor-pointer w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="block w-full cursor-pointer text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          <Link to={"/"} className="block text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to={"/about"} className="block text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to={"/contact"} className="block text-gray-700 hover:text-blue-600 font-medium">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
