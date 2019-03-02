// @flow
import React from "react";

// components
import Button from "@material-ui/core/Button";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

// type
type PropsType = {
  classes: Object,
  onClick: Function,
};

const SignOutButton = ({ classes, onClick }: PropsType) => (
  <Button
    variant="extended"
    aria-label="Delete"
    className={classes.fab}
    onClick={onClick}
  >
    <ExitToApp className={classes.extendedIcon} />
    Sign Out
  </Button>
);

export default withStyles(styles)(SignOutButton);
