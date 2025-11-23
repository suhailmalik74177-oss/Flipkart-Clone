// client/src/components/Navbar.jsx
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  RiShoppingCart2Line,
  RiCustomerService2Fill,
} from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUser } from "../pages/UserContext";

const Navbar = () => {
  const { user, clearUser } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleLogout = () => {
    clearUser();
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-3 sm:px-8 py-2 sm:py-3">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dleixx6wj/image/upload/v1762965184/Gemini_Generated_Image_hth87ahth87ahth8_xquhqc.png"
            alt="Flipkart Logo"
            className="h-6 sm:h-8 w-auto"
          />
        </Link>

        <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 w-2/3 sm:max-w-xl mx-3">
          <IoSearch
            size={20}
            className={`text-gray-500 ${searchFocus ? "text-blue-500" : ""}`}
          />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent px-2 py-1 text-sm focus:outline-none"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
        </div>

        <ul className="hidden sm:flex items-center gap-5 text-sm font-medium">
          <li className="relative group">
            {user ? (
              <>
                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                  <CgProfile size={22} />
                  <span>{user.name || "Account"}</span>
                </button>

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="py-2 text-gray-700">
                    <li>
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                      >
                        <CgProfile size={18} /> My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orders"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                      >
                        <RiShoppingCart2Line size={18} /> Orders
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-red-600"
                      >
                        <CgProfile size={18} /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <CgProfile size={22} /> Login
              </Link>
            )}
          </li>

          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <RiShoppingCart2Line size={22} /> Cart
            </Link>
          </li>

          <li className="hidden lg:flex">
            <Link
              to="/become-seller"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <AiOutlineShop size={22} /> Become a Seller
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-600 transition p-1"
            >
              <HiDotsVertical size={20} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                <ul className="py-2 text-gray-700 text-sm">
                  <li>
                    <Link
                      to="/notification"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <MdNotificationsNone size={20} /> Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/help"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <RiCustomerService2Fill size={20} /> Customer Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/advertise"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <IoAnalyticsOutline size={20} /> Advertise
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.flipkart.com/mobile-apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                    >
                      <FiDownload size={20} /> Download App
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        <div className="flex sm:hidden items-center gap-3">
          <Link to="/cart">
            <RiShoppingCart2Line size={22} className="text-gray-700" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <HiDotsVertical size={22} className="text-gray-700" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white border-t border-gray-200 sm:hidden">
          <ul className="flex flex-col text-sm text-gray-700">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="px-5 py-3 border-b hover:bg-gray-50 flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <CgProfile size={18} /> My Profile
                </Link>
                <Link
                  to="/orders"
                  className="px-5 py-3 border-b hover:bg-gray-50 flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <RiShoppingCart2Line size={18} /> Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-3 border-b hover:bg-gray-50 text-red-600 flex items-center gap-2"
                >
                  <CgProfile size={18} /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-5 py-3 border-b hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <CgProfile size={18} /> Login
              </Link>
            )}

            <Link
              to="/become-seller"
              className="px-5 py-3 border-b hover:bg-gray-50 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineShop size={18} /> Become a Seller
            </Link>
            <Link
              to="/help"
              className="px-5 py-3 border-b hover:bg-gray-50 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <RiCustomerService2Fill size={18} /> Customer Care
            </Link>
            <a
              href="https://www.flipkart.com/mobile-apps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 hover:bg-gray-50 flex items-center gap-2"
            >
              <FiDownload size={18} /> Download App
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
