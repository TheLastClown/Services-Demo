// @flow
import React, { PureComponent } from "react";

// components
import ServiceItem from "./components/ListItem";

// style
import "./styles/list-view.css";

// type
type PropsType = {
  firebase: Object,
};
type StateType = {
  services: Array<Object>,
};

class ListView extends PureComponent<PropsType, StateType> {
  state = {
    services: [],
  };

  componentDidMount() {
    const { firebase } = this.props;
    firebase.getCurrentUser(user => {
      if (user) {
        this.loadServices(user);
      }
    });
  }

  loadServices = (user: Object) => {
    const { firebase } = this.props;
    const self = this;
    firebase.getServices(user.uid, snapshot => {
      self.setState({
        services: Object.values(snapshot.val()),
      });
    });
  };

  render() {
    const { services } = this.state;
    return (
      <div className="container">
        {services && services.map(service => <ServiceItem service={service} />)}
      </div>
    );
  }
}

export default ListView;
