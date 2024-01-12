import "./Table.scss";
import DataTable from "@ognimelo/hrnet-datatable";
import { dataColumn } from "../../data/MockUpListEmployees.json";
import { dataUsers } from "../../data/MockUpListEmployees.json";
import { useSelector } from "react-redux";

const Table = () => {
  const formUsers = useSelector((state) => state.formSlice.data);
  const users = [...dataUsers, ...formUsers];

  return (
    <div className="table">
      <h2>Currently {users.length} employees</h2>
      <DataTable columns={dataColumn} data={users} />
    </div>
  );
};
export default Table;
