import { motion } from "framer-motion";
import "../styles/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hero-page"
    >
      <div className="hero-container" id="hero">
        <h1 className="hero-header">Michael Vincent</h1>
        <ul className="hero-list">
          <li className="element-one">Software</li>
          {/* <li className="element-two">End</li> */}
          <li className="element-three">Engineer</li>
        </ul>
      </div>
      <div className="footer">
          <div class="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span style={{}}>Brooklyn, NY</span>
          </div>
          <span className="media-icons">
            <a href="https://github.com/mvincent121212" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/mvincent12/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </span>
        </div>
        {/* <ScrollButton/> */}
    </motion.div>
  );
}

export default Hero;
