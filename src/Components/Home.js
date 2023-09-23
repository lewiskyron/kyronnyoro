import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import kyron from '../images/kyron.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Kyron Nyoro</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I'm all about turning wild ideas into game-changing websites and products that shake things up! 
            My mission, to passionately develop technologies that provide significant value to users.<br /><br />
            I am fluent in <b>Python</b>, <b>Javascript </b> and I know a decent amount in <b>Java</b>.<br />
            I develop most of  my projects in the <b>MERN</b> stack.<br />
            I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={kyron} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home