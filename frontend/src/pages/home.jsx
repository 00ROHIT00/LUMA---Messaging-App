import "../styles/home.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

import React from "react";
import { Framer } from "lucide-react";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black flex">
      <Navbar />
      {/* Contacts List */}
      <div className="w-1/3 h-full bg-black mt-10 text-center border-r border-[#88888880] flex flex-col">
        <h2 className="text-white text-xl mb-4 select-none text">Contacts</h2>
        <ul>
          <li className="contact">John Doe</li>
          <li className="contact">Jane Doe</li>
          <li className="contact">Alice Parker</li>
          <li className="contact">Philp John</li>
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 h-full bg-black p-4 mt-10">
        <div className="h-[85%] bg-[#88888880] rounded-lg p-4 overflow-y-auto">
          <p className="text-white">Select a contact to start messaging</p>
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full h-12 p-3 bg-[#88888880] text-white rounded-l-lg outline-none"
          />
          <motion.button
            className="h-12 px-4 bg-[#88888880] text-white rounded-r-lg outline-none flex items-center justify-center outline-none"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
          >
            <FaPaperPlane className="text-white text-xl outline-none" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
