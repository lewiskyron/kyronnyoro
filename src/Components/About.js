import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import african_coder from '../LottieFiles/african_coder.json';

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            I am from <b>Nairobi,Kenya</b>.
            <br />
            <br />I recently shipped{" "}
            <b>
                Yank
            </b> and it has been an existing jounrey to getting to <b>100</b> active users.
            Check it out <b><a href="https://www.yank.studio/" target="_blank" rel="noopener noreferrer">here</a></b> 
            <br />

            <br />
            Additionally, I am currently writing my own HTTP client with <b>Java</b> and boy has it made me learn more about what goes on under the hood.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={african_coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Python" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="PostgreSQL" />
        <Skills skill="Java" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
      </div>
    </>
  );
}

export default About