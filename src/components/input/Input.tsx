import "./Input.scss";

const Input = ({ name }: { name: string }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} name={name} />
    </div>
  );
};

export default Input;
