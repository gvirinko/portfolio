import React from "react";

import gitHubLogo from "../../images/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../../images/LI-In-Bug.png";
import instagramLogo from "../../images/glyph-logo_May2016.png";
import emailLogo from "../../images/email-logo-png-1121.png";
import irynaGnativ from "../../images/IMG_6501.jpeg";

import {
  HeaderComponent,
  HeaderTextWrapper,
  HeaderName,
  HeaderStatus,
  HeaderSocial,
  Icon,
  HeaderPhotoWrapper,
  HeaderPhoto,
} from "./elements";

export const Header = ({ content }) => {
  const { name, status } = content;

  return (
    <HeaderComponent>
      <HeaderTextWrapper>
        <HeaderName>{name}</HeaderName>
        <HeaderStatus>{status}</HeaderStatus>
        <br />
        <HeaderSocial>
          <a
            href="https://github.com/gvirinko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={gitHubLogo} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/irynagnativ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={linkedinLogo} alt="Linkedin icon" />
          </a>
          <a
            href="https://www.instagram.com/gvirinko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={instagramLogo} alt="Instagram icon" />
          </a>
          <a href="mailto:iryna.gnativ@icloud.com" rel="noopener noreferrer">
            <Icon src={emailLogo} alt="Email icon" />
          </a>
        </HeaderSocial>
      </HeaderTextWrapper>
      <HeaderPhotoWrapper>
        <HeaderPhoto alt="Iryna Gnativ" src={irynaGnativ} />
      </HeaderPhotoWrapper>
    </HeaderComponent>
  );
};
