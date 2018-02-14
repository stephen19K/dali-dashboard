import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, LayerGroup } from 'react-leaflet';
import '../App.css';
import L from 'leaflet';

export default class MainMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        members: [],
        lat: 20.2258,
        lng: -74.1534,
        zoom: 5,
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

    // this.refs.markers.eachLayer(function(marker) {
    //   marker.on('mouseover', function (e) {
    //     e.target.openPopup();
    //   });
    //   marker.on('mouseout', function (e) {
    //     e.target.closePopup();
    //   });
    // })

    render() {
      console.log("mainmap: " + this.state.members);
      const position = [this.state.lat, this.state.lng]
      return (
        <div className="map">
          <Map
            id="mapid"
            center={position}
            zoom={this.state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup
              ref="markers"
              >
            {this.state.members.map(function(member) {
              return (
                <div key={member.url} className="member">
                  <Marker
                    position={member.lat_long}
                    icon={L.icon({
                      iconUrl: "https://raw.githubusercontent.com/dali-lab/mappy/gh-pages/" + member.iconUrl,
                      iconSize:[100, 100],
                      popupAnchor: [0, -30],
                    })}
                    >
                    <Popup>
                      <p>
                        {member.name}
                      </p>
                    </Popup>
                  </Marker>
                </div>
              )
            })}
            </LayerGroup>
          </Map>
        </div>
      )
    }
  }
