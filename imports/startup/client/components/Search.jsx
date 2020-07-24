import React, { Fragment } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const Search = () => {
  return (
    <Fragment>
      <Form inline className="order-3 d-none d-sm-inline">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Fragment>
  );
};

export default Search;
