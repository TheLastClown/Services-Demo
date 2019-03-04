// @flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";

// component
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";

// actions
import { getGeocoding } from "../../../../actions/actionsService";

// type
type PropsType = {
  label: string,
  id: string,
  name: string,
  autocomplete: string,
  autofocus: boolean,
  getGeocodingAction: Function,
  error: boolean,
  errorMessage: string,
  showError: Function,
};

type StateType = {
  value: string,
};

let typingTimeOut = null;

class TextInput extends PureComponent<PropsType, StateType> {
  state = {
    value: "",
  };

  onGeocoding = (address: string) => {
    const { getGeocodingAction, id } = this.props;
    getGeocodingAction(address, id);
  };

  onChange = (event: Object) => {
    const {
      target: { value },
    } = event;
    if (typingTimeOut) clearTimeout(typingTimeOut);

    this.setState({ value: event.target.value });
    if (value && value.length > 4) {
      typingTimeOut = setTimeout(() => {
        this.onGeocoding(value);
      }, 1000);
    }
  };

  render() {
    const {
      label,
      id,
      name,
      autocomplete,
      autofocus,
      error,
      errorMessage,
      showError,
    } = this.props;
    const { value } = this.state;
    if (error) {
      showError(errorMessage);
    }
    return (
      <Grid container>
        <Grid item sm={12} xs={12}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="address">{label}</InputLabel>
            <Input
              value={value}
              onChange={this.onChange}
              id={id}
              name={name}
              autoComplete={autocomplete}
              autoFocus={autofocus}
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

/* Connection to Store ========================= */

function mapStateToProps(state) {
  return {
    error: state.service.error,
    errorMessage: state.service.errorMessage,
  };
}

const mapDispatchToProps = dispatch => ({
  getGeocodingAction: (address, number) =>
    dispatch(getGeocoding(address, number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextInput);
