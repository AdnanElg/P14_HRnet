// Import modules :
import "./Home.scss";
import Form from "../../components/form/Form";

/**
 * Components Home :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <main className="container__home">
      <h1>Add an employee</h1>
      <Form />
    </main>
  );
};

// Export modules :
export default Home;
