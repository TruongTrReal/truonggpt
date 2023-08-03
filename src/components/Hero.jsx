import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from "react";


const Hero = () => {

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const updateRotation = (event) => {
    // Check if the screen width is greater than a threshold (e.g., 768px for mobile)
    if (window.innerWidth > 768) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const sensitivity = 0.1;

      const newRotationX = deltaY * sensitivity;
      const newRotationY = deltaX * sensitivity;

      setRotation({ x: newRotationX, y: newRotationY });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateRotation);

    return () => {
      window.removeEventListener("mousemove", updateRotation);
    };
  }, []);

  return (
    <section
    className="relative w-full h-screen mx-auto"
    >
      <ComputersCanvas className="computers-canvas"
        styles={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      />
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div> 

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}
          >TruongGPT <span className="text-[#915eff]"></span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="">Chatbot AI Chứng Khoán đầu tiên
            <br className=""/>
            tại Việt Nam
            <br className=""/>
            -
            <br className=""/>
            Trải nghiệm đầu tư
            <br className=""/>
            hoàn toàn mới bằng
            <br className=""/>
            trí tuệ nhân tạo
            </span>
          </p>
        </div>
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24 ,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero