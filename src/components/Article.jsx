import React from 'react';
import { motion } from 'framer-motion';

const itemVariant = {
  hidden: { opacity: 0, y: 22, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: 'easeOut' } // slow reveal
  },
};

const Article = ({icon , icHover , title ,Ic_width , Ic_hight , content ,lang }) => {
  return (
    <motion.div
      className={`group flex flex-col justify-start items-start gap-[2rem] p-[2rem]  ${lang === "ar" ? "font-font-1" : "font-font-2"} rounded-[2rem] bg-[#FFFFFF] shadow-dual-cyan shadow-dual outline-none border-[4px] border-transparent hover:border-[#26B2D2]`}
      variants={itemVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
    >
       <div className="flex w-full justify-start items-center gap-[1rem]">
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill group-hover:hidden`} src={icon} alt="article icon" />
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill hidden group-hover:block  hover-anim `} src={icHover} alt="article icon" />
         <h3 className={`text-[#00001A] font-bold h-full text-[18px] ${lang ==='ar' ? " sm:text-[22px] md:text-[28px]": "sm:text-[20px] md:text-[24px]"}`} > {title} </h3>
       </div>
       <p className={`text-[#00001A] font-semibold h-full text-start text-[18px]   md:leading-[36px] ${lang ==='ar' ? "sm:text-[22px]": "sm:text-[19px]"}  `} >
           {content}
       </p>
    </motion.div>
  )
}

export default Article;
