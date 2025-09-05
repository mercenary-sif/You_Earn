import React from "react";
import { Card } from '../components/export';
import { whyUs } from "./content";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      when: "beforeChildren",
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const WhyChooseUs = ({ start = false }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "ar";

  return (
    <motion.div
      className="flex flex-col flex-wrap xl:flex-nowrap lg:flex-row justify-center items-center gap-[2rem] p-[2rem] mt-[-1rem] lg:mt-[-5rem] z-[999]"
      variants={containerVariants}
      initial="hidden"
      animate={start ? "show" : "hidden"}
    >
      {whyUs.map((item, i) => {
        const title = lang === "ar" ? (item.title_ar || "") : (item.title_en || item.title_ar || "");
        const content = lang === "ar" ? (item.content_ar || "") : (item.content_en || item.content_ar || "");
        return (
          <motion.div key={item.key || i} variants={cardVariant} style={{ width: "100%", maxWidth: 405 }}>
            <Card
              title={title}
              content={content}
              icon={item.icon}
              icHover={item.iconHover}
              Ic_hight={`46px`}
              Ic_width={`46px`}
              lang={i18n.language}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default WhyChooseUs;
