import React, { Fragment } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

import Search from "./Search";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="justify-content-between">
        <h1 className="order-2">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </h1>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-lg-1 order-last flex-grow-0"
        >
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* can be placed somewhere else with relationship to breakpoins */}
        <Search />
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
