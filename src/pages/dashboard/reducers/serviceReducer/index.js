/**
 * Map reducer
 */

import { actions } from "../../actions/actionsService";
import shapeData from "./shapeData";
import randomId from "../../../../utils";

const initialState = {
  id: randomId(),
  address1: {
    lat: 0,
    lon: 0,
    address: "",
  },
  address2: {
    lat: 0,
    lon: 0,
    address: "",
  },
  distance: "",
  time: "",
  description: "",
  isFetching: false,
  error: false,
  errorMessage: "",
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_DATA: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case actions.FETCHING_DATA_ERROR: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage,
      };
    }

    case actions.FETCHING_DATA_SUCCESS: {
      const { data, addressPosition } = action.payload;
      if (data.status === "OK") {
        const address = shapeData(data);
        if (addressPosition === "address1") {
          return {
            ...state,
            isFetching: false,
            address1: address,
            error: false,
          };
        }
        return {
          ...state,
          isFetching: false,
          address2: address,
          error: false,
        };
      }
      if (data.status === "ZERO_RESULTS") {
        return {
          ...state,
          isFetching: false,
          error: true,
          errorMessage: "Zero results, try with another address",
        };
      }
      return {
        ...state,
      };
    }

    case actions.SET_DESCRIPTION: {
      const { description } = action.payload;
      return {
        ...state,
        description,
        error: false,
      };
    }

    case actions.SET_DATA_DISTANCE: {
      const { time, distance } = action.payload;
      return {
        ...state,
        time,
        distance,
        error: false,
      };
    }

    case actions.RESET_STORE: {
      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
}
