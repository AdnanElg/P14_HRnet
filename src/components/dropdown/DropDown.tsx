import { useState } from "react";
import "./DropDown.scss";
import Select from "react-select";
import { DropdownOptionType } from "../../types/components/dropdown/DropdownType";
import exclamation from "../../assets/svg/exclamation.svg";
import { RegisterType } from "../../types/components/dropdown/DropdownType";
import {Controller, ControllerProps} from "react-hook-form";

const DropDown = ({
  label,
  name,
  options,
  register,
  error,
  control
}: {
  label: string;
  name: string;
  options: DropdownOptionType["options"];
  error?: string;
  register: RegisterType;
  control: ControllerProps;
}) => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOptionType["options"][number] | null
  >(null);

  return (
    <div className="dropdown">
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}        
        {...register}
        render={({ field }) => (
          <>
            <Select
              value={selectedOption}
              onChange={(selectedOption) => {
                setSelectedOption(selectedOption);
                field.onChange(selectedOption?.value);
              }}
              options={options}
            />
            {error && (
              <div className="dropdown__error">
                <img
                  src={exclamation}
                  className="dropdown__error__img"
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

export default DropDown;
