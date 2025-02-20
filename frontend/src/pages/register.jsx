import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import Axios
import "../styles/register.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import BlurText from "../components/TextAnimations/BlurText/BlurText.jsx";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

function App() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success"); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setAlertType("error");
      setAlertOpen(true);
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/register/", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      });

      console.log("User registered:", response.data);
      setAlertMessage("Registration successful!");
      setAlertType("success");
    } catch (error) {
      console.error("Error registering user:", error);
      setAlertMessage("Registration failed. Please try again.");
      setAlertType("error");
    }
    setAlertOpen(true);
  };

  return (
    <MDBContainer
      fluid
      className="p-4 bg-black min-h-screen flex items-center justify-center"
    >
      <Navbar />
      <MDBRow className="w-full">
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <BlurText
            text="Stay Connected, Anytime, Anywhere"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-6xl text-white select-none font-extrabold pl-4"
          />

          <BlurText
            text="Seamless communication made simple. Whether you're catching up with friends, coordinating with your team, or sharing special moments, LUMA keeps you connected in real time."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="text-white select-none pl-4"
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5 bg-gray-800 border-0">
            <MDBCardBody
              className="p-5 text-black"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                border: "3px solid rgb(58, 58, 58)",
              }}
            >
              <h1 className="text-8xl text-black select-none text-center w-100 font-extrabold">
                LUMA
              </h1>

              <h4 className="text-black select-none text-center w-100 font-bold register pb-3">
                Register
              </h4>

              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <motion.button
                  className="w-100 mb-4 bg-blue-500 text-white font-bold py-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                >
                  Sign Up
                </motion.button>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* Radix Alert Dialog */}
      <AlertDialog.Root open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <AlertDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <AlertDialog.Title className={`text-lg font-bold ${alertType === "error" ? "text-red-500" : "text-green-500"}`}>
              {alertType === "error" ? "Error" : "Success"}
            </AlertDialog.Title>
            <AlertDialog.Description className="mt-2 text-black">
              {alertMessage}
            </AlertDialog.Description>
            <div className="mt-4 flex justify-end">
              <AlertDialog.Action asChild>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  OK
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </MDBContainer>
  );
}

export default App;
