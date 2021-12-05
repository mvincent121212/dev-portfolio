import { motion } from "framer-motion";
import "../styles/contact.css";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Contact() {
  function sendEmail(e) {
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
              placeholder="Michael Vincent"
            ></input>
          </div>
          <div class="email-container">
            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="michaelvincent@example.com"
            ></input>
          </div>
          <div class="message-container">
            <label>message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Hi, let's work together!"
            ></textarea>
          </div>
          <div class="submit-button">
            <input type="submit" value="Send"></input>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
