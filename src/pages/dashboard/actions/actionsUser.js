/**
 * user actions
 */

export const actions = {
  SET_USER: "SET_USER",
};

/* ============================================== */

const setUserAction = user => ({
  type: actions.SET_USER,
  payload: {
    user,
  },
});

/* ============================================== */

export const setUser = user => dispatch => {
  dispatch(setUserAction(user));
};
