// @flow
import React from "react";
import { connect } from "react-redux";

// components
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    flexGrow: 1,
  },
};

// type
type PropsType = {
  classes: Object,
  isFetching: boolean,
  isLoading: boolean,
};

const Loader = (props: PropsType) => {
  const { classes, isFetching, isLoading } = props;
  const showLoader = isFetching || isLoading;
  return (
    <div className={classes.root}>
      {showLoader && <LinearProgress color="secondary" />}
    </div>
  );
};

/* Connection to Store ========================= */

function mapStateToProps(state) {
  return {
    isFetching: state.service.isFetching,
    isLoading: state.service.isLoading,
  };
}

const LoaderView = connect(mapStateToProps)(Loader);

export default withStyles(styles)(LoaderView);
