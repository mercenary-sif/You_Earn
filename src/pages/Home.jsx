import { useState } from 'react';
import {AboutUs, Header, OurCustomers, WhyChooseUs, WinningApplications, WinningPillars} from '../containers/export'
import { winningApplications, winningPillars } from '../containers/content';
import { icon_33, icon_34, icon_35, icon_36 } from '../containers/import';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const Home = () => {
    const [headerShown, setHeaderShown] = useState(false);
    const { t } = useTranslation();
    const winningApplicationsTitle =  t('winningApplications.title');
    const WinningPillarsTitle =  t('WinningPillars.title');
  return (
    <div>
      <Header onShowComplete={() => setTimeout(()=>setHeaderShown(true), 300)} />
      <WhyChooseUs start={headerShown} />
      <AboutUs/>
      <WinningPillars title={WinningPillarsTitle} icon={icon_34} hoverIcon={icon_33} IcWidth={'31px'}  IcHight={'31px'} data={winningPillars} />
      <WinningApplications title={winningApplicationsTitle} icon={icon_35} hoverIcon={icon_36} IcWidth={'51px'}  IcHight={'35px'} data={winningApplications} />
      <OurCustomers/>
      <Footer/>
    </div>
  )
}

export default Home
