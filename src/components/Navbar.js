import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="grey darken-2" >
          <div className="container">
            <div className="nav-wrapper">
              <Link to='/CV/' className='brand-logo'>CV</Link>
              <Link to='/CV/' data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className='sidenav' id='side-nav'>
                <li>
                  <Link to='/CV/'>
                    <i className="fas fa-home"></i>Home
                  </Link>
                </li>
                <li>
                  <Link to="/CV/skills">
                    <i className="fas fa-copy"></i>Skills
                  </Link>
                </li>
                <li>
                  <Link to="/CV/experiences">
                    <i className="fas fa-id-badge"></i>Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/CV/educations">
                    <i className="fas fa-graduation-cap"></i>Educations
                  </Link>
                </li>
                <li>
                  <Link to="/CV/contacts">
                    <i className="fas fa-address-card"></i>Contact
                  </Link>
                </li>
                <li>
                  <a href='https://drive.google.com/file/d/1R9Mu8EIYKudYblkWlhKsBS64pg4lk7m0/view?usp=sharing' target="blank">
                    <i className="fas fa-download"></i> Download CV
                    </a>
                </li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to='/CV/'>
                    <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li>
                  <Link to='/CV/skills'>
                    <i className="fas fa-copy"></i> Skills
                    </Link>
                </li>
                <li>
                  <Link to='/CV/experiences'>
                    <i className="fas fa-id-badge"></i> Experiences
                    </Link>
                </li>
                <li>
                  <Link to='/CV/educations'>
                    <i className="fas fa-graduation-cap"></i> Educations
                    </Link>
                </li>
                <li>
                  <Link to='/CV/contacts'>
                    <i className="fas fa-address-card"></i> Contact
                    </Link>
                </li>
                <li>
                  <a href='https://drive.google.com/file/d/1R9Mu8EIYKudYblkWlhKsBS64pg4lk7m0/view?usp=sharing' target="blank">
                    <i className="fas fa-download"></i> Download CV
                    </a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </>
    );
  }
}
