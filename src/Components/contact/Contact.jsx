import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [formShow, setFormShow] = useState(false);
  const [state, handleSubmit] = useForm("mpzvyqyw");
  const handleShow = () => {
    setFormShow(!formShow);
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   handleSubmit();
  // };

  return (
    <div className="contact__container" name="contact">
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
          <div className={`text__container active__contact__form`}>
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
                  // onSubmit={(event) => submitHandler(event)}
                  onSubmit={handleSubmit}
                  method="post"
                  action="https://script.google.com/macros/s/AKfycbxiLcbs5YCfMNnnOSyd2GP4keX568tf495ZNtuFLFHrjhXXLKOPKdUVecgIiKQf_88/exec"
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
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email ID"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="Subject" id="subject" />
                  </div>
                  <div>
                    <label htmlFor="massage">Massage</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Enter Massage"
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button
                    className="btn__dark"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Submit
                  </button>
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
