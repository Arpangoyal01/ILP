import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Navbar fixed */}
      <Navbar />

      {/* Page content changes here */}
      <main>
        <Outlet />
      </main>

      {/* Footer fixed */}
      <Footer />
    </>
  );
};

export default MainLayout;
