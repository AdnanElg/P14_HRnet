// Import modules :
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "../pages/home/Home";
import Employees from "../pages/employees/Employees";
import NotFound from "../pages/notFound/NotFound";

/**
 * Components Layout :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

// Export Layout
export default Layout;
