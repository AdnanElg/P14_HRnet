// Import modules :
import { NavLink } from "react-router-dom";
import notFound from "../../assets/svg/notFound.svg";
import "./Error.scss";

/**
 * Components Error :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Error = (): JSX.Element => {
  return (
    <section data-testid="error" className="error">
      <img src={notFound} alt="picture 404" />
      <p>Oops ! The page you are requesting does not exist.</p>
      <NavLink to="/">
        <span>Return to home page</span>
      </NavLink>
    </section>
  );
};

// Export Error
export default Error;
