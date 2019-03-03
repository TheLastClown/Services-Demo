// @flow
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

// config
import mapConfig from "../../../../config/maps";

const MapView = compose(
  withProps(mapConfig),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: new google.maps.LatLng(41.85073, -87.65126),
          destination: new google.maps.LatLng(41.85258, -87.65141),
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            this.props.showError(`error fetching directions ${result}`);
          }
        },
      );
    },
  }),
)(({ directions }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
  >
    {directions && <DirectionsRenderer directions={directions} />}
  </GoogleMap>
));

export default MapView;
