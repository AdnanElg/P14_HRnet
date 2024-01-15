// Import modules :
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.scss";
import { DatePickerPropsType } from "../../types/components/datepicker/DatepickerType";
import exclamation from "../../assets/svg/exclamation.svg";
import { Controller, FieldValues } from "react-hook-form";
import moment from "moment";

/**
 * Components Datepicker :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Datepicker = <TFieldValues extends FieldValues>({
  label,
  name,
  error,
  control,
  resetKey,
}: DatePickerPropsType<TFieldValues>): JSX.Element => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  useEffect(() => {
    setStartDate(new Date());
  }, [resetKey]);

  return (
    <div className="datePicker">
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                const formattedDate = moment(date).format("MM/DD/YYYY");
                field.onChange(formattedDate);
              }}
            />
            {error && (
              <div className="datePicker__error">
                <img
                  src={exclamation}
                  className="datePicker__error__img"
                  alt="icône exclamation"
                />
                <p>{error}</p>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

// Export Datepicker
export default Datepicker;
