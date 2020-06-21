import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Switch, Route } from "react-router-dom";
import Container from "./Container";
import Home from "../views/Home/";
import Payment from "../views/Payment/";
import Callback from "../views/Callback/";

const base = document.querySelector("base");
const baseHref = base ? base.getAttribute("href") : "/";

const App = () => (
  <BrowserRouter basename={baseHref.replace(/\/$/, "")}>
    <Switch>
      <Container>
        <Route path="/" exact={true} component={Home} />
        <Route path="/pay" component={Payment} />
        <Route path="/callback" component={Callback} />
      </Container>
    </Switch>
  </BrowserRouter>
);

export default App;
