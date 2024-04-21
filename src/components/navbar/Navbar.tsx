// Import modules :
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import hamburger from "../../assets/svg/hamburger.svg";
import addUser from "../../assets/svg/addUser.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * Components Navbar :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Navbar = (): JSX.Element => {
  // État pour gérer l'état du menu déroulant
  const [toggle, setToggle] = useState(true);
  // Obtention de l'URL actuelle
  const location = useLocation();

  // Fonction pour basculer l'état du menu déroulant
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Effet pour mettre à jour l'état du menu déroulant en fonction de l'URL
  useEffect(() => {
    if (location.pathname === "/") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [location.pathname]);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={logo} alt="logo wealth health" />
          </NavLink>
        </div>
        <div className="navbar__toggle">
          <h1>HRnet Employees</h1>
          <NavLink to={toggle ? "/employees" : "/"} onClick={handleToggle}>
            <img
              src={toggle ? hamburger : addUser}
              alt={toggle ? "icône hamburger" : "icône addUser"}
            />
            <span>{toggle ? "Current" : "Create"}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

// Export Navbar
export default Navbar;
