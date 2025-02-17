import "../styles/index.css";
import { motion } from "framer-motion";
import BlurText from "../components/TextAnimations/BlurText/BlurText.jsx";
import Aurora from "../components/Backgrounds/Aurora/Aurora.jsx";
import Waves from "../components/Backgrounds/Waves/Waves.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function Home() {
  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">

      <Navbar />
      {/* Aurora Background */}
      {/* <div className="absolute inset-0 z-[-1]">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      </div> */}

      {/* Waves Background */}
      <div className="absolute inset-0 z-[-1]">
        <Waves
          lineColor="grey"
          backgroundColor="black"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        {/* BlurText Animation for LUMA */}
        <BlurText
          text="LUMA"
          delay={150}
          animateBy="letters"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-8xl text-white select-none font-extrabold"
        />

        {/* Motion button with border only on hover */}
        <motion.button
          className="px-6 py-3 bg-transparent border-0 rounded-md font-bold text-white hover:border-2 hover:border-white focus:bg-transparent active:bg-transparent"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }}
          style={{ backgroundColor: "transparent" }}
        >
          <BlurText
            text="Get Started!"
            delay={350}
            animateBy="words"
            direction="bottom"
            className="block font-bold buttonClass"
          />
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
