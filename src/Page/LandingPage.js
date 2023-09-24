import React, { Component } from "react";

import Header from "../Parts/Header";
import HeaderLine from "../Parts/HeaderLine";
import Hero from "../Parts/Hero";
import SkillBean from "../Parts/SkillBean";

export default class LandingPage extends Component {
  componentDidMount() {
    window.title = "Moshe Dayan | Front End Developer | Home";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <HeaderLine />
        <Hero />
        <SkillBean />
      </>
    );
  }
}
