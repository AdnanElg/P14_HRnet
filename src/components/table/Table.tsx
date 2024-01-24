// Import modules :
import "./Table.scss";
import DataTable from "@ognimelo/hrnet-datatable";
import { dataColumn } from "../../data/MockUpListEmployees.json";
import { dataUsers } from "../../data/MockUpListEmployees.json";
import { useSelector } from "react-redux";
import { FormUsersType } from "./Table.types";

/**
 * Components Table :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Table = (): JSX.Element => {
  const formUsers = useSelector((state: FormUsersType) => state.formSlice.data);
  const users = [...dataUsers, ...formUsers];

  return (
    <div className="table" data-testid="table">
      <h2>Currently {users.length} employees</h2>
      <DataTable columns={dataColumn} data={users} />
    </div>
  );
};

// Export Table
export default Table;
