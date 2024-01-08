import "./Modale.scss";
import user from "../../assets/svg/user.svg";
import close from "../../assets/svg/close.svg";
import { NavLink } from "react-router-dom";

const Modale = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {

  if (!visible) {
    return null;
  }

  return (
    <div className="modale">
      <div className="modale__content">
        <img
          className="modale__content__close"
          src={close}
          alt="icône close"
          onClick={onClose}
        />
        <div className="modale__content__block1">
          <img
            className="modale__content__block1__img"
            src={user}
            alt="icône user"
          />
          <h3>Confirmation</h3>
          <hr className="modale__content__block1__line"></hr>
        </div>
        <div className="modale__content__block2">
          <p>New collaborator</p>
          <p>Successfully registered</p>
          <hr className="modale__content__block2__line"></hr>
        </div>
        <div className="modale__content__block3">
          <button onClick={onClose}>Add new employée</button>
          <NavLink to="/employees"><button>Employées List</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modale;
