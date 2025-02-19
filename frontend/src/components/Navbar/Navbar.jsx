import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../Navbar/Navbar.css";
import React from "react";
import { motion } from "framer-motion";
import { House, LogIn, CircleHelp, UserPlus } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

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
          {/* Home */}
          <li>
            <Tooltip.Provider delayDuration={200}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.a
                    href="/"
                    className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <House size={20} />
                  </motion.a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg"
                    side="bottom"
                    align="center"
                  >
                    Home
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </li>

          {/* About Us */}
          <li>
            <Tooltip.Provider delayDuration={200}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.a
                    href="/about"
                    className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CircleHelp size={20} />
                  </motion.a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg"
                    side="bottom"
                    align="center"
                  >
                    About Us
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </li>

          {/* Sign In */}
          <li>
            <Tooltip.Provider delayDuration={200}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.a
                    href="/signin"
                    className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LogIn size={20} />
                  </motion.a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg"
                    side="bottom"
                    align="center"
                  >
                    Sign In
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </li>

          {/* Register */}
          <li>
            <Tooltip.Provider delayDuration={200}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.a
                    href="/register?"
                    className="text-xs text-white no-underline hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <UserPlus size={20} />
                  </motion.a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg"
                    side="bottom"
                    align="center"
                  >
                    Register
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
