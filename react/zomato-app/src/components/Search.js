import React, { Component } from 'react';
import "./Home/Search.css";
const lurl = "http://localhost:4002/locations";
const rurl = "http://localhost:4002/restaurants?stateId=1";
class S extends Component {
    render() {
        return (
            <div>
               <div id="search">
        <div id="logo">
          <span>e!</span>
        </div>
        <div id="heading">
          <p>Find the best restaurants, cafés, and bars</p>
        </div>
        <div id="dropdown">
          <select>
            <option>Please type a location</option>
            <option>Sarjapur Road, Bengaluru</option>
            <option>HSR Layout, Bengaluru</option>
          </select>
          <select id="select-style">
            <option>Select Restaurants</option>
            <option>Empire restaurants</option>
            <option>CreamStone</option>
            <option>Punjabi Rasoi</option>
          </select>
        </div>
      </div>

            </div>
        );
    }
}

export default S;