import React from "react";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";

// ────────────────────────────────────────────────────────────────────────────────
// 1️⃣  Project data — feel free to edit or fetch dynamically
// ────────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    name: "Yank",
    details:
      "AI‑powered flashcard creation that lets learners generate cards as they read.",
    github: "",
    website: "https://www.yank.studio/", // product site (Demo button will point here)
    image:
      "https://wbxueysawskymjeqmssw.supabase.co/storage/v1/object/public/Landing%20Page%20Videos//hero-section.png",
    demo: "https://www.youtube.com/watch?v=tomw4mCv0so",
  },
  {
    name: "CourseSwap",
    details:
      "Real‑time priority‑queue engine that automatically swaps courses for eligible students at Minerva University and suggests alternatives when no direct swap exists. I built the sync engine that keeps seat counts accurate and mirrors school‑API updates.",
    github: "https://github.com/minerva-university/CourseSwaps",
    website: "https://www.youtube.com/watch?v=RNSnFxqx_X8", // demo video
    image:
      "https://wbxueysawskymjeqmssw.supabase.co/storage/v1/object/public/Landing%20Page%20Videos//courseSwaps.png",
    demo: "https://www.youtube.com/watch?v=RNSnFxqx_X8",
  },
  {
    name: "Peritus",
    details:
      "(In‑progress) AI agents for GitHub repositories using RAG + MCP to speed up PR reviews, issue triage, and discussions—beta launch planned for this summer.", // private for now
    image:
      "https://wbxueysawskymjeqmssw.supabase.co/storage/v1/object/public/Landing%20Page%20Videos//peritus.png",
    website: "https://peritus.vercel.app/",
  },
  {
    name: "Raft_Consensus",
    details:
      "From‑scratch Raft consensus algorithm running in a Docker‑simulated distributed environment (master–slave), following Ongaro & Ousterhout’s spec.",
    github: "https://github.com/lewiskyron/raft-consensus-python",
    website: "",
    image:
      "https://wbxueysawskymjeqmssw.supabase.co/storage/v1/object/public/Landing%20Page%20Videos//0528-Raft-Consensus-Preview-1.webp",
  },
  {
    name: "MapReduce_Inverted_Index",
    details:
      "Multi‑machine MapReduce framework that builds an inverted index from Wikipedia articles. Docker‑based nodes, fault‑tolerant, extensible OOP design.",
    github: "https://github.com/lewiskyron/mapreduce-inverted-index",
    demo: "https://www.loom.com/share/892d034e8b1448c8bc39832efbd1a5c1?sid=e7236f9c-1205-4f46-a65c-db2b701e3e9b", // Loom demo
    image:
      "https://wbxueysawskymjeqmssw.supabase.co/storage/v1/object/public/Landing%20Page%20Videos//mapreduce-training-2255438065.png",
  },
  {
    name: "Checkers_AI",
    details:
      "Python‑based Checkers engine that employs Minimax search with Alpha–Beta pruning and an end‑game tablebase for precise play.",
    github: "https://github.com/lewiskyron/checkers-master",
    demo: "https://www.loom.com/share/8b4b4779ce0e4b4eb19126b645fd22f7",
    image:
      "https://wbxueysawskymjeqmssw.supabase.co/storage/v1/object/public/Landing%20Page%20Videos//Screenshot%202025-05-07%20at%208.05.59%20PM.png",
  },
];

// ────────────────────────────────────────────────────────────────────────────────
// 2️⃣  Re‑usable Project Card component (pure CSS — no Tailwind)
// ────────────────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project }) => {
  const formatName = (raw) => raw.replace(/_/g, " ");
  const { github, website, image, demo } = project;

  return (
    <div className="project-card">
      <div className="card-body">
        {image && (
          <img
            src={image}
            alt={`${formatName(project.name)} preview`}
            className="project-image"
            loading="lazy"
          />
        )}

        <h3 className="project-title">{formatName(project.name)}</h3>
        <p className="project-details">{project.details}</p>

        <div className="button-group">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="projectbtn"
            >
              <FaGithub style={{ marginRight: "6px" }} /> Github
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="projectbtn"
            >
              <FaGlobe style={{ marginRight: "6px" }} /> Website
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="projectbtn"
            >
              <FaYoutube style={{ marginRight: "6px" }} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────────
// 3️⃣  Section wrapper
// ────────────────────────────────────────────────────────────────────────────────
const Projects = () => (
  <section id="projects" className="projects-section">
    <h1 className="project-heading">
      My <b>Projects & Experiences</b>
    </h1>

    <div className="projects-grid">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
