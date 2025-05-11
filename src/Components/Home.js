import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import kyron from '../images/kyron.png';

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Kyron Nyoro</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I just love building products, though I sometimes get caught up in
            engineering best practices.
            <br />
            <br />I am fluent in <b>Python</b>,{" "}
            <b>Typescript(Js by default) </b> and I know a decent amount in{" "}
            <b>Java</b>.<br />
            I try avoid having an attachment to a particular tech stack as I think it
            takes away the join of learning new technologies.
            <br />
            <br />
            This year I am all about <b>product</b> and I hope to ship at least{" "}
            <b>3</b> products this year.
            <br />
            <br />
            Also, I love <b>Cheesecake</b>
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={kyron} alt="" />
        </Tilt>
      </div>
    </div>
  );
}

export default Home