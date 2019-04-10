'use strict';
import React, {Component} from 'react';

export default class NavigationBarContainer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="registerUser.html">Register Here</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="registerHotel.html">Register Your Hotel Here</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Awards</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Contact Us</a>
                </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">
                    <a className="navbar-brand" href="">Title Here</a>
                </ul>
            </div>
        </nav></div>;
    }
}