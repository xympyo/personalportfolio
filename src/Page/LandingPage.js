import React, { Component } from "react";

import Header from "../Parts/Header";
import HeaderLine from "../Parts/HeaderLine";
import Hero from "../Parts/Hero";
import SkillBean from "../Parts/SkillBean";
import PortfolioShowcase from "../Parts/GraphicDesignText";
import GraphicDesignPortfolio from "../Parts/GraphicDesignPortfolio";

import landingPage from "../json/landingPage.json";
import DeveloperJourney from "../Parts/DeveloperJourneyText";

export default class LandingPage extends Component {
  componentDidMount() {
    window.title = "Moshe Dayan | Front End Developer | Home";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="vh-100">
          <Header {...this.props}></Header>
          <HeaderLine />
          <Hero />
          <SkillBean />
        </div>
        <PortfolioShowcase data={landingPage.portfolioShowcase} />
        <GraphicDesignPortfolio data={landingPage.items} />
        <DeveloperJourney />
      </>
    );
  }
}
