import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./contactmodal.css";

function ContactModal({ setShowModal }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return ReactDom.createPortal(
    <div className="container-modal" ref={modalRef} onClick={closeModal}>
      <div className="contact-modal">
        <h2>Contact Us</h2>
        <form action="" className="form-modal">
          <input type="text" placeholder="Name" className="contact-inputs" name="fullname" />
          <input type="email" placeholder="Your Email" className="contact-inputs" name="email" />
          <textarea
            type="text"
            placeholder="Your Question"
            className="contact-inputs-q"
            name="question"
          />
          <button id="formBtn" onClick={(e) => submitHandler(e)}>
            Send
          </button>
        </form>

        <button onClick={() => setShowModal(false)} className="contact-closeBtn">
          <img src="x.svg" alt="close button icon" />
        </button>
      </div>
    </div>,
    document.getElementById("contactPortal")
  );
}

export default ContactModal;
