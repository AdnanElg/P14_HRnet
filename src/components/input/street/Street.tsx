import "./Street.scss";

const Street = () => {
  return (
    <div className="street">
      <label htmlFor="street">Street</label>
      <input type="text" id="street" name="street" />
    </div>
  );
};

export default Street;
