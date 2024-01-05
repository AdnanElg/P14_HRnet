import "./Input.scss";
import { RegisterType } from "../../types/components/input/Input";
import exclamation from "../../assets/svg/exclamation.svg";

const Input = ({
  type,
  label,
  name,
  register,
  error,
}: {
  type: string;
  name: string;
  label: string;
  error?: string;
  register: RegisterType;
}) => {
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

export default Input;
