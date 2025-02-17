import "../Navbar/Navbar.css";
import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-10 bg-transparent border-b border-white border-solid flex items-center px-8">
      {/* Left side - LUMA */}
      <div className="flex-none">
        <motion.a
          href="/"
          className="text-sm text-white no-underline font-bold luma"
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          LUMA
        </motion.a>
      </div>
     
      {/* Middle part - intentionally left empty */}
      <div className="flex-grow"></div>
     
      {/* Right side - Navigation links */}
      <div className="flex-none">
        <ul className="flex space-x-6 list-none p-0 m-0">
          <li>
            <motion.a
              href="/"
              className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              HOME
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/about"
              className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              ABOUT
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/signin"
              className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              SIGN IN
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/signup"
              className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              SIGN UP
            </motion.a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;