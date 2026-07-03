import React, { Component } from "react";

export default class ExperienceImg extends Component {
  render() {
    return (
      <img
        src={new URL(`../../assests/images/2.png`, import.meta.url).href}
        alt=""
      />
    );
  }
}
