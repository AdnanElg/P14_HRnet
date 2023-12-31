import { useState } from "react";
import "./DropDown.scss";
import Select from "react-select";
import {
  StateOptionsType,
  StateDepartmenType,
} from "../../types/components/dropdown/DropdownType";

const DropDown = ({
  label,
  options,
}: {
  label: string;
  options: StateOptionsType | StateDepartmenType;
}) => {
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
