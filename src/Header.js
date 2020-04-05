import React from 'react';
import gitHubLogo from './images/GitHub-Mark-120px-plus.png';
import linkedinLogo from './images/LI-In-Bug.png';
import instagramLogo from './images/glyph-logo_May2016.png'
import emailLogo from './images/email-logo-png-1121.png';
import irynaGnativ from './images/IMG_6501.jpeg';


function Header() {
    return (
      <div className="header">
        <div className="header__text">
          <h1 className="header__name">Iryna Gnativ</h1>
          <h2 className="header__status">Learning to Code</h2>
          <br/>
          <div className="header__social">
              <a href="https://github.com/gvirinko" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={gitHubLogo}  alt="Github icon"/>
              </a>
              <a href="https://www.linkedin.com/in/irynagnativ/" target="_blank"  rel="noopener noreferrer">
                <img className="icon" src={linkedinLogo}  alt="Linkedin icon"/>
              </a>
              <a href="https://www.instagram.com/gvirinko/" target="_blank"  rel="noopener noreferrer">
                <img className="icon" src={instagramLogo}  alt="Instagram icon"/>
              </a>
              <a href="mailto:iryna.gnativ@icloud.com" rel="noopener noreferrer">
                <img className="icon" src={emailLogo}  alt="Email icon"/>
              </a>
          </div>
        </div>
        <div className="header__photo-wrapper">
          <img className="header__photo" alt="Iryna Gnativ" src={irynaGnativ} />
        </div>
      </div>
    );
  }

  export default Header;