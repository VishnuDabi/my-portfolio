import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formShow, setFormShow] = useState(false);

  const handleShow = () => {
    setFormShow(!formShow);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact__container">
      <div className="bg__img__container">
        <img
          className="img-1"
          src="https://shanereact.ibthemespro.com/img/svg/paper.svg"
          alt=""
        />
        {!formShow && (
          <div className={`text__container`}>
            <h1>Let's work together!</h1>
            <button className="btn-contact" onClick={handleShow}>
              Let's Connect
            </button>
          </div>
        )}
        {formShow && (
          <div>
            <form onSubmit={(event) => submitHandler(event)}></form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
