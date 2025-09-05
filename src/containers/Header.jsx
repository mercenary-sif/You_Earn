// src/containers/Header.jsx
import { useEffect, useRef } from 'react';
import { NavBar } from '../components/export';
import { headerCover } from './import';
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const parentVariants = {
  hidden: {},
  show: {
    transition: {
      // time between each direct child (NavBar, H1-container, H2, Button)
      staggerChildren: 0.8,
      delayChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// H1 word-by-word container + word variants
const wordsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Header = ({ onShowComplete}) => {
  const controls = useAnimation();
  const { t, i18n } = useTranslation();
  const firstRunRef = useRef(true);

  // translated strings
  const h1TextRaw = t("header.h1") || "";
  const h2Text = t("header.h2") || "";
  const ctaText = t("header.cta") || "";

  // normalize whitespace and split into words robustly
  const words = h1TextRaw.replace(/\u00A0/g, " ").trim().split(/\s+/).filter(Boolean);
  
  // Start animation on mount and replay when language changes.
  // Only call onShowComplete after the first animation run.
  useEffect(() => {
   
    let mounted = true;
    (async () => {
      // reset to hidden then play show so new spans animate
      await controls.set("hidden");
      if (!mounted) return;
      await controls.start("show");

      if (mounted && firstRunRef.current) {
        firstRunRef.current = false;
        if (typeof onShowComplete === "function") onShowComplete();
      }
    })();
    return () => {
      mounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, i18n.language]);

  return (
    <div className="relative flex flex-col justify-center items-center p-2 py-[2rem] md:p-[2rem] h-[582px] overflow-hidden">
      <img
        src={headerCover}
        alt="header cover"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#00151A 35%, #4D4D4D 100%)',
          opacity: 0.45,
        }}
      />

      {/* Parent that controls the sequential show on mount */}
      <motion.div
        className="relative z-10 w-full flex flex-col justify-center items-center gap-[4rem] p-[1rem]"
        variants={parentVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={childVariant}>
          <NavBar />
        </motion.div>

        <div className="flex flex-col w-full justify-center items-center gap-[3rem] py-[1rem] md:py-[2rem]">
          <motion.div
            className="w-full md:w-[80%] flex justify-center items-center gap-[1rem]"
            variants={childVariant}
          >
            {/* H1: word-by-word (preserves Arabic shaping)
                NOTE: animate={controls} ensures the wordsContainer receives "show" */}
            <motion.h1
              variants={wordsContainer}
              initial="hidden"
              animate={controls}
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className={`${i18n.language === "ar" ? "font-font-1" : "font-font-2"} text-[#E6E6E6] font-extrabold text-center h-full text-[20px] lg:text-[32px] overflow-hidden`}
              aria-label={h1TextRaw}
            >
              {words.map((word, i) => {
                const withSpace = i === words.length - 1 ? word : `${word}\u00A0`;
                // language-aware key so React recreates spans on language change
                const key = `${i18n.language}-${i}-${word}`;
                return (
                  <motion.span
                    key={key}
                    variants={wordVariant}
                    style={{ display: "inline-block" }}
                  >
                    {withSpace}
                  </motion.span>
                );
              })}
            </motion.h1>
          </motion.div>

          <motion.div
            className="w-full flex flex-col justify-center items-center gap-[2rem]"
            variants={childVariant}
          >
            <motion.h2 className={`${i18n.language === "ar" ? "font-font-1" : "font-font-2"} text-[#E6E6E6] font-normal text-center ${i18n.language ==='ar' ? "text-[20px]": "text-[18px]"} ${i18n.language === "ar" ? "lg:text-[32px]" : "lg:text-[25px]" }`}>
              {h2Text}
            </motion.h2>

            {/* CTA Button */}
            <motion.button
              className={`${i18n.language === "ar" ? "font-font-1" : "font-font-2"} inline-flex group outline-none hover:border-[#19cffd] border-transparent border-[3px] bg-[#228DAA] hover:bg-[#022831] rounded-lg justify-center items-center gap-[1rem] px-[3rem] py-[8px] hover:cursor-pointer`}
              variants={childVariant}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-[#041215] group-hover:text-[#E6E6E6] font-normal h-full text-[14px] sm:text-[16px] md:text-[22px]">
                {ctaText}
              </p>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
