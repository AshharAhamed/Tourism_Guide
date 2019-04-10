'use strict';

import React, {Component} from 'react';
export class FilterTour extends  Component {
    constructor(props) {
    super(props);
    }

    render() {
        return <div><form action="/action_page.php">

    <select name="Type" className="dropdown">
        <option value="Hike">Hiking</option>
        <option value="Family">Family Trip</option>
        <option value="EduTrip">Educational Trip</option>
    </select>

    <select name="TravelMode" className="dropdown">
        <option value="Train">By Train</option>
        <option value="Buses">By Buses</option>
        <option value="Cabs">By Cabs</option>
    </select>

    <select name="TravelLocation" className="dropdown">
        <option value="Ampara">Ampara</option>
        <option value="Anuradhapura">Anuradhapura</option>
        <option value="Badulla">Badulla</option>
        <option value="Batticaloa">Batticaloa</option>
        <option value="Colombo">Colombo</option>
        <option value="Galle">Galle</option>
        <option value="Gampaha">Gampaha</option>
        <option value="Hambantota">Hambantota</option>
        <option value="Kalutara">Kalutara</option>
        <option value="Kandy">Kandy</option>
        <option value="Kilinochchi">Kilinochchi</option>
        <option value="Matale">Matale</option>
        <option value="Matara">Matara</option>
        <option value="Moneragala">Moneragala</option>
        <option value="NuwaraEliya">Nuwara Eliya</option>
        <option value="Polonnaruwa">Polonnaruwa</option>
        <option value="Puttalam">Puttalam</option>
        <option value="Ratnapura">Ratnapura</option>
        <option value="Trincomalee">Trincomalee</option>
        <option value="Vavuniya">Vavuniya</option>
    </select>
            <input type="submit" name="tripType" className="button"> </input>
            </form>
        </div>;
    }
}

