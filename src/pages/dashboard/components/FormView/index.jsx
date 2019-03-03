// @flow
import React, { Component } from "react";

// components
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// styles
import styles from "./styles/formView";

// type
type PropsType = {
  classes: Object,
};

type StateType = {
  direction1: string,
  direction2: string,
  description: string,
  kilometers: string,
  minutes: string,
};

class Form extends Component<PropsType, StateType> {
  state = {
    direction1: "",
    direction2: "",
    description: "",
    kilometers: "0",
    minutes: "0",
  };

  onChange = (event: Object) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const {
      direction1,
      direction2,
      description,
      kilometers,
      minutes,
    } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="address">First address</InputLabel>
          <Input
            value={direction1}
            onChange={this.onChange}
            id="direction1"
            name="direction1"
            autoComplete="direction1"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="address">Second address</InputLabel>
          <Input
            value={direction2}
            onChange={this.onChange}
            id="direction2"
            name="direction2"
            autoComplete="direction2"
            autoFocus
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Calculate
        </Button>
        <Grid className={classes.container} container direction="row">
          <Grid item xs={6} sm={6}>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              {kilometers}
            </Typography>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              Km
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              {minutes}
            </Typography>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.grow}
              align="center"
            >
              Minutes
            </Typography>
          </Grid>
        </Grid>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          multiline
          rows="5"
          value={description}
          onChange={this.onChange}
          className={classes.textField}
          margin="normal"
        />
        <Button
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

export default withStyles(styles)(Form);
