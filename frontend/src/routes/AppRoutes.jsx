import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Patrakars from "../pages/Patrakars";
import HomePage from "../Test1";
import FullTeamPage from "../pages/FullTeamPage";
import ContactPage from "../pages/Contact";
import { ToastProvider } from "../context/ToastContext";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import HelpCenter from "../pages/HelpCenter";
import HomePage2 from "../pages/Home";
import NotFoundPage from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route element={<PublicLayout />}>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<NotFoundPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<FullTeamPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/home2" element={<HomePage2 />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Fallback to Not Found page for unknown routes */}
          </Route>

        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;