import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

class NotFound extends Component {
  render() {
    return (
      <Jumbotron>
        <i className="fa fa-exclamation-triangle _FgIcns danger">{""}</i>
        <h1 className="_bNa">خطای ۴۰۴</h1>
        <p className="lead">صفحه مورد نظر یافت نشد!!</p>
        <p>
          <Link
            className="btn btn-lg btn-primary btn-block"
            to={"/"}
            role="button"
          >
            بازگشت
          </Link>
        </p>
      </Jumbotron>
    );
  }
}

export default NotFound;
