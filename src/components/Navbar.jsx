// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { icon_1, icon_10, icon_11, icon_2, icon_3, icon_4, icon_5, icon_7, icon_8, icon_9, logo, saFlag } from "./import";

const usFlag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // initialize lang from i18n (keeps in sync with persisted / init)
  const initialLang = i18n.language || "ar";
  const [lang, setLang] = useState(initialLang);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  // update document lang/dir whenever lang changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ar" ? "ar" : "en";
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  // keep local state synced if language changed elsewhere
  useEffect(() => {
    const handleLangChanged = (lng) => setLang(lng);
    i18n.on("languageChanged", handleLangChanged);
    return () => i18n.off("languageChanged", handleLangChanged);
  }, [i18n]);

  // close dropdown on outside click or Escape
  useEffect(() => {
    function onDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onDown);
    };
  }, []);

  // toggle language using i18next and persist choice
  function toggleLang(l) {
    i18n.changeLanguage(l);
    localStorage.setItem("lang", l);
    setLang(l);
    setOpen(false);
  }

  return (
    <>
      <div className="p-[2px] bg-gradient-to-r from-[#99ECFF] to-[#33DAFF] rounded-full">
        <div className={`w-[358px] sm:w-[558px] md:w-[758px] lg:w-[1000px] xl:w-[1328px] flex ${lang === "ar" ? "font-font-1" : "font-font-2"}   justify-center items-center md:px-[2rem] px-[1rem] py-1 md:py-2 bg-[#005366] h-[94px] gap-[1rem] rounded-full `}>
          <div className={`w-[103px] h-[59px] ${lang === 'ar' ? 'ml-auto' : 'mr-auto' }`}>
            <img className="object-fill" src={logo} alt="YouEarn-logo" />
          </div>

          <div className="flex lg:hidden justify-center items-center ">
            {!openMenu && (
              <svg
                onClick={() => setOpenMenu((s) => !s)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#E6E6E6] group-hover:text-[#2CD8FF] transition-colors duration-200"
                aria-hidden="true"
                role="img"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            )}
          </div>

          <div className={`hidden lg:flex  justify-center items-center gap-[1rem]`}>
            {/* home */}
            <div className={`flex   group items-center justify-center gap-2 p-2 cursor-pointer`}>
              <img className="w-[22px] h-[22px] object-fill group-hover:hidden" src={icon_1} alt="mail icon" />
              <img className="w-[22px] h-[22px] object-fill hidden group-hover:block" src={icon_2} alt="mail icon" />
              <p className={`text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-center   ${lang === "ar" ? "text-[18px]" : "text-[16px]"}  ${lang === 'ar' && 'xl:text-[20px]'}`}>
                {t("nav.home")}
              </p>
            </div>

            {/* calling center */}
            <div className={`flex   group items-center justify-center gap-2 p-2 cursor-pointer`}>
              <img className="w-[22px] h-[22px] object-fill group-hover:hidden" src={icon_3} alt="calling center icon" />
              <img className="w-[22px] h-[22px] object-fill hidden group-hover:block" src={icon_4} alt="calling center icon" />
              <p className={`text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-center ${lang === "ar" ? "text-[18px]" : "text-[16px]"}   ${lang === 'ar' && 'xl:text-[20px]'}`}>
                {t("nav.services")}
              </p>
            </div>

            {/* Sales and Science Services */}
            <div className={`flex   group items-center justify-center gap-2 p-2 cursor-pointer`}>
              <img className="w-[22px] h-[22px] object-fill group-hover:hidden" src={icon_8} alt="Sales and Science Services icon" />
              <img className="w-[22px] h-[22px] object-fill hidden group-hover:block" src={icon_9} alt="Sales and Science Services icon" />
              <p className={`text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-center ${lang === "ar" ? "text-[18px]" : "text-[16px]"}  ${lang === 'ar' && 'xl:text-[20px]'}`}>
                {t("nav.sales")}
              </p>
            </div>

            {/* Service provider */}
            <div className={`flex   group items-center justify-center gap-2 p-2 cursor-pointer`}>
              <img className="w-[32px] h-[32px] object-fill group-hover:hidden" src={icon_10} alt="Service provider icon" />
              <img className="w-[32px] h-[32px] object-fill hidden group-hover:block" src={icon_11} alt="Service provider icon" />
              <p className={`text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-center ${lang === "ar" ? "text-[18px]" : "text-[16px]"}  ${lang === 'ar' && 'xl:text-[20px]'}`} >
                {t("nav.providers")}
              </p>
            </div>

            {/* Contact us */}
            <div className={`flex   group items-center justify-center gap-2 p-2 cursor-pointer`}>
              <img className="w-[32px] h-[32px] object-fill group-hover:hidden" src={icon_5} alt="Contact us icon" />
              <img className="w-[32px] h-[32px] object-fill hidden group-hover:block" src={icon_7} alt="Contact us icon" />
              <p className={`text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-center ${lang === "ar" ? "text-[18px]" : "text-[16px]"}   ${lang === 'ar' && 'xl:text-[20px]'}`} >
                {t("nav.contact")}
              </p>
            </div>

            {/* language switch */}
            <div className={`relative hidden lg:flex   justify-center items-center gap-2 mr-auto`}>
              {/* visible button: Arabic or English */}
              {lang === "ar" ? (
                <button
                  id="arabicBtn"
                  className="flex justify-center items-center gap-3 text-[#E6E6E6]  text-[24px] px-4 py-2 transition-colors duration-300 hover:text-[#2CD8FF] cursor-pointer bg-transparent"
                  aria-label="العربية"
                >
                  <img src={saFlag} alt="Saudi" className="w-[32px] h-[24px] object-fill" />
                  <span className="select-none">{t("nav.arabic")}</span>
                </button>
              ) : (
                <button
                  id="englishBtn"
                  className="flex items-center gap-3 text-[#E6E6E6]  text-[18px] px-4 py-2 transition-colors duration-300 hover:text-[#2CD8FF] cursor-pointer bg-transparent"
                  aria-label="English"
                >
                  <img src={usFlag} alt="USA Flag" className="w-[32px] h-[24px] object-fill" />
                  <span className="select-none">{t("nav.english")}</span>
                </button>
              )}

              {/* Dropdown toggle */}
              <div className="relative inline-block text-left" ref={menuRef}>
                <button
                  id="langDropdownToggle"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={() => setOpen((s) => !s)}
                  className="w-[45px] h-[45px] flex items-center justify-center transition-colors duration-300 text-[#EFEFEF] hover:text-[#2CD8FF] cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-[34px] fill-current" viewBox="0 -960 960 960" aria-hidden="true">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </button>

                <ul
                  id="langDropdownMenu"
                  className={`absolute ${lang === 'ar' ? 'left-[25%]' : 'right-[25%]' }  mt-2 w-[12rem] py-2 rounded-md shadow-md bg-[#005366] z-50 transition-opacity origin-top-right ${
                    open ? "block opacity-100" : "hidden opacity-0 pointer-events-none"
                  }`}
                  role="menu"
                  aria-label="Language menu"
                >
                  <li
                    onClick={() => toggleLang("ar")}
                    className="flex items-center gap-3 text-[18px] cursor-pointer px-4 py-2 text-[#EFEFEF] hover:text-[#2CD8FF]"
                    role="menuitem"
                  >
                    <img src={saFlag} alt="Saudi" className="w-[22px] h-[22px] object-contain" />
                    <span>العربية 🇸🇦</span>
                  </li>

                  <li
                    onClick={() => toggleLang("en")}
                    className="flex items-center gap-3 text-[18px] cursor-pointer px-4 py-2 text-[#EFEFEF] hover:text-[#2CD8FF]"
                    role="menuitem"
                  >
                    <img src={usFlag} alt="USA Flag" className="w-[22px] h-[22px] object-contain" />
                    <span>English 🇺🇸</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      {openMenu && <Menu toggleLang={toggleLang} lang={lang} closeMenu={() => setOpenMenu(false)} t={t}/>}
    </>
  );
};

