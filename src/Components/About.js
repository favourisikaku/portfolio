import React from 'react'
import profile from '../profile2.jpeg'
import Fade from 'react-reveal'


const About = () => {
  return (
    <div className='about-container' id='About me'>
      <div className='about-header container'>
        <div>
        <Fade top >
          <img className='profile' src={profile}/>
        </Fade>
        </div>
        <div className='about-text'>
          <div>
            <Fade bottom >
            <h4>About Me</h4>
            <h1>Favour <span>Isikaku</span></h1>
            <p>As a developer, i strive  to deiver to create beautiful,performant websites from stunning designs,i enjoy creating extremely visual and interactive experiences using any technology that will deliver the best results for customer satisfaction</p>
            <a href='#Contact'><button className='about-btn'>Let's talk</button></a> 
            </Fade>
          </div>
          <div>
            <Fade bottom>
              <div>
                <h4>
                  My Skills
                </h4>
              </div>
              <div className='skills-btn'>
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
  )
}

export default About