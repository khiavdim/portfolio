import React from "react";
import { Switch, Route } from "react-router-dom";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Connect from "./Components/Connect/Connect";

export default (
  <Switch>
    <Route exact path="/" component={Title} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/connect" component={Connect} />
  </Switch>
);
