import "./Form.scss";
import addUser from "../../assets/svg/addUser.svg";
import FirstName from "../input/firstName/FirstName";
import LastName from "../input/lastName/LastName";
import Datepicker from "../datepicker/Datepicker";
import Street from "../input/street/Street";
import City from "../input/city/City";
import ZipCode from "../input/zipCode/ZipCode";
import DropDown from "../dropdown/DropDown";
import { dataState, dataDepartment } from "../../data/MockUpHome.json";

const Form = () => {
  const stateOptions = dataState.map((item) => ({
    value: item.abbreviation,
    label: item.name,
  }));

  const stateDepartment = dataDepartment.map((item) => ({
    label: item.name,
  }));

  return (
    <div className="form">
      <form action="#" id="new-employee">
        <img src={addUser} alt="icône addUser" />
        <FirstName />
        <LastName />
        <Datepicker label="Date of Birth" />
        <fieldset>
          <legend>Address</legend>
          <Street />
          <City />
          <ZipCode />
          <DropDown label="State" options={stateOptions} />
        </fieldset>
        <Datepicker label="Start Date" />
        <DropDown label="Department" options={stateDepartment} />
      </form>
      <button className="form__btn">Save</button>
    </div>
  );
};

export default Form;
