import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import Header from "./header";
import Footer from "./footer";

const routing = (
  <div>
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
    
  </Router>

  <a href="/users">Ajaira</a>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));