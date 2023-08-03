import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from "../hoc"
import React from "react";
import { GalaxyCanvas } from "./canvas";


const Experience = () => {
  const handleButtonClick = () => {
    window.open("https://t.me/TruongGPT_bot", "_blank");
  };


  const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100vw",
    height: "300vh",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  };

  return (
    
    <div style={wrapperStyle}>
      <GalaxyCanvas />
      <div style={contentStyle}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", fontFamily: "sans-serif", marginBottom: "20px" }}>
          Trải nghiệm <span className="blue-text-gradient">FREE</span> ngay hôm nay!
        </h1>
        <motion.button
          onClick={handleButtonClick}
          style={{
            padding: "20px",
            borderRadius: "10px",
            fontSize: "24px",
            background: "#1d1836",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          TruongGPT trên Telegram
        </motion.button>
      </div>
      
    </div>

  );
};



export default SectionWrapper(Experience , 'start')