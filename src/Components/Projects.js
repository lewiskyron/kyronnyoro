import React from 'react';
import ProjectBox from './ProjectBox';
import TindogImage from '../images/TindogImage.png';
import illiquid from '../images/illiquid.png';
import Minerva from '../images/Minerva.png'
import Arktikos from '../images/Arktikos.png'
import chicken from '../images/chicken.jpeg'
import Lockpass from '../images/Lockpass.jpeg'



const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects & Experiences</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Minerva} projectName="Genetic_Algorithm" />
        <ProjectBox projectPhoto={Minerva} projectName="Task_Scheduler" />
        <ProjectBox projectPhoto={illiquid} projectName="Illiquid_Labs" />
        <ProjectBox projectPhoto={Arktikos} projectName="Arktikos_City_Experience" />
        <ProjectBox projectPhoto={chicken} projectName="ChickenChoice_Website" />
        <ProjectBox projectPhoto={Lockpass} projectName="Lock_Pass" />
        

      </div>

    </div>
  )
}

export default Projects