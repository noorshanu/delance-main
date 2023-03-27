import Academy from "Pages/Academy";
import HowBuy from "Pages/HowBuy";
import JobPortal from "Pages/JobPortal";
import NftMarket from "Pages/NftMarket";
import Privacy from "Pages/Privacy";
import Reward from "Pages/Reward";
import Risk from "Pages/Risk";
import TeamPage from "Pages/TeamPage";
import Terms from "Pages/Terms";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import Home from "Pages/Home";
import NotFound from "Pages/404Page";
import CookieConcent from "Components/CookieConcent";
import NewToCrypto from "Pages/NewToCrypto";
import i18next from "i18next";

const changeLanguage = (lng) => {
  i18next.changeLanguage(lng);
};

function NestedApp() {
  const location = useLocation();
  const params = useParams();
  const lang = i18next.language;

  if (lang != params.locale) {
    changeLanguage(params.locale);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft-market" element={<NftMarket />} />
        <Route path="/job-portal" element={<JobPortal />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/risk" element={<Risk />} />
        <Route path="/rewards" element={<Reward />} />
        <Route path="/how-to-buy" element={<HowBuy />} />
        <Route path="/new-to-crypto" element={<NewToCrypto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <CookieConcent />
    </div>
  );
}

export default NestedApp;
