import "./DropDown.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropDown = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div>
      <label htmlFor="state">State</label>
      <Dropdown
        options={options}
        onChange={(event) => event.value}
        value={defaultOption}
        placeholder="Select.."
      />
    </div>
  );
};

export default DropDown;