export default Navbar;

/* ---------- Mobile Menu component ---------- */
const Menu = ({ toggleLang, lang, open = true, closeMenu , t}) => {
  return (
    <div
      className={`fixed lg:hidden max-h-full overflow-y-auto flex flex-col justify-start items-center top-0 right-0 h-full w-[80%] max-w-[300px] bg-[#114655] text-[#E6E6E6] shadow-lg transform transition-transform duration-300 z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* menu items */}
      <div className="flex lg:hidden justify-end items-center p-[2rem] mt-[1rem] w-full ">
        <svg
          onClick={() => closeMenu()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#E6E6E6] group-hover:text-[#2CD8FF] transition-colors duration-200 cursor-pointer"
          aria-hidden="true"
          role="img"
        >
          <path d="M18 6 L6 18" />
          <path d="M6 6 L18 18" />
        </svg>
      </div>

      <div className="flex group items-center  justify-start gap-2  cursor-pointer w-[90%] p-[2rem]">
        <img className="w-[22px] h-[22px] object-fill group-hover:hidden" src={icon_1} alt="icon" />
        <img className="w-[22px] h-[22px] object-fill hidden group-hover:block" src={icon_2} alt="icon" />
        <p className="text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-start text-[22px]">
          {t("nav.home")}
        </p>
      </div>

      {/* other menu items... */}
      <div className="flex group items-center justify-start gap-2 cursor-pointer w-full p-[2rem]">
        <img className="w-[22px] h-[22px] object-fill group-hover:hidden" src={icon_3} alt="icon" />
        <img className="w-[22px] h-[22px] object-fill hidden group-hover:block" src={icon_4} alt="icon" />
        <p className="text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-start text-[22px]">
          {t("nav.services")}
        </p>
      </div>

      <div className="flex group items-center justify-start gap-2  cursor-pointer w-full p-[2rem]">
        <img className="w-[22px] h-[22px] object-fill group-hover:hidden" src={icon_8} alt="icon" />
        <img className="w-[22px] h-[22px] object-fill hidden group-hover:block" src={icon_9} alt="icon" />
        <p className="text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-start text-[22px]">
          {t("nav.sales")}
        </p>
      </div>

      <div className="flex group items-center w-full justify-start gap-2  p-[2rem] cursor-pointer">
        <img className="w-[32px] h-[32px] object-fill group-hover:hidden" src={icon_10} alt="icon" />
        <img className="w-[32px] h-[32px] object-fill hidden group-hover:block" src={icon_11} alt="icon" />
        <p className="text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-start text-[22px]">
          {t("nav.providers")}
        </p>
      </div>

      <div className="flex group items-center justify-start gap-2 w-full p-[2rem] cursor-pointer">
        <img className="w-[32px] h-[32px] object-fill group-hover:hidden" src={icon_5} alt="icon" />
        <img className="w-[32px] h-[32px] object-fill hidden group-hover:block" src={icon_7} alt="icon" />
        <p className="text-[#E6E6E6] group-hover:text-[#2CD8FF] font-normal text-start text-[22px]">
          {t("nav.contact")}
        </p>
      </div>

      {/* language chooser inside menu */}
      <div className="w-full border-t border-[#0b3b44] p-[2rem]">
        <button
          onClick={() => {
            toggleLang("ar");
            closeMenu();
          }}
          className={`w-full text-start text-[22px] px-2 py-2 ${lang === "ar" ? "text-[#2CD8FF]" : "text-[#E6E6E6]"}`}
        >
          {t("nav.arabic")} 🇸🇦
        </button>
        <button
          onClick={() => {
            toggleLang("en");
            closeMenu();
          }}
          className={`w-full text-start px-2 text-[22px] py-2 ${lang === "en" ? "text-[#2CD8FF]" : "text-[#E6E6E6]"}`}
        >
          {t("nav.english")} 🇺🇸
        </button>
      </div>
    </div>
  );
};
