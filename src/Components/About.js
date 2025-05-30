import React from "react";
import profile from "../profile2.jpeg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about-container" id="About me">
      <div className="about-header container">
        <div>
          <Fade triggerOnce direction="down">
            <img className="profile" src={profile} />
          </Fade>
        </div>
        <div className="about-text">
          <div>
            <Fade triggerOnce direction="up">
              <h4>About Me</h4>
              <h1>
                Favour <span>Isikaku</span>
              </h1>
              <p>
                I'm a passionate developer dedicated to building beautiful and
                high-performing and stunning websites. I enjoy turning creative
                designs into interactive digital experiences, using the best
                technologies available to ensure both functionality and customer
                satisfaction. Whether it's a sleek portfolio or a dynamic web
                app, I aim to deliver top-quality results every time.
              </p>
              <a href="#Contact">
                <button className="about-btn">Let's talk</button>
              </a>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce direction="up">
              <div>
                <h4>My Skills</h4>
              </div>
              <div className="skills-btn">
                <button>HTML</button>
                <button>CSS</button>
                <button>Bootstrap</button>
                <button>Javascript</button>
                <button>React</button>
                <button>SQL</button>
                <button>GIT</button>
                <button>Github</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
