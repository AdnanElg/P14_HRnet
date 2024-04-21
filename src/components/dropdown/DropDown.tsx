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
  label, // Étiquette du champ déroulant
  name, // Nom du champ déroulant
  options, // Options du champ déroulant
  error, // Erreur éventuelle associée au champ déroulant
  control, // Contrôle pour le formulaire associé au champ déroulant
  resetKey, // Clé de réinitialisation
  dataTestId, // Identifiant de test pour les données
}: DropDownPropsType<TFieldValues>): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOptionType["options"][number] | null
  >(null);

  // Effet de réinitialisation de l'option sélectionnée lorsqu'une nouvelle clé de réinitialisation est reçue
  useEffect(() => {
    setSelectedOption(null);
  }, [resetKey]);

  return (
    <div className="dropdown" data-testid={dataTestId}>
      <label htmlFor={name}>{label}</label>
      {/*  Contrôle le champ de formulaire en utilisant le composant Select, gère la sélection qui met à jour l'état local 
      et le champ du formulaire, et affiche une icône d'erreur et un message d'erreur si une erreur est présente.  */}
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
