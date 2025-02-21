import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/signIn.css";
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

// Configure axios to always send cookies
axios.defaults.withCredentials = true;

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the login request (Django will handle CSRF differently)
      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        {
          username: formData.username,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("User logged in:", response.data);
      setAlertMessage("Login successful!");
      setAlertType("success");
    } catch (error) {
      console.error("Error logging in:", error);
      setAlertMessage("Login failed. Please check your credentials.");
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
              <h1 className="text-8xl text-black select-none text-center w-100 font-extrabold luma">
                LUMA
              </h1>

              <h4 className="text-black select-none text-center w-100 font-bold register pb-3">
                Sign In
              </h4>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  type="text"
                  name="username"
                  value={formData.username}
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

                <motion.button
                  className="w-100 mb-4 bg-blue-500 text-white font-bold py-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                >
                  Sign In
                </motion.button>

                <div className="text-center w-100 link mb-3">
                  <a href="" className="">
                    Forgot Password?
                  </a>
                </div>

                <div className="text-center w-100 link">
                  <a href="/register" className="">
                    Don't Have An Account?
                  </a>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

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
      </MDBRow>

      <AlertDialog.Root open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title
              className={`text-lg text-center font-bold ${
                alertType === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {alertType === "error" ? "Error" : "Success"}
            </AlertDialog.Title>
            <AlertDialog.Description className="mt-2 text-center text-black">
              {alertMessage}
            </AlertDialog.Description>
            <div className="mt-4 flex justify-center">
              <AlertDialog.Action asChild>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setAlertOpen(false)}
                >
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

export default SignIn;
