// @flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";

// components
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Loader from "../../components/Loader";
import Snackbar from "../../components/Snackbar";
import Container from "./container";
import SignOut from "./components/SignOut";
import { withFirebase } from "../../components/Firebase";

// view
import MapView from "./components/MapView";
import FormView from "./components/FormView";
import ListView from "./components/ListView";

// styles
import "./styles/login.css";

// constants
import * as ROUTES from "../../config/routes";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100%",
    color: theme.palette.text.secondary,
  },
  paperModal: {
    height: "100%",
    color: theme.palette.text.secondary,
  },
  paperHeader: {
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    padding: theme.spacing.unit * 3,
  },
  container: {
    padding: theme.spacing.unit * 2,
  },
});

type PropsType = {
  history: Object,
  firebase: Object,
  classes: Object,
};

type StateType = {
  error: boolean,
  errorMessage: string,
  user: Object,
};

class Dashboard extends PureComponent<PropsType, StateType> {
  state = {
    error: false,
    errorMessage: "",
    user: {},
  };

  componentDidMount() {
    const { firebase, history } = this.props;

    firebase.getCurrentUser(user => {
      if (!user) {
        history.push(ROUTES.SIGN_IN);
      } else {
        this.setState({ user });
      }
    });
  }

  onSignOut = () => {
    const { history, firebase } = this.props;
    const self = this;
    firebase
      .doSignOut()
      .then(() => {
        history.push(ROUTES.SIGN_IN);
      })
      .catch(err => {
        self.showError(err.message);
      });
  };

  showError = errorMessage => {
    this.setState({ error: true, errorMessage });
  };

  render() {
    const { error, errorMessage, user } = this.state;
    const { classes, firebase } = this.props;
    if (user) {
      return (
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  Dashboard
                </Typography>
                <SignOut color="inherit" onClick={this.onSignOut} />
              </Grid>
            </Toolbar>
          </AppBar>
          <Loader />
          <Grid container spacing={16} className={classes.container}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paperModal}>
                <FormView
                  firebase={firebase}
                  showError={this.showError}
                  user={user}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <MapView isMarkerShown showError={this.showError} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <ListView firebase={firebase} />
            </Grid>
          </Grid>
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
    return null;
  }
}

export default withStyles(styles)(withFirebase(Dashboard));
