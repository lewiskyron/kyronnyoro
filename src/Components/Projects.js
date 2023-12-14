import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  const projects = [
    {
      name: "Genetic_Algorithm",
      details:
        "This is a paper describing how we can use genetic algorithms to optimize the parameters of a neural network. The paper was made as a part of the course project for the course CS 110: DSA course.",
      github: "",
      website:
        "https://drive.google.com/file/d/1x88ofDblieDwD9i-cd0Ledp5yga4bCW-/view?usp=sharing",
    },
    {
      name: "Task_Scheduler",
      details:
        "This paper uses priority queues and heaps to implement a Task Scheduler based of a Location Based Assignment. The paper was made as a part of the course project for the course CS 110: Data Structures and Algorithms.",
      github: "",
      website:
        "https://drive.google.com/file/d/1vTItMhrkx_gIAtOQzMzjShkYxbt0xh0R/view?usp=sharing",
    },
    {
      name: "Illiquid_Labs",
      details:
        "Interned as a Software Developer at Illiquid Labs. Worked on a project to create a GPT integrated chatbot for internal communication.",
      github: "https://github.com/lewiskyron/personal_agent",
      website: "https://www.artstation.com/?sort_by=community&dimension=all",
    },
    {
      name: "Arktikos_City_Experience",
      details:
        "Attended a workshop where I got to interact with North Korea Defectors to understand their experiences and the challenges they faced. I also got to interact with the North Korean Defector community in South Korea and learn about their culture and experiences.",
      github: "",
      website:
        "https://photos.google.com/share/AF1QipPmChwNjFHNlhe6AfgXN4z0YoVHotXaYnOqznq_o_Bf_-H3k2mwDZuYkN1XaHQSAA?key=a29mRUNYa2JrMlhCX0pER1M2enE5UF80WmplbVBR",
    },
    {
      name: "ChickenChoice_Website",
      details:
        "Developed a dynamic and fully responsive website tailored to the needs of a small and medium-sized enterprise (SME) specializing in meat sales.",
      github: "https://github.com/lewiskyron/ngukuh",
      website: "https://lewiskyron.github.io/ngukuh/",
    },
    {
      name: "CourseSwaps",
      details:
        "Developed a web application that allows students to swap courses with other students. The application was developed using the MERN stack.",
      github: "",
      website: "https://github.com/lewiskyron/my_CourseSwaps",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects & Experiences</b>
      </h1>
      <VerticalTimeline>
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                activeIndex === index ? "#0598ce" : "rgb(33, 150, 243)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              />
            }
          >
            <h3
              className="vertical-timeline-element-title"
              onClick={() => toggleAccordion(index)}
              style={{ cursor: "pointer" }}
            >
              {project.name}
            </h3>
            {activeIndex === index && (
              <div>
                <p className="vertical-timeline-element-description">
                  {project.details}
                </p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="projectbtn">GitHub</button>
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="projectbtn">Website/Demo</button>
                  </a>
                )}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;