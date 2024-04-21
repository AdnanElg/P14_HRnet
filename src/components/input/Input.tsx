// Import modules :
import "./Input.scss";
import { InputProps } from "./Input.types";
import exclamation from "../../assets/svg/exclamation.svg";

/**
 * Components Input :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Input = ({
  type, // Type de l'input (text, email, etc.)
  label, // Libellé de l'input
  name, // Nom de l'input
  register, // Fonction de registration
  error, // Message d'erreur éventuel
  dataTestId, // Identifiant de test pour les données
}: InputProps): JSX.Element => {
  return (
    // Affiche un champ de saisie avec une étiquette, gère l'enregistrement des données,
    // et affiche une icône d'erreur et un message d'erreur si nécessaire.
    <div className="input" data-testid={dataTestId}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...register} />
      {error && (
        <div className="input__error">
          <img
            src={exclamation}
            className="input__error__img"
            alt={`icône exclamation ${dataTestId}`}
          />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

// Export Input
export default Input;
