import React from "react";
import { motion } from "framer-motion";
import "../styles/register.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import BlurText from "../components/TextAnimations/BlurText/BlurText.jsx";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function App() {
  const handleAnimationComplete = () => {
    console.log("Animation Completed!");
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
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl text-white select-none font-extrabold pl-4"
          />

          <BlurText
            text="Seamless communication made simple. Whether you're catching up with friends, coordinating with your team, or sharing special moments, LUMA keeps you connected in real time."
            delay={50}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
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
              <h1 className="text-8xl text-black select-none text-center w-100 font-extrabold !font-extrabold">
                LUMA
              </h1>

              <h4 className="text-black select-none text-center w-100 font-bold register pb-3">
                Register
              </h4>

              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                    className="text-white"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form1"
                    type="text"
                    className="text-white"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                className="text-white"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                className="text-white"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                id="form1"
                type="password"
                className="text-white"
              />

              <motion.button
                className="w-100 mb-4 bg-blue-500 text-white font-bold py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Sign Up
              </motion.button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
