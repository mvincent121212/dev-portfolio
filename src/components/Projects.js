import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/projects.css";
import form from "../images/form-react.png";
import todo from "../images/todo-app.png";
import weather from "../images/weather-app.png";
import profile from "../images/instasource-one.png"
import message from "../images/instasource-two.png"
import ScrollButton from "./ScrollButton";

import "../styles/custom.scss";

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
    >

    <div className="centering-container">
      <div className="container">
        <h1 className="title">MY PROJECTS</h1>
        <div className="projects-container">
          <div className="big-project">
            <div className="big-img-container">
              <a href="https://apps.apple.com/us/app/instasource/id1602560988" target="_blank" rel="noreferrer">
                <img src={profile} alt="profile page" className="big-image"/>
                <img src={message} alt="messages page" className="big-image"/>
              </a>
            </div>
            <div className="big-description">
              <p className="project-technologies">React/React Native, GraphQL, Django, AWS</p>
              <h3 className="project-title">Instasource</h3>
              <p className="project-description">A wholesale shopping platform in early development. Examples of features I have created are a messaging platform and a user's profile page.</p>
            </div>

          </div>
          <div className="small-projects">
            <div className="project">
              <a href="https://mvincent121212.github.io/multistep-form-react/" target="_blank" rel="noreferrer"><img src={form} alt="react form" className="small-image"/></a>
              <div className="small-description">
                <p className="techs">React, Javascript, Bootstrap</p>
                <h2 className="small-title">React Multistep Form</h2>
                <a href="https://github.com/mvincent121212/multistep-form-react" target="_blank" rel="noreferrer" className="source-code">source code</a>
              </div>

            </div>


            <div className="project">
              <a href="https://mvincent121212.github.io/todo-app-js/" target="_blank" rel="noreferrer"><img src={todo} alt="JS Todo list" className="small-image"/></a>
              <div className="small-description">
                <p className="techs">Javascript, Bootstrap, CSS</p>
                <h2 className="small-title">JS Rearrangeable Todo List</h2>
                <a href="https://github.com/mvincent121212/todo-app-js" target="_blank" rel="noreferrer" className="source-code">source code</a>
              </div>

            </div>


            <div className="project">
            <a href="https://mvincent121212.github.io/weather-application-react/" target="_blank" rel="noreferrer"><img src={weather} alt="React Weather App" className="small-image"/></a>
              <div className="small-description">
                <p className="techs">React, RESTful API's</p>
                <h2 className="small-title">React Weather App</h2>
                <a href="https://github.com/mvincent121212/weather-application-react" target="_blank" rel="noreferrer" className="source-code">source code</a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
      {/* <h3 className="projects-list-header">Projects</h3> */}
      {/* <div class="projects-list-container">
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
      </div> */}

      {/* <ProSidebar toggled={true}>
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Projects
          </div>
        </SidebarHeader>
        <Menu iconShape="square"></Menu>
      </ProSidebar>

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
        </div> */}
      <ScrollButton />
    </motion.div>
  );
}

export default Projects;
