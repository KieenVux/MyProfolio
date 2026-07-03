import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Contact from "../pages/contact/ContactComponent";
import Education from "../pages/education/EducationComponent";
import Error404 from "../pages/errors/error404/Error";
import Experience from "../pages/experience/Experience";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import ProjectDetail from "../pages/projectDetail/ProjectDetail";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    if (settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/experience/project/:id"
                render={(props) => (
                  <ProjectDetail {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="*"
                render={(props) => (
                  <Error404 {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/experience/project/:id"
                render={(props) => (
                  <ProjectDetail {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
}
