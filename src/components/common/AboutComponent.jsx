/* eslint-disable no-unused-vars */
import React from 'react';
import './about.css'
export default function AboutComponent() {
  return (
    <div className='about-section'>
      <h2 className='about-heading'>About Me</h2>
      <p className='about-text'>
        Hey there! I&apos;m Atharva, a passionate developer and tech enthusiast. I love exploring new technologies and building awesome projects. Connect with me on social media to stay updated with my latest works and to get in touch!
      </p>
      <div className='social-links'>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='social-link'>
          Twitter
        </a>
        <a href='mailto:23@gmail.com' target='_blank' rel='noopener noreferrer' className='social-link'>
          Email
        </a>
      </div>
    </div>
  );
}
