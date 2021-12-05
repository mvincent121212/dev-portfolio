import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/projects.css";
import twitterClone from "../images/twitter-clone.png";
import form from "../images/form-react.png";
import todo from "../images/todo-app.png";
import weather from "../images/weather-app.png";
import ScrollButton from "./ScrollButton";

function Projects() {
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
      className="projects-container"
    >
      <h3 className="projects-list-header">Projects</h3>
      <ul className="projects-list">
        <li>
          <a href="#twitter">React Twitter Clone</a>
        </li>

        <li>
          <a href="#form">React Multistep Form</a>
        </li>

        <li>
          <a href="#todo">JavaScript Rearrangeable Todo List</a>
        </li>

        <li>
          <a href="#weather">React Weather App </a>
        </li>
      </ul>
      <div className="projects" id="projects">
        <h1 className="top-header" id="twitter">
          React Twitter Clone
        </h1>
        <section className="project">
          <div className="image-container">
            <a
              href="https://twitter-clone-gules-eta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div data-aos="fade-right">
                <img src={twitterClone} alt="twitter clone" />
              </div>
            </a>
          </div>

          <div class="button-container" data-aos="fade-down">
            <a
              href="https://twitter-clone-gules-eta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
            <a
              href="https://github.com/mvincent121212/twitter-clone"
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>
          <div class="project-text">
            <p className="column">
              A functional twitter clone which includes:
              <ul>
                <li>Google authentication</li>
                <li>Adding posts with images and emojis</li>
                <li>Liking and commenting on posts</li>
                <li>Data storage with Firebase</li>
              </ul>
              In this project, I learned a lot about working with technologies
              on top of React as well as a structure for building apps with
              multiple pages and functionalities. I want to add a profile page
              and a messenger in the future as well as work on consistencies
              between browsers.
            </p>
            <div class="technologies-container">
              <ul>
                <h3>Technologies:</h3>
                <li>Javascript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>NextAuth.js</li>
                <li>Tailwind</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </section>
        <h1 id="form">React Multistep Form</h1>
        <section className="project">
          <div className="image-container">
            <a
              href="https://mvincent121212.github.io/multistep-form-react/"
              target="_blank"
              rel="noreferrer"
            >
              <div data-aos="fade-left">
                <img src={form} alt="react form" />
              </div>
            </a>
          </div>
          <div class="button-container" data-aos="fade-top">
            <a
              href="https://mvincent121212.github.io/multistep-form-react/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
            <a
              href="https://github.com/mvincent121212/multistep-form-react"
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>
          <div class="project-text">
            <p className="column">
              Simple multistep form with a clean design. This project was great
              practice for implementing React hooks like useState and useEffect.
            </p>
            <div class="technologies-container">
              <ul>
                <h3>Technologies:</h3>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </section>
        <h1 id="todo">JavaScript Rearrangeable Todo List</h1>
        <section className="project">
          <div class="image-container">
            <a
              href="https://mvincent121212.github.io/todo-app-js/"
              target="_blank"
              rel="noreferrer"
            >
              <div data-aos="fade-right">
                <img src={todo} alt="to do list" />
              </div>
            </a>
            <div class="button-container" data-aos="fade-down">
              <a
                href="https://mvincent121212.github.io/todo-app-js/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Live Demo</button>
              </a>

              <a
                href="https://github.com/mvincent121212/todo-app-js"
                target="_blank"
                rel="noreferrer"
              >
                <button>Source Code</button>
              </a>
            </div>
          </div>
          <div class="project-text">
            <p className="column">
              Classic Javascript project with the added functionality of being
              able to rearrange the listed tasks using DOM manipulation. Learned
              about many different ways to manipulate the DOM with vanilla
              Javascript.
            </p>
            <div class="technologies-container">
              <ul>
                <h3>Technologies:</h3>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </section>
        <h1 id="weather">React Weather App</h1>
        <section className="project">
          <div class="image-container">
            <a
              href="https://mvincent121212.github.io/weather-application-react/"
              target="_blank"
              rel="noreferrer"
            >
              <div data-aos="fade-left">
                <img src={weather} alt="weather app" />
              </div>
            </a>
            <div class="button-container" data-aos="fade-top">
              <a
                href="https://mvincent121212.github.io/weather-application-react/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Live Demo</button>
              </a>
              <a
                href="https://github.com/mvincent121212/weather-application-react"
                target="_blank"
                rel="noreferrer"
              >
                <button>Source Code</button>
              </a>
            </div>
          </div>
          <div class="project-text">
            <p className="column">
              Weather application that fetches data using the OpenWeatherMap
              API. Learned how to fetch data in a React application and utilize
              props effectively.
            </p>
            <div class="technologies-container">
              <ul>
                <h3>Technologies:</h3>
                <li>Javascript</li>
                <li>React</li>
                <li>RESTful API's</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <ScrollButton />
    </motion.div>
  );
}

export default Projects;
