import { useNavigate } from "react-router-dom";
import MyButton from "./Button";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const ModalComponent = ({ children, canShow, setcanShow }) => {
  const navigate = useNavigate();
  return (
    <>
      {canShow &&
        createPortal(
          <div className={classes.overLay}>
            <div className={classes.modal}>
              <div className={classes.content}>{children}</div>
              <div>
                <MyButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setcanShow(false);
                    navigate("/");
                  }}
                >
                  Okay
                </MyButton>
              </div>
            </div>
          </div>,
          document.getElementById("portal")
        )}
    </>
  );
};

export default ModalComponent;
