import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import african_coder from '../LottieFiles/african_coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>

            Hi, my name is <b>Kyron Nyoro</b> and I am from Nairobi,Kenya.<br/><br/>
            <b>Mission Statement:</b> To live one day at a time and everyday as if it were the last. <br/><br/>
            I'm a <b>MERN stack web developer</b> and a Junior pursuing <b>Computer Science </b>@ Minerva University. <br/><br/>
            I recently completed an internship as a <b>Software Developer</b> at Illiquid Labs which is a Gaming startup.
            Additionally, I begun working with Generative Pre-trained Transformers (GPTs) and have been exploring their applications in optimizing various workflows.<br/><br/>

            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding, I've got a musical groove that's been rocking for over a decade composing, performing, and strumming my way through life with my trusty <b>guitar!</b> 🎸🎶
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
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Python' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='PostgreSQL'/>
        <Skills skill='Java'/>
        <Skills skill='HTML'/>
        <Skills skill='CSS'/>
        
      </div>
    </>
  )
}

export default About