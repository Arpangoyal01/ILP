import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Navbar visible everywhere */}
      <Navbar />

      {/* Page content changes here */}
      <main>
        <Outlet />
      </main>

      {/* Footer visible everywhere */}
      <Footer />
    </>
  );
};

export default MainLayout;
