import "./City.scss";

const City = () => {
  return (
    <div className="city">
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" />
    </div>
  );
};

export default City;
