import React from "react";
import { withLeaflet } from "react-leaflet";
import Locate from "leaflet.locatecontrol";
import { connect } from "react-redux";
import { setCenterAction } from "../redux/actions";

class LocateControl extends React.Component {
  componentDidMount() {
    const { options, startDirectly } = this.props;
    const { map } = this.props.leaflet;
    const { dispatch } = this.props;

    const lc = new Locate(options);
    lc.addTo(map);

    if (startDirectly) {
      // demande la mise à jour de la position et fixe la position
      lc.start();
      let pos = map.getCenter();
      dispatch(setCenterAction([pos.lat, pos.lng]));
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  center: state
});

const LocateContainer = connect(mapStateToProps)(LocateControl);

export default withLeaflet(LocateContainer);
