import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formShow, setFormShow] = useState(false);

  return (
    <div className="contact__container">
      <div className="bg__img__container">
        <img
          className="img-1"
          src="https://shanereact.ibthemespro.com/img/svg/paper.svg"
          alt=""
        />
        <div
          className={formShow ? "text__container active" : "text__container"}
        >
          <div className="contact__me">
            <h1>Let's work together!</h1>
            <button
              className="btn-contact"
              onClick={() => setFormShow(!formShow)}
            >
              Contact me
            </button>
          </div>
          {formShow && (
            <form className="form">
              <label>
                Name:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="email" />
              </label>
              <label>
                Message:
                <textarea></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
