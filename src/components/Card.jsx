// Card.jsx
import React from "react";
import { motion } from "framer-motion";



const Card = ({
  icon,
  icHover,
  content,
  Ic_width = "36px",
  Ic_hight = "36px",
  title,
  lang
}) => {
   
  // Parent controls hover state for children
  const parentVariants = {
    rest: {},
    hover: {},
  };

  // Base icon: visible by default, fades out on hover
  const baseIconVariants = {
    rest: { opacity: 1, scale: 1 },
    hover: { opacity: 0, scale: 0.95, transition: { duration: 0.18 } },
  };

  // Hover icon: fades in and runs a continuous loop while hovered
  const hoverIconVariants = {
    rest: { opacity: 0, scale: 1, rotate: 0, y: 0 },
    hover: {
      opacity: 1,
      rotate: [0, 56, -126, 0],   // subtle rotate keyframes
      y: [0, -1, 0],           // subtle bob
      scale: [1, -1.56, 1],     // slight pulse
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      variants={parentVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`${lang === "ar" ? "font-font-1" : "font-font-2"} group flex flex-col justify-start items-center gap-[2rem] p-[1rem] md:p-[3rem] border-[5px] border-transparent hover:border-[#00151A] rounded-[3rem] w-full md:w-[405px] h-full md:h-[455px] lg:h-[535px] bg-[#FFFFFF] shadow-dual-cyan`}
      whileTap={{ scale: 0.895 }}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Top row: icon + title */}
      <div className={`flex justify-center items-center  gap-[1rem] w-full`}>
        <div className="relative flex justify-center items-center rounded-lg w-[64px] h-[64px] bg-[#99ECFF] group-hover:bg-[#0c3641] overflow-visible">
          {/* Base icon (fades out on hover) */}
          <motion.img
            src={icon}
            alt={`${title} icon`}
            variants={baseIconVariants}
            style={{
              width: Ic_width,
              height: Ic_hight,
              objectFit: "contain",
              zIndex: 1,
            }}
            draggable={false}
          />

          {/* Hover icon (fades in and animates while hovered) */}
          <motion.img
            src={icHover}
            alt={`${title} icon hover`}
            variants={hoverIconVariants}
            style={{
              width: Ic_width,
              height: Ic_hight,
              objectFit: "contain",
              position: "absolute",
              zIndex: 20,
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </div>

        <h2 className={`text-[#00151A] font-bold ${lang ==='ar' ? "text-[27px]": "text-[22px]"}  ${lang ==='ar' ? "lg:text-[32px]": "lg:text-[28px]"} `}>
          {title}
        </h2>
      </div>

      {/* Body */}
      <p className={`text-[#00151A] font-semibold text-center leading-relaxed ${lang ==='ar' ? "text-[22px]": "text-[19px]"}  ${lang ==='ar' ? "lg:text-[28px]": "lg:text-[18px]"}`}>
        {content}
      </p>
    </motion.div>
  );
};

export default Card;
