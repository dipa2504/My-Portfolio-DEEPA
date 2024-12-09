import React from 'react';
import './Experience.css';
import { assets, EXPERIENCES } from '../../assets/assets';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1 className="heading">Experience</h1>

      <div className="timeline">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className={`timeline-container ${index % 2 === 0 ? 'l-container' : 'r-container'}`}
          >
            <div className="text-box">
              <img
                src={assets.hero_profile}
                alt={`${experience.role} at ${experience.company}`}
                className="timeline-img"
              />
              <h2>{experience.role}</h2>
              <p>{experience.company}</p>
              <small>{experience.year}</small>
              <p>{experience.description}</p>
              <div className="technologies">
                <table>
                  <tbody>
                    <tr>
                      {experience.technologies.map((tech, techIndex) => (
                        <td key={techIndex} className="tech">{tech}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className={index % 2 === 0 ? 'l-arrow' : 'r-arrow'}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
