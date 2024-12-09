import React from 'react';
import './Project.css';
import { PROJECTS } from '../../assets/assets';

const Project = () => {
  return (
    <div className="project" id='project'>
      <h1>Projects</h1>

      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image} // Image source from the PROJECTS data
                alt={project.title}
                className="project-image"
              />
            </a>
            
            <h6 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h6>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
