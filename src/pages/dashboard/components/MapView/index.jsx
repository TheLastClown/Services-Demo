// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "react-google-maps";
import { compose, withProps } from "recompose";

// actions
import { setTimeAndDistance } from "../../actions/actionsService";
import shapeData from "./shapeData";

// config
import mapConfig from "../../../../config/maps";
import { BOGOTA_LOCATION } from "../../../../config/constants";

// type
type PropsType = {
  showError: Function,
  setTimeAndDistanceAction: Function,
  address1: Object,
  address2: Object,
};
type StateType = {
  directions: Object,
  Geocoder: Object,
  DirectionsService: Object,
};

class MapView extends Component<PropsType, StateType> {
  state = { directions: {} };

  componentWillReceiveProps(nextProps) {
    const {
      showError,
      setTimeAndDistanceAction,
      address1,
      address2,
    } = nextProps;
    const DirectionsService = new google.maps.DirectionsService();
    if (address1 && address1.lat !== 0 && address2 && address2.lat !== 0) {
      DirectionsService.route(
        {
          origin: new google.maps.LatLng(address1.lat, address1.lon),
          destination: new google.maps.LatLng(address2.lat, address2.lon),
          travelMode: google.maps.TravelMode.DRIVING,
          transitOptions: {
            departureTime: new Date(Date.now()),
          },
          unitSystem: google.maps.UnitSystem.METRIC,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            const { time, distance } = shapeData(result);
            setTimeAndDistanceAction(time, distance);
            this.setState({ directions: result });
          } else {
            showError(`error fetching directions ${result}`);
          }
        },
      );
    }
  }

  render() {
    const { directions } = this.state;
    const { address1, address2 } = this.props;
    const lat = BOGOTA_LOCATION.latitude;
    const lon = BOGOTA_LOCATION.longitude;
    const defaultCenter = new google.maps.LatLng(lat, lon);
    return (
      <GoogleMap defaultZoom={11} defaultCenter={defaultCenter}>
        {address1 && (
          <Marker position={{ lat: address1.lat, lng: address1.lon }} />
        )}
        {address2 && (
          <Marker position={{ lat: address2.lat, lng: address2.lon }} />
        )}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    );
  }
}

/* Connection to Store ========================= */

function mapStateToProps(state) {
  return {
    address1: state.service.address1,
    address2: state.service.address2,
  };
}

const mapDispatchToProps = dispatch => ({
  setTimeAndDistanceAction: (time, distance) =>
    dispatch(setTimeAndDistance(time, distance)),
});

const MapComponentExport = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapView);

export default compose(
  withProps(mapConfig),
  withScriptjs,
  withGoogleMap,
)(MapComponentExport);
