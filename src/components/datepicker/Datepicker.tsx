import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.scss";

const Datepicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div className="datePicker">
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Datepicker;
