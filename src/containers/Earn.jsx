// src/containers/Earn.jsx
import React from 'react';
import Feature from '../components/Feature';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const parentVariants = {
  hidden: {},
  show: {
    transition: {
      // stagger the title then the items
      staggerChildren: 0.22,
      delayChildren: 0.08,
    },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: 'easeOut' } },
};

const Earn = ({ title, icon, hoverIcon, data = [] , IcWidth ,IcHight }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const displayTitle = title || t('WinningPillars.title');

  return (
    <div className={`flex flex-col justify-center items-center md:items-start p-[2rem] gap-[2rem] w-full  ${lang === "ar" ? "font-font-1" : "font-font-2"}`}>
      {/* parent motion controls stagger for title + grid */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once: true , amount: 0.1 }}
      >
        {/* Title Badge */}
        <motion.div
          className={`w-fit group flex justify-center items-center px-[2rem] py-2 gap-[1rem] 
            ${lang === "ar" ? "lg:mr-[4rem]" : "lg:ml-[4rem]"} rounded-[1rem] outline-none 
            ${lang === 'ar' ? 'border-r-[1rem]' : 'border-l-[1rem]'} 
            border-[2px] border-[#26B2D2] hover:cursor-pointer hover:border-[#00001A]`}
          variants={titleVariant}
        >
          <img className="w-[35px] h-[35px] object-fill group-hover:hidden" src={icon} alt="section icon" />
          <img className="w-[35px] h-[35px] object-fill hidden group-hover:block hover-anim" src={hoverIcon} alt="section icon" />
          <motion.h3
            className={`text-[#00001A] hover-animation font-semibold group-hover:font-bold h-full ${
              lang === 'ar'
                ? 'text-[18px] sm:text-[22px] md:text-[28px]'
                : 'text-[17px] sm:text-[20px] md:text-[24px]'
            }`}
            variants={titleVariant}
          >
            {displayTitle}
          </motion.h3>
        </motion.div>

        {/* Grid / Row of Features */}
        <motion.div
          className="flex flex-col flex-wrap xl:flex-nowrap lg:flex-row justify-center items-center mt-[3rem] md:mt-2 gap-[2rem] p-2 md:p-[2rem]"
          variants={containerVariants}
        >
          {data.map((item, i) => {
            const itemTitle = lang === 'ar' ? item.title_ar : item.title_en;
            const itemContent = lang === 'ar' ? item.content_ar : item.content_en;

            return (
              <motion.div
                variants={rowVariant}
                key={item.id ?? i}
                style={{ width: '100%' }}
              >
                <Feature
                  title={itemTitle}
                  content={itemContent}
                  cover={item.cover}
                  icon={item.icon}
                  lang={lang}
                  IcWidth={IcWidth}
                  IcHight={IcHight}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Earn;
