import React, { Component } from "react";
import { Block } from "jsxstyle";
import { Jumbotron } from "react-bootstrap";
const d = window.__fgbRuntimeConfig;

class Callback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <Block>
        {this.state.loading ? (
          <b>loading...</b>
        ) : (
          <Jumbotron>
            <i
              className={
                "fa _FgIcns " +
                (d._cb.state
                  ? "fa-check-circle success"
                  : "fa-times-circle danger")
              }
            >
              {""}
            </i>
            <h1 className="_bNa">نتیجه تراکنش</h1>
            {d._cb.state ? (
              <Block>
                <p className="lead text-success">{d._cb.message}</p>
                <p className="lead">کد پیگیری: {d._cb.id}</p>
              </Block>
            ) : (
              <p className="lead text-danger">{d._cb.message}</p>
            )}
            <p>
              <a
                className="btn btn-lg btn-primary btn-block"
                href="https://telegram.me/FindgramBot"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                بازگشت به ربات
              </a>
            </p>
          </Jumbotron>
        )}
      </Block>
    );
  }
}

export default Callback;
