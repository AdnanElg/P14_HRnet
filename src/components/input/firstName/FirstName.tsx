import "./FirstName.scss";

const FirstName = () => {
  return (
    <div className="firstName">
      <label htmlFor="firstname">First name</label>
      <input type="text" id="firstname" name="firstname" />
    </div>
  );
};

export default FirstName;
