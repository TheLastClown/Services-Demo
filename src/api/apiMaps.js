/**
 * Api implementation
 */
import Api from "./api";
import { GOOGLE_URL, GOOGLE_API_KEY } from "../config/constants";

/* ============================================== */

const onGeocodingApi = address => {
  const value = address.replace(/#| |\*|!|¡|\?|¿|"/g, "");
  const route = `/maps/api/geocode/json?address=${value},Bogotá,+CO&key=${GOOGLE_API_KEY}`;

  return Api.get(GOOGLE_URL, route, address).then(response =>
    Promise.all([response]),
  );
};

export default onGeocodingApi;
