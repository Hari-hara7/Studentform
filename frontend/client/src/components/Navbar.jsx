import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaTachometerAlt,
  FaClipboardList,
  FaCog,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    setLoggedIn(!!token);
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white text-black p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <FaHome className="mr-2" /> 🎓 Feedback Portal
        </Link>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {!loggedIn ? (
            <>
              <Link to="/login" className="flex items-center hover:text-blue-500">
                <FaSignInAlt className="mr-2" /> Login
              </Link>
              <Link to="/register" className="flex items-center hover:text-blue-500">
                <FaUserPlus className="mr-2" /> Register
              </Link>
            </>
          ) : role === "student" ? (
            <>
              <Link to="/dashboard" className="flex items-center hover:text-blue-500">
                <FaTachometerAlt className="mr-2" /> Dashboard
              </Link>
              <Link to="/feedback" className="flex items-center hover:text-blue-500">
                <FaClipboardList className="mr-2" /> Feedback
              </Link>
              <button onClick={handleLogout} className="flex items-center hover:text-red-500">
                <FaSignInAlt className="mr-2" /> Logout
              </button>
            </>
          ) : role === "admin" ? (
            <>
              <Link to="/admin" className="flex items-center hover:text-blue-500">
                <FaCog className="mr-2" /> Admin Panel
              </Link>
              <button onClick={handleLogout} className="flex items-center hover:text-red-500">
                <FaSignInAlt className="mr-2" /> Logout
              </button>
            </>
          ) : null}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 shadow-md">
          {!loggedIn ? (
            <>
              <Link to="/login" onClick={toggleMenu} className="block hover:text-blue-500">
                <FaSignInAlt className="inline mr-2" /> Login
              </Link>
              <Link to="/register" onClick={toggleMenu} className="block hover:text-blue-500">
                <FaUserPlus className="inline mr-2" /> Register
              </Link>
            </>
          ) : role === "student" ? (
            <>
              <Link to="/dashboard" onClick={toggleMenu} className="block hover:text-blue-500">
                <FaTachometerAlt className="inline mr-2" /> Dashboard
              </Link>
              <Link to="/feedback" onClick={toggleMenu} className="block hover:text-blue-500">
                <FaClipboardList className="inline mr-2" /> Feedback
              </Link>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="block hover:text-red-500">
                <FaSignInAlt className="inline mr-2" /> Logout
              </button>
            </>
          ) : role === "admin" ? (
            <>
              <Link to="/admin" onClick={toggleMenu} className="block hover:text-blue-500">
                <FaCog className="inline mr-2" /> Admin Panel
              </Link>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="block hover:text-red-500">
                <FaSignInAlt className="inline mr-2" /> Logout
              </button>
            </>
          ) : null}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
