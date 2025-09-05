import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Story = ({icon, icHover, title, point, Ic_width , Ic_hight}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <motion.section
      className={`group bg-[#FFFFFF] shadow-dual-cyan flex ${lang === "ar" ? "font-font-1" : "font-font-2"} w-full lg:w-[70%] flex-col justify-start items-start gap-[1rem] md:gap-[2rem] p-2 rounded-[2rem] md:p-[2rem] outline-none border-[4px] border-transparent hover:border-[#26B2D2]`}
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{amount: 0.25 }}
    >
      <div className="flex w-full justify-start items-center gap-[1rem]">
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill group-hover:hidden`} src={icon} alt="story icon" />
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill hidden group-hover:block  hover-anim `} src={icHover} alt="story icon" />
        <h3 className="text-[#00151A] font-bold h-full text-[18px] sm:text-[22px] md:text-[28px]" > {title} </h3>
      </div>

      <motion.div className="flex w-full justify-center items-center" variants={paragraphVariant}>
        {lang === 'ar' ? <ArabicContent point={point} /> : <EnglishContent point={point} />}
      </motion.div>
    </motion.section>
  )
}

export default Story

/* ---------- ArabicContent (unchanged) ---------- */
const ArabicContent = ({point}) => {
  return (
    <div className="flex  flex-col justify-center items-center p-2 gap-[2rem]">
         <div className="flex  justify-start items-center gap-[2rem]">
            <img className={`w-[16px] h-[16px] object-fill`} src={point} alt="point icon" />
            <div className="flex flex-col  justify-start items-center gap-[1rem]">
                 <p className="text-[#00151A] font-semibold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]" >
                مـنـذ تـأسـيـسـنـا، حرصـنا عـلى بـنـاء شــراكـة مــع شــركـة عـلـم لـنــصـبـح شـريـكًا فــي مـبــيعــات خـدمــاتــه الإلكترونية ونتولى الـتـســويــق وبــيـع الــخــدمـات الإلـكـتـرونـيـة لـشـركـة  <span className="text-[#2CD8FF] font-bold">“عـلــم” </span>والـتـي تــشــمـل:
                </p>
                <p className="text-[#00151A] font-semibold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]">
                    (مـقيـم، تـم، مــسـارات، الـبـوابة الـذكـيـة ). نـحـن دائـمًا نـسعى لـنـكون ذراعًـا داعـمًـــا لــشــركـة <span className="text-[#2CD8FF] font-bold">“عـلــم” </span> يـعــزز تــحــقـيــق أهــدافـهـا فـي بــيــع خــدمـاتــهــا الإلكـتـرونـيـــة.
                </p>
            </div>
       </div>
       <div className="flex w-full justify-start items-center gap-[2rem]">
            <img className={` w-[16px] h-[16px] object-fill`} src={point} alt="point icon" />
            <p className="text-[#00151A] font-semibold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]" >
                في عام <span className="text-[#2CD8FF] font-bold">2016 </span> تم تفعيل اتفاقية مع شركة <span className="text-[#2CD8FF] font-bold">تكامل </span> ولاحقًا شركة  <span className="text-[#2CD8FF] font-bold">“عمل المـستقبل” </span> لنصبح
             مـن أوائل مـقـدمـي خدمات العـمـل عـن بـعـد. لاحقًـا انضممنا إلى مقدمي خدمات مرن لـلـعـمـل الـمـرن ونـسـعى إلـى تـعـزيـز وتـفـعيـل <span className="text-[#2CD8FF] font-bold"> مـبـادرات وزارة المـوارد البشرية والتنمية الاجتماعيـة </span>، من خـلال المـشـاركة في مبادرتها لتحسين التوظيف عبر بنية تحتية تقـنـية تربط شركات القطـاع الخاص بالموظفين والشركـات التابعة للوزارة.
            </p>
       </div>
    </div>
  )
}

/* ---------- EnglishContent (translated version) ---------- */
const EnglishContent = ({ point }) => {
  return (
    <div className="flex  flex-col justify-center items-center p-2 gap-[2rem]">
      <div className="flex  justify-start items-center gap-[2rem]">
        <img className={`w-[16px] h-[16px] object-fill`} src={point} alt="point icon" />
        <div className="flex flex-col  justify-start items-center gap-[1rem]">
          <p className="text-[#00151A] font-semibold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]">
            Since our founding, we have worked to build a partnership with <span className="text-[#2CD8FF] font-bold">Elm</span> to become a partner in selling its electronic services and to handle the marketing and sale of Elm’s digital offerings, which include:
          </p>
          <p className="text-[#00151A] font-semibold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]">
            (Muqeem, Tam, Masarat, the Smart Portal). We always aim to be a strong supporting arm for <span className="text-[#2CD8FF] font-bold">Elm</span>, helping it achieve its goals in delivering and selling its electronic services.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-start items-center gap-[2rem]">
        <img className={` w-[16px] h-[16px] object-fill`} src={point} alt="point icon" />
        <p className="text-[#00151A] font-semibold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]">
          In <span className="text-[#2CD8FF] font-bold">2016</span> we activated an agreement with <span className="text-[#2CD8FF] font-bold">Takamul</span> and later with <span className="text-[#2CD8FF] font-bold">"Work of the Future"</span>, becoming one of the early providers of remote-work services. We subsequently joined the cohort of flexible-work providers and continue to work on strengthening and implementing the <span className="text-[#2CD8FF] font-bold">Ministry of Human Resources and Social Development</span> initiatives by participating in programs that improve employment through a technical infrastructure connecting private-sector companies with employees and ministry-affiliated organizations.
        </p>
      </div>
    </div>
  )
}
