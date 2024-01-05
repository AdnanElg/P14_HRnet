import { useState } from "react";
import "./DropDown.scss";
import Select from "react-select";
import { DropdownOptionType } from "../../types/components/dropdown/DropdownType";

const DropDown = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: DropdownOptionType["options"];
}) => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOptionType["options"][number] | null
  >(null);

  return (
    <div className="dropdown">
      <label htmlFor={name}>{label}</label>
      <Select
        defaultValue={selectedOption}
        onChange={(selectedOption) => setSelectedOption(selectedOption)}
        options={options}
      />
    </div>
  );
};

export default DropDown;
