import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { connect } from "react-redux";

const localizationIcon = L.icon({
  iconUrl: require("../assets/images/icone-localisation.png"),
  iconSize: [40, 40],
  iconAnchor: [25, 5],
  popupAnchor: [-3, -10]
});

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomLevel: 12
    };
  }

  render() {
    const center = this.props.center;
    return (
      <React.Fragment>
        <Map center={center} zoom={this.state.zoomLevel}>
          <TileLayer
            url="http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {this.props.ponds.map((pond, idx) => {
            return (
              <React.Fragment key={idx}>
                <Marker position={[pond.latitude, pond.longitude]} icon={localizationIcon}>
                  <Popup>{pond.name}</Popup>
                </Marker>
              </React.Fragment>
            );
          })}
        </Map>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  center: state
});

const MapContainer = connect(mapStateToProps)(MyMap);

export default MapContainer;
