import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/bootstrap.css";
import "./css/font-awesome.min.css";
import "./css/ie10-viewport-bug-workaround.css";
import "./css/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
