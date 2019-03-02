// @flow
import React, { PureComponent } from "react";

// components
import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../config/routes";

// type
type PropsType = {
  firebase: Object,
  history: Object,
};

class Home extends PureComponent<PropsType> {
  componentDidMount() {
    const { firebase, history } = this.props;

    firebase.getCurrentUser(user => {
      if (user) {
        history.push(ROUTES.DASHBOARD);
      } else {
        history.push(ROUTES.SIGN_IN);
      }
    });
  }

  render() {
    return <div />;
  }
}

export default withFirebase(Home);
