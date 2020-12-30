import React, { Component } from "react";
import Navbar from './Navbar';
import Profile from './Profile';
export default class Contact extends Component {

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
                    <strong>CONTACT</strong>
                  </h6>
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Mail ID</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>minhchaudm@gmail.com</td>
                        <td>
                          <a
                            target="blank"
                            href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKCJDtpDcPnpczfvVmVppCXvjsMKvbzZqqvmFLPJMsXwdJPQcNcMXVqgMRGhcvrCGMqtjWL"
                            className="btn dark lighten-2 "
                          >
                            Click to send mail
                          </a>
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
