import React, { Component } from "react";
import { Block } from "jsxstyle";
import { Jumbotron } from "react-bootstrap";
import shaparak from "../../img/shaparak.png";
import bpm from "../../img/bpm.png";
const d = window.__fgbRuntimeConfig;

class Payment extends Component {
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

    if (d.pgw.state) {
      setTimeout(() => {
        if (this.refs.pay_fr === "undefined") {
          alert("fr_undefined");
        }
        this.refs.pay_fr.submit();
      }, 1000 / 60);
    }
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
                (d.pgw.state
                  ? "fa-spinner fa-pulse success"
                  : "fa-exclamation-triangle danger")
              }
            >
              {""}
            </i>
            <h1 className="_bNa">
              {d.pgw.state ? "انتقال به درگاه پرداخت" : "خطای درگاه پرداخت"}
            </h1>
            {d.pgw.state ? (
              <Block>
                <p className="lead">
                  پرداخت توسط کلیه کارت های عضو شبکه شتاب قابل انجام است.
                </p>
                <form ref="pay_fr" method="post" action={d.pgw["fr._act"]}>
                  {Object.keys(d.pgw["fr._fs"]).map((n) => (
                    <input
                      type="hidden"
                      key={n}
                      name={n}
                      value={d.pgw["fr._fs"][n]}
                    />
                  ))}
                </form>
              </Block>
            ) : (
              <p className="lead text-danger">{d.pgw.error}</p>
            )}
            <img src={shaparak} className="_pgwIm sh" alt="شاپرک" />
            <img src={bpm} className="_pgwIm bpm" alt="به پرداخت ملت" />
          </Jumbotron>
        )}
      </Block>
    );
  }
}

export default Payment;
