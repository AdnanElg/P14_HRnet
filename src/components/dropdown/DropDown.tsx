// Import modules :
import "./DropDown.scss";
import { useEffect, useState } from "react";
import Select from "react-select";
import exclamation from "../../assets/svg/exclamation.svg";
import { Controller, FieldValues } from "react-hook-form";
import { DropdownOptionType, DropDownPropsType } from "./Dropdown.types";

/**
 * Components DropDown :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const DropDown = <TFieldValues extends FieldValues>({
  label,
  name,
  options,
  error,
  control,
  resetKey,
  dataTestId,
}: DropDownPropsType<TFieldValues>): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOptionType["options"][number] | null
  >(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [resetKey]);

  return (
    <div className="dropdown" data-testid={dataTestId}>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
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
                  alt={`icône exclamation ${dataTestId}`}
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
export default DropDown;
