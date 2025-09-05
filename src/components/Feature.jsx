// src/components/Feature.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { icon_37, icon_38 } from "./import"; // keep your button icons import

const itemVariant = {
  hidden: { opacity: 0, y: 14, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

const imageVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.1, ease: 'easeOut' } },
};

const Feature = ({ cover, title, lang = 'ar', icon, content , IcWidth, IcHight }) => {
  return (
    <motion.div
      className='flex flex-col justify-center items-center p-[1rem] gap-2 lg:gap-[1rem] border-[5px] border-transparent hover:border-[#00151A] rounded-[3rem] bg-[#FFFFFF] shadow-dual-cyan'
      variants={itemVariant}
      initial="hidden"
      whileInView="show"
      whileTap={{ scale: 0.895 }}
      viewport={{  amount: 0.3 }}
    >
      <motion.div className="h-full w-full md:h-[309px] md:w-[308px] flex flex-1 items-center" variants={imageVariant}>
         <motion.img
           src={cover}
           alt="cover"
           className='object-fill h-[309px] w-[358px]'
           variants={imageVariant}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
         />
      </motion.div>

      <div className="flex flex-[0.6] flex-col justify-center items-center p-2 md:p-[2rem] gap-[2rem]">
            <div className="flex w-full justify-start items-start gap-[1rem]">
                <img src={icon} alt="icon"  className={`'object-fill h-[${IcHight}] w-[${IcWidth}]'`}/>
                <h3 className={`text-[#00151A] font-bold text-[16px]  ${lang ==='ar' ? "lg:text-[22px]": "lg:text-[20px]"}`}>
                  {title}
                </h3>
            </div>
            <p  className={`text-[#00151A] font-semibold text-start leading-relaxed ${lang ==='ar' ? "text-[14px] lg:text-[18px]": "text-[13px] lg:text-[16px]"}`}>
               {content}
            </p>
      </div>

       <button className="inline-flex group justify-center items-center rounded-full gap-2 p-2 px-[1rem] border-[2px] border-[#2CD8FF] hover:border-[#00151A] cursor-pointer" >
          <p className={`text-[#00151A] group-hover:text-[#2CD8FF] font-semibold text-center leading-relaxed ${lang ==='ar' ? "text-[14px]": "text-[13px]"}  ${lang ==='ar' ? "lg:text-[18px]": "lg:text-[16px]"}`}>
            {lang === 'ar' ? 'التفاصيل' : 'Details'}
          </p>
          <img className="w-[24px] h-[24px] object-fill" src={lang === "ar" ? icon_37 : icon_38} alt="icon_button" />
       </button>
    </motion.div>
  );
};

export default Feature;
