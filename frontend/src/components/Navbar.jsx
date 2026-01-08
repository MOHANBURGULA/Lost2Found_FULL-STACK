import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="MVSR Logo" className="w-10 h-10" />
        <h1 className="font-bold text-lg">MVSR Lost & Found</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/">Home</Link>

        {user && (
          <>
            <Link to="/dashboard">Lost Items</Link>
            <Link to="/report">Report Item</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="space-x-3">
        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-white text-blue-800 px-3 py-1 rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-yellow-400 text-black px-3 py-1 rounded"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

