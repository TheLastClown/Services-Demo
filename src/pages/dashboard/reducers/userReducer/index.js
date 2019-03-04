/**
 * Map reducer
 */

import { actions } from "../../actions/actionsUser";

const initialState = {
  email: "",
  uid: "",
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER: {
      const { user } = action.payload;
      return {
        email: user.email,
        uid: user.uid,
      };
    }

    default: {
      return state;
    }
  }
}
