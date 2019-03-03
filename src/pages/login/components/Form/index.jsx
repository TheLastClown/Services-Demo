// @flow
import React from "react";

// components
import Lottie from "lottie-react-web";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const ANIMATION = require("../../../../assets/animations/location.json");

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: "white",
    width: 100,
    height: 100,
  },
  form: {
    width: "100%",
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

// type
type PropsType = {
  classes: Object,
  onSubmit: Function,
  onChange: Function,
  email: string,
  password: string,
};

const Form = ({ classes, onSubmit, onChange, email, password }: PropsType) => (
  <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <Lottie
          options={{
            animationData: ANIMATION,
          }}
        />
      </Avatar>
      <Typography component="h1" variant="h5">
        Welcome again!
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            value={email}
            onChange={onChange}
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            value={password}
            onChange={onChange}
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Sign in
        </Button>
      </form>
    </Paper>
  </main>
);

export default withStyles(styles)(Form);
