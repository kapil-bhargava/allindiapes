  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import PublicLayout from "../layout/PublicLayout";

  import About from "../pages/About";
  import Contact from "../pages/Contact";
  import Patrakars from "../pages/Patrakars";
  import FullTeamPage from "../pages/FullTeamPage";
  import ContactPage from "../pages/Contact";
  import { ToastProvider } from "../context/ToastContext";
  import PrivacyPolicy from "../pages/PrivacyPolicy";
  import TermsConditions from "../pages/TermsConditions";
  import HelpCenter from "../pages/HelpCenter";
  import HomePage2 from "../pages/Home";
  import NotFoundPage from "../pages/NotFound";
  import ScrollToTop from "../components/ScrollToTop";
  import Activities from "../components/Activities";
  import ActivitiesPreview from "../components/ActivitiesPreview";
  import HomePage5 from "../Test1";
  import HomePage from "../pages/Home";
  import AdminLayout from "../layout/AdminLayout";
  import Members from "../pages/admin/Members";

  const AppRoutes = () => {
    return (
      <BrowserRouter>
        <ToastProvider>
          <ScrollToTop/>
          <Routes>

            {/* Admin  routes  */}
            <Route path="/admin" element={<AdminLayout />}>
              {/* <Route path="/admin" element={<Dashboard />} /> */}
              <Route path="members" element ={<Members/>} />
              {/* <Route path="events" element={<Events />} /> */}
            </Route>

            {/* Public routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/" element={<NotFoundPage />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/members" element={<FullTeamPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/activities" element={<Activities />} />
              {/* <Route path="/activities" element={<ActivitiesPreview  />} /> */}
              <Route path="*" element={<NotFoundPage />} /> {/* Fallback to Not Found page for unknown routes */}
            </Route>

          </Routes>
        </ToastProvider>
      </BrowserRouter>
    );
  };

  export default AppRoutes;