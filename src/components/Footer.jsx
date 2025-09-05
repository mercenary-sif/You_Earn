import { FaFacebook, FaTelegram, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.png";
import { icon_41, icon_42, icon_43, icon_44 } from "./import";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  // returnObjects: true expected in i18n config for these arrays
  const servicesItems = t("footer.sections.services.items", { returnObjects: true }) || [];
  const elmItems = t("footer.sections.elm.items", { returnObjects: true }) || [];
  const providerItems = t("footer.sections.provider.items", { returnObjects: true }) || [];
  const aboutItems = t("footer.sections.about.items", { returnObjects: true }) || [];

  return (
    <motion.footer
      className={`flex flex-col justify-center items-center gap-[1rem] py-[2rem] px-2 md:px-[2rem] border-[5px] border-transparent hover:border-[#00151A] bg-[#FFFFFF] shadow-dual-cyan rounded-t-[5rem] ${lang === "ar" ? "font-font-1" : "font-font-2"}`}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
    >
      {/* Top row with logo + columns */}
      <motion.div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-[4rem] w-full" variants={childVariants}>
        {/* Logo circle */}
        <motion.div className="flex w-[175px] h-[175px] border-[5px] border-transparent hover:border-[#00151A] bg-[#26B2D2] shadow-dual-cyan rounded-full p-[2rem] items-center justify-center cursor-pointer"
                    variants={childVariants}
                    viewport={{ amount: 0.6 }}>
          <img className="object-fill w-[103px] h-[59px]" src={logo} alt="logo" />
        </motion.div>

        {/* Services column */}
        <motion.div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-[2rem]" variants={childVariants}>
          <motion.div className="flex items-center justify-center gap-4 p-2 cursor-pointer" variants={childVariants}>
            <img className="w-[22px] h-[22px] object-fill" src={icon_44} alt="icon" />
            <h3 className={`text-[#00151A] font-bold text-start ${lang === "ar" ? "text-[20px] " : "text-[16px] "}`}>
              {t("footer.sections.services.title")}
            </h3>
          </motion.div>

          {servicesItems.map((it, idx) => (
            <motion.p key={idx} className={`text-[#00151A] font-semibold hover:font-bold text-start ${lang === "ar" ? "text-[18px]" : "text-[14px] "} cursor-pointer hover:text-[#26B2D2]`}
                      variants={childVariants}
            >
              {it}
            </motion.p>
          ))}
        </motion.div>

        {/* Elm / Sales column */}
        <motion.div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-[1rem]" variants={childVariants}>
          <motion.div className="flex items-center justify-center gap-4 p-2 cursor-pointer" variants={childVariants}>
            <img className="w-[22px] h-[22px] object-fill" src={icon_43} alt="icon" />
            <h3 className={`text-[#00151A] font-bold text-start ${lang === "ar" ? "text-[20px] " : "text-[16px] "}`}>
              {t("footer.sections.elm.title")}
            </h3>
          </motion.div>

          {elmItems.map((it, idx) => (
            <motion.p key={idx} className={`text-[#00151A] font-semibold hover:font-bold text-start ${lang === "ar" ? "text-[18px]" : "text-[14px] "} cursor-pointer hover:text-[#26B2D2]`}
                      variants={childVariants}
            >
              {it}
            </motion.p>
          ))}
        </motion.div>

        {/* Provider column */}
        <motion.div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-[1rem]" variants={childVariants}>
          <motion.div className="flex items-center justify-center gap-4 p-2 cursor-pointer" variants={childVariants}>
            <img className="w-[22px] h-[22px] object-fill" src={icon_42} alt="icon" />
            <h3 className={`text-[#00151A] font-bold text-start ${lang === "ar" ? "text-[20px] " : "text-[16px] "}`}>
              {t("footer.sections.provider.title")}
            </h3>
          </motion.div>

          {providerItems.map((it, idx) => (
            <motion.p key={idx} className={`text-[#00151A] font-semibold hover:font-bold text-start ${lang === "ar" ? "text-[18px]" : "text-[14px] "} cursor-pointer hover:text-[#26B2D2]`}
                      variants={childVariants}
            >
              {it}
            </motion.p>
          ))}
        </motion.div>

        {/* About column */}
        <motion.div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-[1rem]" variants={childVariants}>
          <motion.div className="flex items-center justify-center gap-4 p-2 cursor-pointer" variants={childVariants}>
            <img className="w-[22px] h-[22px] object-fill" src={icon_41} alt="icon" />
            <h3 className={`text-[#00151A] font-bold text-start ${lang === "ar" ? "text-[20px] " : "text-[16px] "}`}>
              {t("footer.sections.about.title")}
            </h3>
          </motion.div>

          {aboutItems.map((it, idx) => (
            <motion.p key={idx} className={`text-[#00151A] font-semibold hover:font-bold text-start ${lang === "ar" ? "text-[18px]" : "text-[14px] "} cursor-pointer hover:text-[#26B2D2]`}
                      variants={childVariants}
            >
              {it}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Social icons */}
      <motion.div className="flex justify-center items-center lg:mt-[2rem] mt-2 gap-2 md:gap-[2rem] p-2 md:p-[2rem]" variants={childVariants}>
        <motion.div className="flex justify-center items-center p-2 border-[2px] border-[#26B2D2] hover:border-[#00151A] bg-transparent group cursor-pointer shadow-dual-cyan rounded-full" variants={iconVariants}>
          <FaFacebook className="fill-[#26B2D2] group-hover:fill-[#00151A]" size={"35px"} />
        </motion.div>
        <motion.div className="flex group justify-center items-center p-2 border-[2px] border-[#26B2D2] hover:border-[#00151A] bg-transparent group cursor-pointer shadow-dual-cyan rounded-full" variants={iconVariants}>
          <AiFillInstagram className="fill-[#26B2D2] group-hover:fill-[#00151A]" size={"35px"} />
        </motion.div>
        <motion.div className="flex group justify-center items-center p-2 border-[2px] border-[#26B2D2] hover:border-[#00151A] bg-transparent group cursor-pointer shadow-dual-cyan rounded-full" variants={iconVariants}>
          <FaTelegram className="fill-[#26B2D2] group-hover:fill-[#00151A]" size={"35px"} />
        </motion.div>
        <motion.div className="flex group justify-center items-center p-2 border-[2px] border-[#26B2D2] hover:border-[#00151A] bg-transparent group cursor-pointer shadow-dual-cyan rounded-full" variants={iconVariants}>
          <FaLinkedin className="fill-[#26B2D2] group-hover:fill-[#00151A]" size={"35px"} />
        </motion.div>
      </motion.div>

      {/* Footer bottom */}
      <motion.div className="flex flex-col w-full justify-center items-center gap-[1rem] md:gap-[2rem] p-2 md:p-[2rem]" variants={childVariants}>
        <motion.div className="w-[75%] flex flex-col md:flex-row justify-between items-center" variants={childVariants}>
          <motion.p className={`text-[#00151A] font-semibold text-center mt-[2rem] ${lang === "ar" ? "text-[18px]" : "text-[16px] "}`} variants={childVariants}>
            {t("footer.designedByLabel")}{" "}
            <a className="hover:text-[#26B2D2] cursor-pointer" href="https://www.facebook.com/taghreed.essam.65468">
              {t("footer.designedByName")}
            </a>
          </motion.p>

          <motion.p className={`text-[#00151A] font-semibold text-center mt-[2rem] ${lang === "ar" ? "text-[18px]" : "text-[16px] "}`} variants={childVariants}>
            {t("footer.codingByLabel")}{" "}
            <a className="hover:text-[#26B2D2] cursor-pointer" href="https://www.facebook.com/the.mercenary.sif">
              {t("footer.codingByName")}
            </a>
          </motion.p>
        </motion.div>

        <motion.p className="text-[16px] text-[#00151A] md:text-[18px] font-bold text-center mt-[2rem]" variants={childVariants}>
          {t("footer.copyright")}
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
