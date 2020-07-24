//rafc
import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
//import "../../index.scss";

import Navigation from "./components/Navigation";
import CarouselComponent from "./components/Carousel";

const App = () => (
  <Fragment>
    <header className="mb-4">
      <Navigation />
    </header>

    <Container className="w-50">
      <CarouselComponent />
    </Container>
  </Fragment>
);

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
