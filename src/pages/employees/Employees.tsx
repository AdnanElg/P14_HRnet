// Import modules :
import Table from "../../components/table/Table";
import "./Employees.scss";

/**
 * Components Employees :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Employees = (): JSX.Element => {
  return (
    <main className="container__listemployees">
      <h1>Employees list</h1>
      <Table />
    </main>
  );
};

// Export modules :
export default Employees;
