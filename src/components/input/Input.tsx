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
  type,
  label,
  name,
  register,
  error,
}: InputProps): JSX.Element => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...register} />
      {error && (
        <div className="input__error">
          <img
            src={exclamation}
            className="input__error__img"
            alt="icône exclamation"
          />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

// Export Input
export default Input;
