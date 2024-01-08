import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.scss";
import { RegisterType } from "../../types/components/datepicker/Datepicker";


const Datepicker = ({ label, name, register }: { label: string; name: string; register: RegisterType }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div className="datePicker">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        {...register}
      />
    </div>
  );
};

export default Datepicker;
