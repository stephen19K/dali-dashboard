import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default class MainMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        members: [],
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      }
    }

    componentDidMount() {
      this.setMembers();
    }

    setMembers() {
      var requestURL = 'http://mappy.dali.dartmouth.edu/members.json'
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      request.onload = function() {
        var members = request.response;
        this.setState({
          members: members
        });
      }.bind(this);
    }


    render() {
      console.log("mainmap: " + this.state.members);
      const position = [this.state.lat, this.state.lng]
      return (
        <Map id="mapid" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.members.map(function(member) {
            return (
              <div key={member.url} className="member">
                <Marker position={member.lat_long}>
                  <Popup>
                    <p>
                      {member.name}
                    </p>
                  </Popup>
                </Marker>
              </div>
            )
          })}
        </Map>
      )
    }
  }
