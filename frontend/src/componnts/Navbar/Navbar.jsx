import React from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { CONTACT } from '../../assets/assets';

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>D.S</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-icons">
          <a href={CONTACT.github} className="contact-link"><FaGithub /></a>
          <a href={CONTACT.linkedin} className="contact-link"><FaLinkedin /></a>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
