import "./Footer.scss";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo wealth health" />
      <p>Copyright 2023 Wealth Health</p>
    </footer>
  );
};

export default Footer;
