import "./Form.scss";
import addUser from "../../assets/svg/addUser.svg";
import FirstName from "../input/firstName/FirstName";
import LastName from "../input/lastName/LastName";
import Datepicker from "../datepicker/Datepicker";
import Street from "../input/street/Street";
import City from "../input/city/City";
import ZipCode from "../input/zipCode/ZipCode";
import DropDown from "../dropdown/DropDown";

const Form = () => {
  return (
    <div className="form">
      <form action="#" id="new-employee">
        <img src={addUser} alt="icône addUser" />
        <FirstName />
        <LastName />
        <Datepicker />
        <fieldset>
          <legend>Address</legend>
          <Street />
          <City />
          <ZipCode />
          <DropDown />
        </fieldset>
      </form>
      <button className="form__btn">Save</button>
    </div>
  );
};

export default Form;
