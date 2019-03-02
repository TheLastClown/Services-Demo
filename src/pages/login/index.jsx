// @flow
import React, { PureComponent } from "react";

// components
import Snackbar from "../../components/Snackbar";
import { withFirebase } from "../../components/Firebase";
import Container from "./container";
import Form from "./components/Form";
import * as ROUTES from "../../config/routes";

// constants
const INITIAL_STATE = {
  email: "",
  password: "",
  error: false,
  errorMessage: "",
  isFetching: false,
};

// type
type StateType = {
  email: string,
  password: string,
  error: Object,
  errorMessage: string,
  isFetching: boolean,
};
type PropsType = {
  firebase: Object,
  history: Function,
};

class Login extends PureComponent<PropsType, StateType> {
  state = { ...INITIAL_STATE };

  onSubmit = (event: Object) => {
    event.preventDefault();
    const self = this;
    const { email, password } = this.state;
    const { firebase, history } = this.props;
    this.setState({ isFetching: true });

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        self.setState({ ...INITIAL_STATE });
        history.push(ROUTES.DASHBOARD);
      })
      .catch(errorMessage => {
        const { message } = errorMessage;
        self.setState({
          isFetching: false,
          error: true,
          errorMessage: message,
        });
      });
  };

  onChange = (event: Object) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { error, email, password, isFetching, errorMessage } = this.state;
    return (
      <Container>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          email={email}
          password={password}
        />
        {isFetching && <p> Cargando ...</p>}
        <Snackbar
          open={error}
          time={6000}
          variant="error"
          message={errorMessage}
          handleClose={() => this.setState({ error: false })}
        />
      </Container>
    );
  }
}

export default withFirebase(Login);
