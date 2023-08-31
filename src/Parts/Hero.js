import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../Elements/Button";

import ArrowIcon from "../assets/images/arrow.svg";

export default function Hero(props) {
  return (
    <section className="container hero-container">
      <Fade delay={200}>
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="hero-introduction hero-text mb-0">
              Hi! I am
              <br /> Moshe Dayan
            </h1>
            <p className="hero-selfclaim hero-text">a self claim</p>
            <p className="hero-job hero-text">Front End Developer & Graphic Designer</p>
            <p className="hero-description hero-text">
              A Beginner Graphic Designer and <br /> Front End Developer with{" "}
              <span className="fw-bolder">1 year</span> worth of Projects.
            </p>
          </div>
        </div>
        <div className="hero-button-container d-flex align-items-center flex-row">
          <Button
            className="hero-button d-flex align-items-center justify-content-center"
            type="link"
            href="https://wa.me/6285939640536"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </Button>
          <div className="d-flex flex-row align-items-center">
            {" "}
            <Button className="projects-button" type="link" href={"/works"}>
              Projects<span> </span>
              <img src={ArrowIcon} alt="Arrow Icon"></img>
            </Button>
          </div>
        </div>
      </Fade>
    </section>
  );
}
