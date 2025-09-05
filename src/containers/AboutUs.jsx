import React from 'react'
import { aboutUsCover, icon_18, icon_19 } from './import'
import { Article, Story } from '../components/export'
import { aboutUs, partnershipContent } from './content'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const leftColumnVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const titleVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 1.4, ease: 'easeOut' } },
};

const imageVariant = {
 hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] } // sharp then soft landing
  }};

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <div className={`flex flex-col justify-center items-center md:items-start  p-[2rem] gap-[2rem] w-full ${lang === "ar" ? "font-font-1" : "font-font-2"}`}>
      {/* Title / Badge */}
      <motion.div
        className={`group flex justify-center items-center px-[2rem] py-2 gap-[1rem] lg:mr-[4rem] rounded-[1rem] outline-none ${lang === "ar" ? "border-r-[1rem]" : "border-l-[1rem]"} border-[2px] border-[#26B2D2] hover:cursor-pointer hover:border-[#00001A]`}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={titleVariant}
      >
        <img className={` w-[50px] h-[50px] object-fill group-hover:hidden`} src={icon_18} alt="section icon" />
        <img className={` w-[50px] h-[50px] object-fill hidden group-hover:block hover-anim`} src={icon_19} alt="section icon" />
        <motion.h3
          className={`text-[#00001A] hover-animation font-semibold group-hover:font-bold h-full ${lang === "ar" ? " text-[18px] sm:text-[22px] md:text-[28px]" : " text-[17px] sm:text-[20px] md:text-[24px]"}`}
          variants={titleVariant}
        >
          {t('about.title')}
        </motion.h3>
      </motion.div>

      {/* Main row: left articles and right image */}
      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 md:gap-[2rem] p-2 md:p-[2rem]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.18 }}
      >
        {/* Left column: articles (staggered) */}
        <motion.div
          className="flex flex-1 flex-col justify-between items-between gap-4 md:gap-[4rem] p-2"
          variants={leftColumnVariant}
        >
          {aboutUs.map((item, i) => (
            <Article
              key={item.id ?? i}
              title={lang === 'ar' ? item.title_ar : item.title_en}
              content={lang === 'ar' ? item.content_ar : item.content_en}
              icon={item.icon}
              icHover={item.iconHover}
              Ic_hight={`62px`}
              Ic_width={`62px`}
              lang={lang}
            />
          ))}
        </motion.div>

        {/* Right column: cover image (slow reveal, not hidden) */}
        <motion.div
          className="flex flex-1 flex-col justify-center items-center p-2"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.18 }}
          variants={imageVariant}
        >
          <motion.img
            variants={imageVariant}
            className="object-fill w-[271px] h-[427px] lg:w-[630px] lg:h-[700px]"
            src={aboutUsCover}
            alt="about Us Cover"
          />
        </motion.div>
      </motion.div>

      {/* Story / Partnership */}
      <div className="flex flex-col justify-center items-center p-2 ">
        <Story
          title={lang === 'ar' ? partnershipContent.title_ar : partnershipContent.title_en}
          icon={partnershipContent.icon}
          icHover={partnershipContent.iconHover}
          point={partnershipContent.Pointicon}
          Ic_width={'54px'}
          Ic_hight={'50px'}
        />
      </div>
    </div>
  )
}

export default AboutUs
