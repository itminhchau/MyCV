import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import apiCaller from './../utils/apiCaller';
export default class Experiences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    apiCaller('experiences', 'GET', null).then(response =>
      this.setState({items: response.data})
    )
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
                    <strong>EXPERIENCES</strong> <hr />
                    {items.map(item => (
                      <div className="row" key={item.id}>
                        <div className="col s12 m4 l4 xl4">
                          <p className="pink lighten-3 year_exp white-text">
                            <strong>{item.date}</strong>
                          </p>
                        </div>
                        <div className="col s12 m8 l8 xl8">
                          <blockquote className="no-pad">
                            <h6 className="no-pad mt-button">
                              <strong>{item.position.title}</strong>
                            </h6>
                            <p>{item.position.content}</p>
                          </blockquote>
                        </div>
                      </div>
                    ))}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
