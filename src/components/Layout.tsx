import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "../pages/home/Home.tsx";
import Employees from "../pages/employees/Employees.tsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
