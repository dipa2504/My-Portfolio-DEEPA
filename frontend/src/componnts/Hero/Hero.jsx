import React from 'react';
import './Hero.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HERO_CONTENT, assets } from '../../assets/assets';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web Designer', 'Web Developer', 'MERN Stack'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <div className='hero' id='/'>
      <div className="hero-left">
        <h1>Deepa Sharma</h1>
        <div className="hero-writer">
          <h3>I'm a{' '}
            <span> {text}</span>
            <Cursor cursorStyle='|' />
          </h3>
        </div>
        <div className="hero-para">
          <p>{HERO_CONTENT}</p>
        </div>
      </div>

      <div className="hero-img">
        <div className="inner-circle">
          <img src={assets.hero_profile} alt="Profile" />
        </div>
      </div>

    </div >
  );
}

export default Hero; 
