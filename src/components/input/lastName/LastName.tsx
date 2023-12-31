import "./LastName.scss";

const LastName = () => {
  return (
    <div className="lastName">
      <label htmlFor="lastName">LastName</label>
      <input type="text" id="lastName" name="lastName" />
    </div>
  );
};

export default LastName;
