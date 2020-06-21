import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Jumbotron,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import { Block } from "jsxstyle";
const d = window.__fgbRuntimeConfig;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      showModal: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  isValidated() {
    let self = this;
    if (self.name.value !== "" && self.description.value !== "") {
      axios({
        method: "post",
        baseURL: d.baseUrl,
        url: "/api/feedback",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        data: {
          fb_name: self.name.value,
          fb_mobile: self.mobile.value,
          fb_description: self.description.value,
        },
      }).then(function (r) {
        if (r.data.error === false) {
          self.close();
          alert("گزارش با موفقیت ارسال شد؛ متشکریم.");
        } else {
          alert(r.data.error);
        }
      });
    }
  }

  render() {
    return (
      <Block>
        {this.state.loading ? (
          <b>loading...</b>
        ) : (
          <Block>
            <Jumbotron>
              <i className="fa fa-telegram _FgIcns tg">{""}</i>
              <h1 className="_bNa">ربات تلگرام یاب</h1>
              <p className="lead">
                با استفاده از این ربات میتونى به افرادى که در فاصله نزدیک تو
                هستن پیام بدى!
              </p>
              <p>
                <a
                  className="btn btn-lg btn-primary btn-block"
                  href="https://telegram.me/FindgramBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  شروع
                </a>
              </p>
            </Jumbotron>
            <Row className="marketing">
              <Col lg={12}>
                <h4>
                  <i className="fa fa-commenting">{""}</i>&nbsp;گزارش مشکل
                </h4>
                <p>
                  لطفا در صورت داشتن هرگونه مشکل اعم از (خطا در پرداخت، خطا در
                  اتصال به درگاه بانک، ...) روی دکمه ارسال گزارش کلیک کنید.
                </p>
                <p>
                  <Button
                    bsStyle="danger"
                    onClick={this.open}
                    className="pull-left"
                  >
                    ارسال گزارش
                  </Button>
                </p>
              </Col>
            </Row>
            <Modal
              bsSize="small"
              aria-labelledby="contained-modal-title-sm"
              show={this.state.showModal}
              onHide={this.close}
            >
              <Modal.Header closeButton>
                <Modal.Title>فرم ثبت گزارش</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <FormGroup controlId="fb_name">
                    <ControlLabel>
                      نام <span className="_rQf">اجباری</span>
                    </ControlLabel>
                    <FormControl
                      type="text"
                      inputRef={(ref) => {
                        this.name = ref;
                      }}
                      required
                    />
                  </FormGroup>
                  <FormGroup controlId="fb_mobile">
                    <ControlLabel>شماره موبایل</ControlLabel>
                    <FormControl
                      type="text"
                      inputRef={(ref) => {
                        this.mobile = ref;
                      }}
                    />
                  </FormGroup>
                  <FormGroup controlId="fb_description">
                    <ControlLabel>
                      توضیحات <span className="_rQf">اجباری</span>
                    </ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      inputRef={(ref) => {
                        this.description = ref;
                      }}
                      rows="5"
                      autoComplete={false}
                      required
                    />
                  </FormGroup>
                  <Button
                    bsStyle="success"
                    block
                    onClick={() => this.isValidated()}
                  >
                    ارسال
                  </Button>
                </form>
              </Modal.Body>
            </Modal>
          </Block>
        )}
      </Block>
    );
  }
}

export default Home;
