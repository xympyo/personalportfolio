import React from "react";
import Fade from "react-reveal/Fade";

export default function PortfolioShowcase() {
  return (
    <div className="container">
      <Fade bottom>
        <div className="portfolio-header-container d-flex justify-content-center">
          <h1 className="portfolio-header">My Portfolio Showcase</h1>
        </div>
      </Fade>
      <div className="portfolio-graphicdesign-gallery">
        <Fade bottom>
          <p className="portfolio-graphicdesign-text">
            My Latest Graphic Design Gallery{" "}
            <span className="portfolio-graphicdesign-span">
              {"("}
              Please note that I'm a self taught Graphic Designer{")"}
            </span>
          </p>
        </Fade>
      </div>
    </div>
  );
}
