import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSignInAlt, FaUserPlus, FaHome, FaTachometerAlt, FaClipboardList, FaCog } from "react-icons/fa"; // Import icons

function Navbar() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

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

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <FaHome className="mr-2" /> 🎓 Feedback Portal
        </Link>

        <div className="flex space-x-6">
          {!loggedIn ? (
            <>
              <Link to="/login" className="flex items-center hover:text-gray-300">
                <FaSignInAlt className="mr-2" /> Login
              </Link>
              <Link to="/register" className="flex items-center hover:text-gray-300">
                <FaUserPlus className="mr-2" /> Register
              </Link>
            </>
          ) : role === "student" ? (
            <>
              <Link to="/dashboard" className="flex items-center hover:text-gray-300">
                <FaTachometerAlt className="mr-2" /> Dashboard
              </Link>
              <Link to="/feedback" className="flex items-center hover:text-gray-300">
                <FaClipboardList className="mr-2" /> Feedback
              </Link>
              <button onClick={handleLogout} className="flex items-center hover:text-gray-300">
                <FaSignInAlt className="mr-2" /> Logout
              </button>
            </>
          ) : role === "admin" ? (
            <>
              <Link to="/admin" className="flex items-center hover:text-gray-300">
                <FaCog className="mr-2" /> Admin Panel
              </Link>
              <button onClick={handleLogout} className="flex items-center hover:text-gray-300">
                <FaSignInAlt className="mr-2" /> Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
