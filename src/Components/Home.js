import React from "react";
import { Zoom } from "react-awesome-reveal";
const Home = () => {
  return (
    <div className="nav" id="home">
      <nav class="navbar navbar-dark bg-transparent fixed-top">
        <div class="container">
          <a href="#home">
            <h2 className="nav-header">
              Favour <span>Isikaku</span>
            </h2>
          </a>
          <div className="nav-text ">
            <ul className="text-center">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#About me">About me</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <button
            class="navbar-toggler bg-dark nav-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="#About me">
                    About me
                  </a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="#Portfolio">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Zoom triggerOnce>
        <div className="home-text pb-100">
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
  );
};

export default Home;
