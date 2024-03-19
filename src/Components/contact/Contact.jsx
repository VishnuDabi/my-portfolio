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
          <div className={`text__container active`}>
            <div className="flex__container">
              <div className="flex__child">
                <h2 className="text__black">Get in touch</h2>
                <div
                  className="close-container"
                  id="close_btn"
                  onClick={handleShow}
                >
                  <div className="leftright"></div>
                  <div className="rightleft"></div>
                  <label className="close label-close" htmlFor="close_btn">
                    close
                  </label>
                </div>
                <form
                  className="contact__form"
                  onSubmit={(event) => submitHandler(event)}
                >
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email ID"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="Subject" id="subject" />
                  </div>
                  <div>
                    <label htmlFor="massage">Massage</label>
                    <textarea
                      type="text"
                      id="massage"
                      placeholder="Enter Massage"
                    />
                  </div>
                  <button className="btn__dark">Submit</button>
                </form>
              </div>
              <div className="flex__child">
                <img className="img" src="./about.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
