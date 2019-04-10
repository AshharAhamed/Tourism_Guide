'use strict';
import React, {Component} from 'react';

export default class PlacesContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div className="container-fluid">
            <h1>Places</h1>
            <table>
                <tr><td width="20%">
            <div className="row">
                    <div className="col-md-4">
                        <div className="card" >
                            <img src={require('./images/p1.jpg')} />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the cards content.</p>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <br/><br/><br/>
                                    <div className="absolute" id="card-button">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                        </div>
                        </div>
                </div>
            </td>
                <td width="20%">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" >
                        <img src={require('./images/p1.jpg')} />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make
                                up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <br/><br/><br/>
                            <div className="absolute" id="card-button">
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </td>
                <td width="20%">
            <div className="row">
            <div className="col-md-4">
                <div className="card" >
                    <img src={require('./images/p1.jpg')} />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make
                            up the bulk of the cards content.</p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <br/><br/><br/>
                        <div className="absolute" id="card-button">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </td>
            </tr>
            </table>
                </div>;
    }
}