import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";

// import HomePage from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Patrakars from "../pages/Patrakars";
import HomePage from "../Test1";
import FullTeamPage from "../pages/FullTeamPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patrakars" element={<FullTeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;