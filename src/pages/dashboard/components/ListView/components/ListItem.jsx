// @flow
import React from "react";

// components
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

// constants
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    height: 300,
    width: 350,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    height: 50,
  },
});

// type
type PropsType = {
  service: Object,
  classes: Object,
};

const ListItem = ({ service, classes }: PropsType) => (
  <Paper className={classes.paper}>
    <div className={classes.row}>
      <h5>Id:</h5>
      <h5>{service.id}</h5>
    </div>
    <Divider />
    <div className={classes.row}>
      <h5>From:</h5>
      <h5>{service.address1.address}</h5>
    </div>
    <Divider />
    <div className={classes.row}>
      <h5>To:</h5>
      <h5>{service.address2.address}</h5>
    </div>
    <Divider />
    <div className={classes.row}>
      <h5>Description:</h5>
      <h5>{service.description}</h5>
    </div>
    <Divider />
    <div className={classes.row}>
      <h5>Distance:</h5>
      <h5>{service.distance}</h5>
    </div>
    <Divider />
    <div className={classes.row}>
      <h5>Time:</h5>
      <h5>{service.time}</h5>
    </div>
  </Paper>
);

export default withStyles(styles)(ListItem);
