import "../styles/about.css";
import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { FaReact, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { MdApi } from "react-icons/md";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-screen bg-black py-12">
      <Navbar />
      <div className="w-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-['Poppins']">
            About <span>LUMA</span>
          </h1>
          <div className="h-1 w-20 bg-gray-400 mx-auto"></div>
        </div>

        <div className="space-y-12 font-['Poppins'] px-6 md:px-16 lg:px-24 max-w-[1920px] mx-auto">
          {/* Project Overview Section */}
          <section className="bg-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <b>LUMA</b> is a secure and modern messaging platform designed for
              seamless real-time communication. It enables users to send
              encrypted messages, share files, and even update live
              locations—all while ensuring privacy and data security. Built for
              speed and scalability, <b>LUMA</b> provides a smooth and intuitive user
              experience across devices. With a strong focus on security, our
              platform employs end-to-end encryption and a robust authentication
              system to keep conversations private. Backed by a powerful
              Django-based backend and a dynamic React frontend, <b>LUMA</b> delivers
              high performance, reliability, and a sleek user interface for
              effortless messaging.
            </p>
          </section>

          {/* Tech Stack Section */}
          <section className="bg-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technology Stack
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaReact className="text-blue-500 mr-2" /> React.js for UI
                    components
                  </li>
                  <li className="flex items-center">
                    <FaCss3Alt className="text-blue-600 mr-2" /> Tailwind CSS
                    for styling
                  </li>
                  <li className="flex items-center">
                    <FaJs className="text-yellow-500 mr-2" /> JavaScript ES6+
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <SiDjango className="text-green-700 mr-2" /> Django
                    Framework
                  </li>
                  <li className="flex items-center">
                    <FaPython className="text-blue-400 mr-2" /> Python
                  </li>
                  <li className="flex items-center">
                    <MdApi className="text-blue-400 mr-2" />
                    RESTful API
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development Tools Section */}
          <section className="bg-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Development Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Version Control
                </h3>
                <p className="text-gray-600">Git & GitHub</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Code Editor
                </h3>
                <p className="text-gray-600">VS Code</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Package Manager
                </h3>
                <p className="text-gray-600">npm/pip</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span>Responsive design for all device sizes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span>Modern and intuitive user interface</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span>Fast and efficient data handling</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span>Secure authentication system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span>RESTful API architecture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span>Scalable backend infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
