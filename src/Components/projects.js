import React from "react";
import netflix from "../assets/netflix.jpg";
import tesla from "../assets/tesla.mp4";
import movies from "../assets/movies.png";
import trippy from "../assets/trippy.png";
import amazon from "../assets/amazon.png";
import gym from "../assets/gym.png";
import { Fade } from "react-reveal";

const projects = () => {
  return (
    <div className="project-container" id="Portfolio">
      <div className="project-header container">
        <div>
          <h4>Visit my Portfolio</h4>
          <h2>
            My <span>Amazing work</span>
          </h2>
        </div>
        <div>
          <div className="card-header">
            <div>
              <Fade left>
                <img className="image" src={gym} />
              </Fade>
            </div>
            <div className="card-details">
              <Fade right>
                <h1>Gym</h1>
                <p>
                  A Gym website to check workouts that will suit your fitness
                  and find out what services we offer offer.
                </p>
                <a href="https://favourisikaku-gym.vercel.app" target="_blank">
                  <Fade right>
                    <h4>Explore Project &rarr;</h4>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
          <div className="card-header">
            <div>
              <Fade left>
                <img className="image" src={netflix} />
              </Fade>
            </div>
            <div className="card-details">
              <Fade right>
                <h1>Netflix Clone</h1>
                <p>
                  A spot on copy of the streaming servce Netflix library page
                  and watch a movie trailer
                </p>
                <a
                  href="https://favourisikaku-netflix-clone.vercel.app"
                  target="_blank"
                >
                  <Fade right>
                    <h4>Explore Project &rarr;</h4>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
          <div className="card-header">
            <div>
              <Fade left>
                <video
                  className="tesla-video"
                  autoPlay
                  muted
                  loop
                  src={tesla}
                ></video>
              </Fade>
            </div>
            <div className="card-details">
              <Fade right>
                <h1>Tesla Clone</h1>
                <p>
                  A tesla clone website to see different types vehicles and
                  their informations ranging from speed to miles
                </p>
                <a
                  href="https://favourisikaku-tesla-clone.vercel.app"
                  target="_blank"
                >
                  <Fade right>
                    <h4>Explore Project &rarr; </h4>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
          <div className="card-header">
            <div>
              <Fade left>
                <img className="image" src={movies} />
              </Fade>
            </div>
            <div className="card-details">
              <Fade right>
                <h1>Movie App</h1>
                <p>
                  A movies website to explore and search for your favourite
                  movies and get details about the movie{" "}
                </p>
                <a
                  href="https://favourisikaku-movies-app.vercel.app"
                  target="_blank"
                >
                  <Fade right>
                    <h4>Explore Project &rarr;</h4>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
          <div className="card-header">
            <div>
              <Fade left>
                <img className="image" src={trippy} />
              </Fade>
            </div>
            <div className="card-details">
              <Fade right>
                <h1>Travel and Tour</h1>
                <p>
                  A website about beautiful places you can in Indonesia,Malaysia
                  and France and get a nice experience
                </p>
                <a
                  href="https://favourisikaku-travel-tour.vercel.app"
                  target="_blank"
                >
                  <Fade right>
                    <h4>Explore Project &rarr;</h4>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
          <div className="card-header">
            <div>
              <Fade left>
                <img className="image" src={amazon} />
              </Fade>
            </div>
            <div className="card-details">
              <Fade right>
                <h1>Amazon clone</h1>
                <p>
                  An amazon clone shopping website to see your favourite items
                  you can choose from and order
                </p>
                <a
                  href="https://amazon-clone-seven-sand.vercel.app"
                  target="_blank"
                >
                  <Fade right>
                    <h4>Explore Project &rarr;</h4>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
