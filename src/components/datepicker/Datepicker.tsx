import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.scss";

const Datepicker = ({ label, name }: { label: string; name: string }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div className="datePicker">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Datepicker;
