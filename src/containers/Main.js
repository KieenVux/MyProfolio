import React, { Component } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
            <Routes>
              <Route
                path="/"
                
                element={<Splash theme={this.props.theme} />}
              />
              <Route
                path="/home"
                element={<Home theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                
                element={<Experience theme={this.props.theme} />}
              />
              <Route
                path="/education"
                element={<Education theme={this.props.theme} />}
              />
              <Route
                path="/contact"
                element={<Contact theme={this.props.theme} />}
              />
              <Route
                path="/experience/project/:id"
                element={<ProjectDetail theme={this.props.theme} />}
              />
              <Route
                path="/splash"
                element={<Splash theme={this.props.theme} />}
              />
              <Route
                path="*"
                element={<Error404 theme={this.props.theme} />}
              />
            </Routes>
          </HashRouter>
        </div>
      );
    } else {
      return (
        <div>
          <HashRouter basename="/">
            <Routes>
              <Route
                path="/"
                
                element={<Home theme={this.props.theme} />}
              />
              <Route
                path="/home"
                element={<Home theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                
                element={<Experience theme={this.props.theme} />}
              />
              <Route
                path="/education"
                element={<Education theme={this.props.theme} />}
              />
              <Route
                path="/contact"
                element={<Contact theme={this.props.theme} />}
              />
              <Route
                path="/experience/project/:id"
                element={<ProjectDetail theme={this.props.theme} />}
              />
            </Routes>
          </HashRouter>
        </div>
      );
    }
  }
}
