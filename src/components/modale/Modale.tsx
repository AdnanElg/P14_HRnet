import "./Modale.scss";
import user from "../../assets/svg/user.svg";
import close from "../../assets/svg/close.svg";

const Modale = ({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modale;
