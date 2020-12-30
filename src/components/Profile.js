import React, { Component } from 'react';
import ImgProfile from '../images/Profile1.jpg';
import { HashLink as Link } from 'react-router-hash-link';
export default class Profile extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img className="activator" src={ImgProfile} alt="avatar" />
            <Link to="/CV/" className="btn-floating halfway-fab waves-effect waves-light dark">
              <i className="activator material-icons right">more_vert</i>
            </Link>
          </div>
          <div style={{ textAlign: 'center' }} className="card-content">
            <span className="card-title dark-text">Dao Minh Chau</span>
            <p >Android</p>
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Flow me<i className="material-icons right">close</i></span>
            <p className="flex-container">
              <a href="https://www.facebook.com/profile.php?id=100003951969065" target="blank" > <i className="fab fa-facebook-f blue-text text-darken-4 social-style"></i></a>
              <a href="https://www.instagram.com/itminhchau/?hl=vi" target="blank" ><i className="fab fa-instagram orange-text text-darken-4 social-style"></i></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

