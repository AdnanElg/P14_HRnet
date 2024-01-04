import "./Input.scss";
import { RegisterType } from "../../types/components/input/Input";

const Input = ({
  type,
  name,
  register,
  error,
}: {
  type: string;
  name: string;
  error?: string;
  register: RegisterType;
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} {...register} />
      <p className="input__error">{error}</p>
    </div>
  );
};

export default Input;
