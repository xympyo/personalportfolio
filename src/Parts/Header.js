import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

import IconText from "./IconText";

import { Fade } from "react-reveal";

import Button from "../Elements/Button";

export default function Header(props) {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  return (
    <Navbar bg="transparent">
      <Container className="d-flex justify-content-center">
        <Fade duration={1000}>
          <IconText />
          <div className="collapse navbar-collapse d-flex justify-content-around">
            <ul className="navbar navbar-nav">
              <li className={`navbtn nav-button${getNavLinkClass("/works")}`}>
                <Button className="nav-link" type="link" href="/works">
                  Works
                </Button>
              </li>
              <li className={`navbtn nav-button${getNavLinkClass("/about")}`}>
                <Button className="nav-link" type="link" href="/about">
                  About
                </Button>
              </li>
              <li
                className={`navbtn nav-button${getNavLinkClass("/services")}`}
              >
                <Button className="nav-link" type="link" href="/services">
                  Services
                </Button>
              </li>
            </ul>
          </div>
          <Button className="chat-button">Let's Talk</Button>
        </Fade>
      </Container>
      <hr className="hr" />
    </Navbar>
  );
}
