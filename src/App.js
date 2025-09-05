import { useTranslation } from "react-i18next";
import { Home } from "./pages/export";

function App() {
  const { i18n } = useTranslation();
  return (
    <div className={`${i18n.language === 'ar' ? "rtl" : "ltr"}`}>
       <Home/>
    </div>
  );
}

export default App;
