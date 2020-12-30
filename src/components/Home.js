import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import About from './About';
import Navbar from './Navbar';
import Profile from './Profile';
import HomePage from './homePage';
// import Experience from './Experiences';
// import Education from './Educations';
// import Contacts from './Contact';
export default class Home extends Component {
  
  render() {
    return (
      <section> 
          <Navbar />
          <div className="container">
              <div className="row" >
                  <div className="col s12 m4 l3"> 
                    <Profile />
                  </div>
                  <div className="col s12 m8 l9">
                    <About />
                    {/* <Skills /> */}
                    {/* <Experience /> */}
                    {/* <Education /> */}
                    {/* <Contacts /> */}
                  </div>
              </div>
              <div className="row">
                <HomePage />
              </div>
          </div>
     </section>
    );
  }
}
