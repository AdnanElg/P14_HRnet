import "./ZipCode.scss";

const ZipCode = () => {
  return (
    <div className="zipCode">
      <label htmlFor="zipCode">ZipCode</label>
      <input type="text" id="zipCode" name="zipCode" />
    </div>
  );
};

export default ZipCode;
