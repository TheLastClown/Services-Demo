const styles = theme => ({
  main: {
    width: "auto",
    padding: theme.spacing.unit * 3,
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
  grow: {
    fontWeight: "bold",
  },
  container: {
    marginTop: theme.spacing.unit * 3,
  },
});

export default styles;
