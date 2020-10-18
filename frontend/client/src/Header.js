/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <header className="Header">
       <img src="./nishimoto_logo.png" className="logo"/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Header;