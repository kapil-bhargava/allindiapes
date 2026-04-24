import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Footer2 from "../components/Footer2";
import Navbar2 from "../components/Navbar2";

const PublicLayout = () => {
  return (
    <>
      {/* <Navbar2 /> */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <Footer2 /> */}
    </>
  );
};

export default PublicLayout;