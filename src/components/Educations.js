import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
export default class Educations extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l3">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <div className="card">
                <div className="card-content">
                  <h6 className="mt-button">
                    <strong>EDUCATIONS</strong>
                  </h6>
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Certificate</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Danang University - University of Education</td>
                        <td>2017 - Present</td>
                        <td>
                          <a href="https://ued.udn.vn/" target="blank" className="btn dark lighten-2 ">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
