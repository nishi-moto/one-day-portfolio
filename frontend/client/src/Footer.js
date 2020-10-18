
import React, { Component } from 'react';

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Footer extends Component {
  render() {
    return (     
    <footer className="footer">
      <div id="disclaimer">
        <FontAwesomeIcon icon={faHeart} id="iconHeart"/>
          {new Date().getFullYear()} - nishimoto
      </div>
      <div id="footer-icons">
      <a href="https://nl.linkedin.com/in/nishimoto" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://github.com/nishi-moto" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.instagram.com/nishi_moto/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.behance.net/nishi_moto" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
      <a href="https://dribbble.com/nishimoto" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} /></a>
      </div>
    </footer>
    );
  }
}

export default Footer;

