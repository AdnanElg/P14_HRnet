import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import hamburger from "../../assets/svg/hamburger.svg";
import addUser from "../../assets/svg/addUser.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
              alt={toggle ? "icône hamburge" : "icône addUser"}
            />
            <span>{toggle ? "Current" : "Create"}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
