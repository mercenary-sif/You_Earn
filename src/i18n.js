import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const defaultLng = savedLang || "ar";

const resources = {
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        services: "خدمات مراكز الاتصال",
        sales: "مبيعات وخدمات علم",
        providers: "مزود خدمة",
        contact: "تواصل معنا",
        arabic: "العربية",
        english: "English",
      },
      header: {
        h1: "حلول مبتكرة لمراكز الاتصال والتعهيد – الجودة والاحترافية في خدمتك",
        h2:
          "في تكسب نقدم لك حلولًا متكاملة لإدارة مراكز الاتصال، التسويق عبر الهاتف، وخدمات التعهيد، لنساعدك على تحسين تجربة عملائك وتعزيز نمو أعمالك.",
        cta: "تواصل معنا"
      },
      about: {
        title: "من نحن",
      },
      WinningPillars: {
        title: "ركائز تكسب",
      },
       winningApplications: {
        title: "تطبيقات تكسب",
      },
       customers: {
        title: "عملاء تكسب",
      },footer: {
        sections: {
          services: {
            title: "خدمات مراكز اتصال",
            items: [
              "خدمة إسناد مركز إتصال",
              "خدمة إسناد مركز إتصال ـ مؤقت",
              "خدمة مركز الإتصال السحابي"
            ]
          },
          elm: {
            title: "مبيعات وخدمات علم",
            items: [
              "خدمة مقيم",
              "خدمة تم",
              "مسارات",
              "البوابة الذكية"
            ]
          },
          provider: {
            title: "مزود خدمة",
            items: [
              "العمل المرن",
              "العمل عن بعد",
              "مزود خدمات"
            ]
          },
          about: {
            title: "عنا",
            items: [
              "الأحكام والشروط",
              "سياسة الخصوصية",
              "إتصل بنا"
            ]
          }
        },
        social: "تابعنا",
        designedByLabel: "صممته :",
        designedByName: "Taghreed Essam",
        codingByLabel: "تمت برمجته من :",
        codingByName: "Aguaguena Sif Eddine (The Mercenary)",
        copyright: "© 2025 جميع الحقوق محفوظة لتكسب."
      }
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Contact Center Services",
        sales: "Sales & Services",
        providers: "Service Provider",
        contact: "Contact Us",
        arabic: "العربية",
        english: "English",
      },
      header: {
        h1: "Innovative solutions for contact centers & outsourcing — quality and professionalism at your service",
        h2:
          "At Takseb we provide integrated solutions to manage contact centers, telemarketing and outsourcing services to help you improve customer experience and grow your business.",
        cta: "Contact Us"
      },
      about: {
        title: "About Us",
      },
       WinningPillars: {
        title: "You Earn pillars",
      },
       winningApplications: {
        title: "You Earn Applications",
      },
       customers: {
        title: "You Earn Clients",
      },
     footer: {
        sections: {
          services: {
            title: "Contact center services",
            items: [
              "Contact centre outsourcing",
              "Temporary contact centre outsourcing",
              "Cloud contact center service"
            ]
          },
          elm: {
            title: "Sales & Elm services",
            items: [
              "Muqeem service",
              "Tam service",
              "Masarat",
              "Smart Gateway"
            ]
          },
          provider: {
            title: "Service provider",
            items: [
              "Flexible work",
              "Remote work",
              "Service provider"
            ]
          },
          about: {
            title: "About",
            items: [
              "Terms & Conditions",
              "Privacy Policy",
              "Contact Us"
            ]
          }
        },
        social: "Follow us",
        designedByLabel: "Designed By :",
        designedByName: "Taghreed Essam",
        codingByLabel: "Coding by :",
        codingByName: "Aguaguena Sif Eddine (The Mercenary)",
        copyright: "© 2025 All rights reserved for You Earn."
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng,
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });


if (typeof document !== "undefined") {
  document.documentElement.lang = defaultLng === "ar" ? "ar" : "en";
  document.documentElement.dir = defaultLng === "ar" ? "rtl" : "ltr";
}

export default i18n;
