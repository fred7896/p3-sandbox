import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { connect } from 'react-redux';

class MyMap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        zoomLevel: 16,
        center: [50.633333, 3.066667]
      };
  }

  render() {
    const center = this.props.center;
      return (
          <React.Fragment>
  <Map center={center} zoom={13}>
    <TileLayer
      url="http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
     <Marker position={center}>
      {/* <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup> */}
    </Marker> 
  </Map>
          </React.Fragment>
      )
  }
}

const mapStateToProps = state => ({
    center : state
});

const MapContainer = connect(mapStateToProps)(MyMap);

export default MapContainer;