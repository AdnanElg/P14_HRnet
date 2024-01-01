import "./Form.scss";
import addUser from "../../assets/svg/addUser.svg";
// import FirstName from "../input/firstName/FirstName";
// import LastName from "../input/lastName/LastName";
import Datepicker from "../datepicker/Datepicker";
// import Street from "../input/street/Street";
// import City from "../input/city/City";
// import ZipCode from "../input/zipCode/ZipCode";
import DropDown from "../dropdown/DropDown";
import Input from "../input/Input";
import { dataState, dataDepartment } from "../../data/MockUpHome.json";

const Form = () => {
  const stateOptions = dataState.map((item) => ({
    label: item.name,
    value: item.abbreviation,
  }));

  const departmenOption = dataDepartment.map((item) => ({
    label: item.name,
  }));

  return (
    <div className="form">
      <form action="#" id="new-employee">
        <img src={addUser} alt="icône addUser" />
        <Input name="First-Name" />
        <Input name="Last-Name" />
        <Datepicker label="Date of Birth" />
        <fieldset>
          <legend>Address</legend>
          <Input name="Street" />
          <Input name="City" />
          <Input name="ZipCode" />
          <DropDown label="State" options={stateOptions} />
        </fieldset>
        <Datepicker label="Start Date" />
        <DropDown label="Department" options={departmenOption} />
      </form>
      <button className="form__btn">Save</button>
    </div>
  );
};

export default Form;
