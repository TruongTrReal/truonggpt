import { motion } from "framer-motion";
import React from "react";


const Groups = ({ handleMainButtonClick, secondaryButtonsData }) => {
  const gridContainerStyle = {
    display: "grid",
    gridGap: "0", // Add a gap between the buttons
  };

  return (
    <div className="relative z-10"> 
      <div className="w-[95vw] place-content-center sm:w-[100vw] sm:grid-cols-2" style={gridContainerStyle}>
        {secondaryButtonsData.map((button, index) => (
          <motion.button
            key={index}
            onClick={() => handleMainButtonClick(button.link)}
            style={{
              margin: "10%",
              padding: "20px",
              borderRadius: "10px",
              fontSize: "24px",
              background: "transparent",
              border: "2px solid #1d1836",
              color: "#fff",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {button.description}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Groups;