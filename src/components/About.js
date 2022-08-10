import { motion } from "framer-motion";
import ScrollButton from "./ScrollButton";
import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import fourOne from '../images/four-one.png';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="about">
        <section className="screen-one">
          <p>
            Hi, my name is Michael Vincent! I live in Brooklyn, NY and work as a
            professional software engineer.
          </p>
          <a href="#screen-two">
            <div>Continue</div>
          </a>
        </section>
        <section id="screen-two" className="screen-two">
          <p>
            My journey with coding began in high school, where I participated in
            academic computer science competitions and hackathons in Java. In
            college, I studied chemical engineering and continued to dabble with
            Matlab and Python.
          </p>
          <a href="#screen-three">
            <div>Continue</div>
          </a>
        </section>
        <section id="screen-three" className="screen-three">
          <p>
            I first learned HTML, CSS, and Javascript a couple years ago and
            fell in love with it. I love the creativity that is involved with
            front end development, and I love manipulating the DOM while utilizing the
            depth of Javascript as a language.
          </p>
          <a href="#screen-four">
            <div>Continue</div>
          </a>
        </section>
        <section id="screen-four" className="screen-four">
          <img src={fourOne} alt="icon" />
          <p>
            Now I have found my passion in web development and design. I specialize
            in React development and have designed applications on the web and
            also in mobile apps via React Native. I additionally have expertise in
            GraphQL and the Apollo client. I have worked closely with designers and
            replicated Figma designs as well as coordinated with backend devs using
            Django, so I am a strong and flexible member to have on a team. Feel free to contact
            me with any opportunities!{" "}
          </p>
          <span className="icons">
            <a href="https://github.com/mvincent121212" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/mvincent12/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </span>
        </section>
      </div>
      <ScrollButton />
    </motion.div>
  );
}

export default About;
