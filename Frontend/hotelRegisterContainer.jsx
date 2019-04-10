'use strict';
import React, {Component} from 'react';

export default class hotelRegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Address: '',
        }

        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        setTimeout(() => {
            let isValid = true;

            for (let property in this.state) {

                if (this.state.hasOwnProperty(property)) {

                    if (property === 'isValid' || property === 'errorMessage')
                        continue;

                    let val = this.state[property];

                    if (val === null || val === undefined || val === '') {
                        isValid = false;
                        break;
                    }
                }
            }

            if (this.state.errorMessage) {
                this.setState({
                    isValid: isValid,
                    errorMessage: null
                });
            }
            else {
                this.setState({ isValid: isValid });
            }

        }, 100);
    }

    clearForm(e) {

        this.setState({
            Name: '',
            Address: '',
        });
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Register!
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Hotel Name</span>
                        <input className="input100" type="text" value={this.state.Name} onChange={this.onChange}  name="hotelName" placeholder="Enter your Hotel name"></input>
                        <span className="focus-input100" ></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Address</span>
                        <input className="input100" type="text" required={true} value={this.state.Address} onChange={this.onChange} name="address" placeholder="Enter your Last name"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Room Capacity</span>
                        <input className="input100" type="number" required={true} name="email" placeholder="Enter your Email"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Website URL</span>
                        <input className="input100" type="text" required={true} name="email" placeholder="Enter your Email"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Facebook Page URL</span>
                        <input className="input100" type="text" required={true} name="email" placeholder="Enter your Email"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select your Hotel Star Rating</span>
                        <div>
                            <select className="selection-2" name="gender">
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                                <option value="five">Five</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"></div>
                            <button className="contact100-form-btn">
							<span>
                            <input type="submit" disabled={!this.state.isValid} />
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
                            </button>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-6 mt-1">
                            <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                        </div>

                        {
                            this.state.errorMessage ?
                                (
                                    <div className="col-lg-12 mt-3">
                                        <DangerTip title="Failed!" description={this.state.errorMessage} />
                                    </div>
                                ) : null
                        }
                    </div>
                </form>
            </div>
        </div>;
    }
}