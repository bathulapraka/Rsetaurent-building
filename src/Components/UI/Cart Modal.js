import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../UI/Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.Onclose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
  
const portals = document.getElementById("Display");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop Onclose={props.Onclose} />, portals)}
   
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
