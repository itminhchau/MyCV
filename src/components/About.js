import React, { Component } from 'react';
import apiCaller from './../utils/apiCaller';
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        apiCaller('profiles', 'GET', null).then(response => {
            this.setState({
                items: response.data
            })
        })
    }
    render() {
        var items = this.state.items;
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-button">
                            <strong> ABOUT ME </strong>
                        </h6>
                        <p className="grey-text">
                            My name is Dao Minh Chau, I come from Quang Ngai. I am a person who likes to explore, learn, learn but new things. I have worked on many kotlin projects. and have teamwork skills.
                </p>
                    </div>
                    <div className="card-action">
                        <h6 className="mt-button">
                            <strong> PERSONAL INFO </strong>
                        </h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>FullName: </strong> {item.FullName}
                                    </p>
                                ))}
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>Gender: </strong> {item.Gender}
                                    </p>
                                ))}
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>DateOfBirth: </strong> {item.DateOfBirth}
                                    </p>
                                ))}
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>Email: </strong> {item.Email}
                                    </p>
                                ))}

                            </div>
                            <div className="col s12 m6 l6 xl6">
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>Address: </strong> {item.Address}
                                    </p>
                                ))}
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>Phone: </strong> {item.Phone}
                                    </p>
                                ))}
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>MainLanguage: </strong> {item.MainLanguage}
                                    </p>
                                ))}
                                {items.map(item => (
                                    <p key={item.id}>
                                        <strong>SecondLanguage: </strong> {item.SecondLanguage}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
