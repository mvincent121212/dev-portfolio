import { motion } from "framer-motion";
import "../styles/contact.css";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

function Contact() {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [invalidEmail, setInvalidEmail] = useState(false);
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7769zcq",
        "template_3esnarq",
        e.target,
        "user_fwcFpj3EmDKO7e9ikFQcQ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

      const formSent = document.querySelector('.form-submitted');
      formSent.innerHTML = "Message sent!";

      setInputValues({name: '', email: '', message: ''});
      setInvalidEmail(() => false);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="form-container">
        <div data-aos="fade-down">
          <h1>Contact Me</h1>
        </div>
        <form class="form" onSubmit={sendEmail}>
          <div class="name-container">
            <label>name</label>
            <input
              type="text"
              name="name"
              value={inputValues.name}
              placeholder="Michael Vincent"
              onChange = {(e) => {
                setInputValues({...inputValues, name: e.target.value})
              }}
            ></input>
          </div>
          <div class="email-container">
            <label>email</label>
            <input
              type="email"
              name="email"
              value={inputValues.email}
              placeholder="michaelvincent@example.com"
              onChange = {(e) => {
                setInputValues({...inputValues, email: e.target.value});
                if (!regex.test(inputValues.email)) {
                  setInvalidEmail(() => true);
                } else if (invalidEmail === true) {
                  setInvalidEmail(() => false);
                }
              }}
            ></input>
            <span className="invalid-text">{invalidEmail ? "Please enter a valid email" : ""}</span>
          </div>
          <div class="message-container">
            <label>message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Hi, let's work together!"
              value={inputValues.message}
              onChange = {(e) => {
                setInputValues({...inputValues, message: e.target.value})
              }}
            ></textarea>
          </div>
          <div class="submit-button">
            <input type="submit" value="Send"></input>
          </div>
        </form>
        <div className='form-submitted'></div>
      </div>
    </motion.div>
  );
}

export default Contact;
