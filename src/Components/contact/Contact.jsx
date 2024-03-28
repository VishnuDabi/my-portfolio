import React, { useEffect, useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Contact = () => {
  const [formShow, setFormShow] = useState(false);
  const [state, handleSubmit] = useForm("mpzvyqyw");
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    state.succeeded = false;
    setOpen(false);
  };

  useEffect(() => {
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>;
  }, [state.succeeded]);
  const handleShow = () => {
    setFormShow(!formShow);
  };

  return (
    <>
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
                    onSubmit={handleSubmit}
                    method="post"
                    action="https://formspree.io/f/mpzvyqyw"
                  >
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
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
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        id="subject"
                      />
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
                    <button className="btn__dark" type="submit">
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

      {state.succeeded && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Successfully Submitted.
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Contact;
