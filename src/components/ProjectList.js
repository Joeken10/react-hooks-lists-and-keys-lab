import React from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css"
function ProjectList({ projects }) {
  return (
    <div id="project-list">
      {projects.map((project) => (
        <ProjectItem 
          key={project.id} 
          name={project.name} 
          about={project.about} 
          technologies={project.technologies} 
        />
      ))}
    </div>
  );
}

export default ProjectList;

