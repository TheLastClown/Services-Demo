/**
 * Map actions
 */
import onGeocodingApi from "../../../api/apiMaps";

/* ============================================== */

export const actions = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCHING_DATA_SUCCESS: "FETCHING_DATA_SUCCESS",
  FETCHING_DATA_ERROR: "FETCHING_DATA_ERROR",
  SET_DATA_DISTANCE: "SET_DATA_DISTANCE",
  SET_DESCRIPTION: "SET_DESCRIPTION",
  RESET_STORE: "RESET_STORE",
};

/* ============================================== */

const getDataFetching = () => ({
  type: actions.FETCHING_DATA,
});
const getDataFailure = (error, errorMessage) => ({
  type: actions.FETCHING_DATA_ERROR,
  payload: {
    error,
    errorMessage,
  },
});
const getDataSuccess = (data, addressPosition) => ({
  type: actions.FETCHING_DATA_SUCCESS,
  payload: {
    data,
    addressPosition,
  },
});
const setTimeAndDistanceAction = (time, distance) => ({
  type: actions.SET_DATA_DISTANCE,
  payload: {
    time,
    distance,
  },
});
const setDescriptionAction = description => ({
  type: actions.SET_DESCRIPTION,
  payload: {
    description,
  },
});
const resetStoreAction = () => ({
  type: actions.RESET_STORE,
});

/* ============================================== */

export const getGeocoding = (address, addressPosition) => dispatch => {
  dispatch(getDataFetching());
  onGeocodingApi(address)
    .then(resp => {
      dispatch(getDataSuccess(resp[0], addressPosition));
    })
    .catch(err => dispatch(getDataFailure(err)));
};

export const setDescription = description => dispatch => {
  dispatch(setDescriptionAction(description));
};

export const setTimeAndDistance = (time, distance) => dispatch => {
  dispatch(setTimeAndDistanceAction(time, distance));
};

export const resetStore = () => dispatch => {
  dispatch(resetStoreAction());
};
