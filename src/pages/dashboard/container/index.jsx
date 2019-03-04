// @flow
import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import configureStore from "../../../config/store";
import rootReducer from "../reducers";

// style
import "./style/container.css";

// type
type PropsType = {
  children: Object,
};

// constants
const store = configureStore(rootReducer);

const Container = ({ children }: PropsType) => {
  return (
    <section className="dashboard-container">
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Provider store={store}>{children}</Provider>
    </section>
  );
};

export default Container;
