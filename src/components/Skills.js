import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import apiCaller from './../utils/apiCaller';
export default class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    apiCaller('skills', 'GET', null).then(response => {
      this.setState({ items: response.data })
    })
  }
  render() {
    var items = this.state.items;
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
                    <strong>PROFESSION SKILLS</strong>
                  </h6>
                  <div className="row mt-top">
                    {items.map(item => (
                      <div className="col s6" key={item.id}>
                        <p>{item.skill}</p>
                        <div className="progress grey lighten-1">
                          <div className="determinate dark lighten-3" style={{ width: item.completed }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
