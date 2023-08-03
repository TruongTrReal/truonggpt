import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { plans } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const handleCardClick = () => {
    // Open the link in a new window when the card is clicked
    window.open("https://openaccount.vps.com.vn/open-account?MKTID=K671", "_blank");
  };
const PlanCard = ({ title, icon, price, features, index, backgroundColor, star }) => (

    <button key={title} className='xs:w-[90vw] sm:w-[30vw] sm:h-[70vh] sm:mt-0'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full h-full gradient-border p-[1px] rounded-[20px] shadow-card'
        onClick={handleCardClick}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`h-full w-full bg-gradient-to-r ${backgroundColor} rounded-[20px] p-8 min-h-[280px] flex justify-evenly items-center flex-col overflow-hidden`}
        >
  
          <h1 className='text-white text-6xl'>{icon}</h1>
  
          <h3 className='text-white text-xl font-bold text-center mt-4'>
            {title}
          </h3>
          <h4 className='text-white text-lg font-bold text-center mt-2'>
            ${price}
          </h4>
  
          <ul className='text-white text-base text-center mt-4'>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          {star && (
                <div className='absolute top-0 left-0 h-full w-full'>
                {Array.from({ length: 25 }).map((_, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                    delay: Math.random(),
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5,
                    }}
                    className='absolute w-1 h-1 bg-yellow-300 rounded-full'
                    style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    }}
                />
                ))}
            </div>
          )}
        </div>
      </motion.div>
    </button>
  );



const Plans = () => {
  return (
    <div className="">
        <h1 className="text-4xl font-bold font-sans mb-5">
            Tính năng các gói  <br /> <span className="blue-text-gradient">ID VPS K671 - VÕ NHẬT TRƯỜNG</span>
        </h1>
        <div className='mt-20 flex flex-wrap gap-10 justify-center sm:mt-0'>
        {plans.map((plan, index) => (
            <PlanCard key={plan.title} index={index} {...plan} />
        ))}
        </div>
    </div>
  );
};

export default SectionWrapper(Plans, "plans");
