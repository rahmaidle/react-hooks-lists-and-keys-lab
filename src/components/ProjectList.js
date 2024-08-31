import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectElement= projects.map((project)=>{
    return (<ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id} />)})
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElement}</div>
    </div>
  );
}

export default ProjectList;
