import React from "react";
import './Modal.css'




function Modal({ setOpenModal,  }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Leave this Page?</h1>
        </div>
        <div className="body">
          <p>Your Nickname is Selected </p>
           
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;