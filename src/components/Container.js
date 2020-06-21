import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Container extends Component {
  render() {
    return (
      <div className="fgb-globalwrap">
        <Grid>{this.props.children}</Grid>
      </div>
    );
  }
}

export default Container;
