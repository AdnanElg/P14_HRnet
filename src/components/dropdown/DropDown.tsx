import { useState } from "react";
import "./DropDown.scss";
import Select from "react-select";
import {
  StateOptionsType,
  DepartmenOptionType,
} from "../../types/components/dropdown/DropdownType";

const DropDown = ({
  label,
  options,
}: StateOptionsType | DepartmenOptionType) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dropdown">
      <label htmlFor="state">{label}</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default DropDown;
