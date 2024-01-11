import DataTable from "@ognimelo/hrnet-datatable";
import "./Table.scss";
import { dataColumn } from "../../data/MockUpListEmployees.json";
// import { dataUsers } from "../../data/MockUpListEmployees.json";
import { useSelector } from "react-redux";
import { formSlice } from "../../services/features/FormSlice";

const Table = () => {
  const user = useSelector((state) => state.formSlice.data);

  return (
    <div className="table">
      <DataTable columns={dataColumn} data={user} />
    </div>
  );
};
export default Table;
