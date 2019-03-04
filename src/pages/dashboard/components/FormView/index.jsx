// @flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";

// components
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextInput from "./components/TextInput";

// actions
import { setUser } from "../../actions/actionsUser";
import { resetStore } from "../../actions/actionsService";

// styles
import styles from "./styles/formView";

// type
type PropsType = {
  classes: Object,
  showError: Function,
  time: string,
  distance: string,
  user: Object,
  setUserAction: Function,
  firebase: Object,
  service: Object,
  resetStoreAction: Function,
};

type StateType = {
  Geocoder: Function,
  direction1: string,
  direction2: string,
  description: string,
  kilometers: string,
  minutes: string,
};

class Form extends PureComponent<PropsType, StateType> {
  state = { description: "" };

  componentDidMount() {
    const { firebase, setUserAction } = this.props;
    firebase.getCurrentUser(user => {
      if (user) {
        setUserAction(user);
      }
    });
  }

  onChange = (event: Object) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRequestService = () => {
    const { firebase, service, user, resetStoreAction, showError } = this.props;
    const { description } = this.state;
    service.description = description;
    firebase
      .createService(service, user.uid)
      .then(resp => {
        console.log(resp);
        resetStoreAction();
      })
      .catch(err => {
        showError(err);
      });
  };

  render() {
    const { classes, showError, time, distance } = this.props;
    const { description } = this.state;
    const disabled = time !== "" && distance !== "" && description !== "";
    return (
      <main className={classes.main}>
        <CssBaseline />
        <TextInput
          label="First Direction"
          id="address1"
          name="address1"
          autocomplete="address1"
          autofocus
          showError={showError}
        />
        <TextInput
          label="Second Direction"
          id="address2"
          name="address2"
          autocomplete="address2"
          showError={showError}
        />
        <Grid className={classes.container} container direction="row">
          <Grid item xs={6} sm={6}>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              Distance:
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              {distance}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              Time:
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              {time}
            </Typography>
          </Grid>
        </Grid>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description*"
          multiline
          rows="5"
          value={description}
          onChange={this.onChange}
          className={classes.textField}
          margin="normal"
        />
        <Button
          onClick={this.onRequestService}
          disabled={!disabled}
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Request service
        </Button>
      </main>
    );
  }
}

/* Connection to Store ========================= */

function mapStateToProps(state) {
  return {
    distance: state.service.distance,
    time: state.service.time,
    service: state.service,
  };
}

const mapDispatchToProps = dispatch => ({
  setUserAction: user => dispatch(setUser(user)),
  resetStoreAction: () => dispatch(resetStore()),
});

const FormView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default withStyles(styles)(FormView);
