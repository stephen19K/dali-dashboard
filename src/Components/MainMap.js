import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, LayerGroup, Tooltip } from 'react-leaflet';
import '../App.css';
import L from 'leaflet';

export default class MainMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        members: [],
        lat: 43.7022,
        lng: -72.2896,
        zoom: 8,
      }
    }

    handleClick = () => {
      console.log(this.state.lat);
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
      const position = [this.state.lat, this.state.lng]
      return (
        <div className="map">
          <Map
            onClick={this.handleClick}
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
                      iconUrl: member.iconUrl,
                      iconSize: [50, 50],
                      popupAnchor: [0, -30],
                      className: 'icon',
                    })}
                    riseOnHover={true}
                    >
                    <Popup>
                      <span>
                        {member.name}
                        <br></br>
                        On Terms: {member.terms_on}
                        <br></br>
                        Projects: {member.project}
                        <br></br>
                        <a href={member.url}>{member.url}</a>
                      </span>
                    </Popup>
                    <Tooltip
                      offset={[25, 0]}
                      direction="right"
                      >
                      <span>
                        {member.name}: {member.message}
                      </span>
                    </Tooltip>
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
