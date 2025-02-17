import "../../styles/index.css";
import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on left side */}
        <div className="flex items-center">
          <motion.a
            href="/"
            className="text-2xl font-bold text-white hover:opacity-80 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            LUMA
          </motion.a>
        </div>

        {/* Navigation items on right side */}
        <div className="flex items-center space-x-8">
          <motion.a
            href="/"
            className="text-white hover:opacity-80 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="/about"
            className="text-white hover:opacity-80 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About
          </motion.a>
          <motion.a
            href="/signin"
            className="text-white hover:opacity-80 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Sign in
          </motion.a>
          <motion.a
            href="/signup"
            className="px-4 py-2 bg-transparent border border-white rounded-md text-white hover:bg-white hover:text-black transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Sign up
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;