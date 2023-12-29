import { NavLink } from "react-router-dom";
import notFound from "../../assets/svg/notFound.svg";
import "./Error.scss";

const Error = () => {
  <section className="error">
    <img src={notFound} alt="picture 404" />
    <p>Oops ! The page you are requesting does not exist.</p>
    <NavLink to="/">
      <span>Return to home page</span>
    </NavLink>
  </section>;
};

export default Error;
