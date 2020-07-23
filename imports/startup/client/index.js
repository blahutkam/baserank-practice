//rafc
import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

const App = () => (
  <Fragment>
    <h1>hello world</h1>
  </Fragment>
);

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
