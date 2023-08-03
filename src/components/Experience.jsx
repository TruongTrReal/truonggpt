import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from "../hoc"
import React from "react";
import { GalaxyCanvas } from "./canvas";


const Experience = () => {
  const handleButtonClick = () => {
    window.open("https://t.me/TruongGPT_bot", "_blank");
  };




  const contentStyle = {
  };

  return (
    <section className="relative bg-primary">
      <div className="h-[90vh] w-[90vw] sm:w-[100vw]">
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
            <h1 className="text-4xl font-bold font-sans m-[20px]">
              Trải nghiệm <span className="blue-text-gradient">FREE</span> ngay hôm nay!
            </h1>
            <motion.button
              onClick={handleButtonClick}
              style={{
                margin: "20px",
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
      <div className="absolute h-[400vh] inset-0 z-0">
       <GalaxyCanvas />
      </div>
    </section>

  );
};



export default SectionWrapper(Experience , 'start')