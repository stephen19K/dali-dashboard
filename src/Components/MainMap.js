import React, { Component } from 'react';
import L from 'leaflet';

export default class MainMap extends Component {

  componentDidMount() {
    console.log("this is running");

    var mymap = L.map('mapid').setView([37.492701, 127.055297], 10);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3RlcGhlbjE5ayIsImEiOiJjamRjanBsN2w0MXc5MzNxcjQzOGpiajlmIn0.DNRq_EXoiD1l1lv__unZEg'
  }).addTo(mymap);
  }

  render() {
    return (
      <div id="mapid"></div>
    )
  }
}
