
import { useTranslation } from 'react-i18next';
import { icon_39, icon_40 } from './import';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { customers } from './content';
import { motion } from 'framer-motion';

const parentVariants = {
  hidden: {},
  show: {
    transition: {
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

const imgVariant = {
  hidden: { opacity: 0.6, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: 'easeOut' } },
};

const Customers = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';
 
  

  const settings = {
    className: 'customers-slider relative w-full h-full',
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    arrows: false,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 ,slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 ,slidesToScroll: 2} },
      { breakpoint: 480, settings: { slidesToShow: 1 ,slidesToScroll: 1} },
    ],
  };



  return (
    <motion.section
      className={`relative flex flex-col justify-center items-center md:items-start px-2 py-[2rem] md:py-[4rem] gap-4 md:gap-[2rem] w-full ${lang === "ar" ? "font-font-1" : "font-font-2"}`}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,  amount: 0.25 }}
    >
      {/* Title Badge */}
      <motion.div
        className={`group flex justify-center items-center ${lang === "ar" ? "lg:mr-[4rem]" : "lg:ml-[4rem]"} px-[2rem] py-2 gap-[1rem] rounded-[1rem] outline-none ${lang === "ar" ? "border-r-[1rem]" : "border-l-[1rem]"} border-[2px] border-[#26B2D2] hover:cursor-pointer hover:border-[#00001A]`}
        variants={titleVariant}
      >
        <img className={` w-[34px] h-[34px] object-fill group-hover:hidden`} src={icon_39} alt="section icon" />
        <img className={` w-[34px] h-[34px] object-fill hidden group-hover:block hover-anim`} src={icon_40} alt="section icon" />
        <motion.h3
          className={`text-[#00001A] hover-animation font-semibold group-hover:font-bold h-full ${lang === "ar" ? " text-[18px] sm:text-[22px] md:text-[28px]" : " text-[17px] sm:text-[20px] md:text-[24px]"}`}
          variants={titleVariant}
        >
          {t('customers.title')}
        </motion.h3>
      </motion.div>

      {/* Slider wrapper */}
      <motion.div
        className="relative h-full z-0 overflow-hidden w-full p-[1rem] flex justify-center items-center"
        variants={containerVariants}
      >
        <Slider {...settings}>
          {customers.map((item, i) => (
            <div key={item.id ?? i} className="flex flex-col md:flex-row justify-center items-center p-2 w-full h-full">
              <motion.div
                className="flex justify-center items-center w-full h-full"
                variants={itemVariant}
              >
                <motion.img
                  src={item.cover}
                  alt={`customer-${i}`}
                  variants={imgVariant}
                  className="block mx-auto"
                  style={{
                    width: item.width,
                    height: item.height,
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default Customers;
