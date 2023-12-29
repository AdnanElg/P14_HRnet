import "./Form.scss";
import addUser from "../../assets/svg/addUser.svg";

const Form = () => {
  return (
    <div className="form">
      <form action="#" id="new-employee">
        <img src={addUser} alt="icône addUser" />
      </form>
      <button>Save</button>
    </div>
  );
};

export default Form;
