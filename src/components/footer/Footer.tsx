// Import modules :
import "./Footer.scss";
import logo from "../../assets/img/logo.png";

/**
 * Components Footer :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo wealth health" />
      <p>Copyright 2023 Wealth Health</p>
    </footer>
  );
};

// Export Footer
export default Footer;
