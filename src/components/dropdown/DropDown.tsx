import { useState } from "react";
import "./DropDown.scss";
import Select from "react-select";
import {
  StateOptionsType,
  DepartmenOptionType,
  RegisterType,
} from "../../types/components/dropdown/DropdownType";

const DropDown = ({
  label,
  options,
  register,
  error,
}:
  | StateOptionsType
  | (DepartmenOptionType & { register: RegisterType; error?: string })) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dropdown">
      <label htmlFor="state">{label}</label>
      <Select
        {...register}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <p className="dropdown__error">{error}</p>
    </div>
  );
};

export default DropDown;
