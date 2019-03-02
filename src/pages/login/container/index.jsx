// @flow
import React from "react";
import { Helmet } from "react-helmet";

// style
import "./style/container.css";

// type
type PropsType = {
  children: Object,
};

const Container = ({ children }: PropsType) => {
  return (
    <section className="login-container">
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {children}
    </section>
  );
};

export default Container;
