import React from "react";
import { Zoom } from "react-awesome-reveal";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="home-background" id="home" style={{}}>
      <div>
        <Zoom triggerOnce>
          <div className="home-text pb-100 pt-100 container">
            <h5>Hi, i'm Favour Isikaku</h5>
            <h1>
              i'm a <span>Front-end Developer</span>
            </h1>
            <p>
              i am a front-end developer. i can provide clean code and pixel
              perfect design
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
