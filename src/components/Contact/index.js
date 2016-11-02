import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, } from "react-google-maps";

import './contact.css';
import Overlay from './overlay';
import MarkerClusterer from "../../../lib/addons/MarkerClusterer";
const MarkerClustererExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 46, lng: 21 }}
    options={ {scrollwheel: false} }
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
          key={marker.id}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default class Contact extends Component {
  state = {
    markers: [],
  }
  componentDidMount() {
    fetch(`https://crossorigin.me/https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+romania&key=AIzaSyAE3V64xDRu2gHErGCnaEFzU4sxfyHMPv8`)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.results });
      });
  }

  render() {
    return (
      <div>
        <MarkerClustererExampleGoogleMap
          containerElement={
            <div style={{ height: `60vh` }} />
          }
          mapElement={
            <div style={{ height: `60vh` }} />
          }
          markers={this.state.markers}
        />
        <Overlay />
      </div>

    );
  }
}
