import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Genetic_AlgorithmDesc : "This is a paper describing how we can use genetic algorithms to optimize the parameters of a neural network. The paper was made as a part of the course project for the course CS 110: DSA course.",
    Genetic_AlgorithmGithub:"",
    Genetic_AlgorithmWebsite : "https://drive.google.com/file/d/1x88ofDblieDwD9i-cd0Ledp5yga4bCW-/view?usp=sharing",

    Task_SchedulerDesc : "This paper uses priority queues and heaps to implement a Task Scheduler based of a Location Based Assignment. The paper was made as a part of the course project for the course CS 110: Data Structures and Algorithms.",
    Task_SchedulerGithub:"",
    Task_SchedulerWebsite : "https://drive.google.com/file/d/1vTItMhrkx_gIAtOQzMzjShkYxbt0xh0R/view?usp=sharing",


    Illiquid_LabsDesc:"Interned as a Software Developer at Illiquid Labs. Worked on a project to create a GPT integrated chatbot for internal communication.",
    Illiquid_LabsGithub:"https://github.com/lewiskyron/personal_agent",
    Illiquid_LabsWebsite:"https://www.artstation.com/?sort_by=community&dimension=all",

    Arktikos_City_ExperienceDesc:"Attended a workshop where I got to interact with North Korea Defectors to understand their experiences and the challenges they faced. I also got to interact with the North Korean Defector community in South Korea and learn about their culture and experiences. ",
    Arktikos_City_ExperienceGithub:"",
    Arktikos_City_ExperienceWebsite:"https://photos.google.com/share/AF1QipPmChwNjFHNlhe6AfgXN4z0YoVHotXaYnOqznq_o_Bf_-H3k2mwDZuYkN1XaHQSAA?key=a29mRUNYa2JrMlhCX0pER1M2enE5UF80WmplbVBR",

    
    ChickenChoice_WebsiteDesc:"Developed a dynamic and fully responsive website tailored to the needs of a small and medium-sized enterprise (SME) specializing in meat sales. ",
    ChickenChoice_WebsiteGithub:"https://github.com/lewiskyron/ngukuh",
    ChickenChoice_WebsiteWebsite:"https://lewiskyron.github.io/ngukuh/",


    Lock_PassDesc:"This is a cross-platform password manager that helps you store your passwords and retrieve them so you don't have to remember them. Forget getting Locked out of your accounts!",
    Lock_PassGithub:"https://github.com/lewiskyron/Password-Manager",
    Lock_PassWebsite:""

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox