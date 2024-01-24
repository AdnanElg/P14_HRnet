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
  const [toggle, setToggle] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
