import React from "react";
import { GOOGLE_API_KEY } from "./constants";

const parameters = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `100%` }} />,
  mapElement: <div style={{ height: `100%` }} />,
};

export default parameters;
