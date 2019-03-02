// @flow
import React, { PureComponent } from "react";

// components
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withFirebase } from "../../components/Firebase";
import Container from "./container";
import SignOut from "./components/SignOut";
import * as ROUTES from "../../config/routes";

// styles
import "./styles/login.css";

// constants
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100%",
    color: theme.palette.text.secondary,
  },
});

type PropsType = {
  history: Object,
  firebase: Object,
  classes: Object,
};

class Dashboard extends PureComponent<PropsType> {
  state = {};

  onSignOut = () => {
    const { history, firebase } = this.props;
    history.push(ROUTES.SIGN_IN);
  };

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid
            container
            xs={12}
            sm={12}
            alignContent="center"
            justify="flex-end"
          >
            <SignOut onClick={this.onSignOut} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Form</Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>Form</Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>List</Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(withFirebase(Dashboard));
