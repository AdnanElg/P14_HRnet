// Import modules :
import "./NotFound.scss";
import Error from "../../components/error/Error.tsx";

/**
 * Components NotFound :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const NotFound = (): JSX.Element => {
  return (
    <main className="container__notFound">
      <Error />
    </main>
  );
};

// Export modules :
export default NotFound;
