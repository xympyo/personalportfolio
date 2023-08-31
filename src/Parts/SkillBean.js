import React from "react";

import Button from "../Elements/Button";

import Fade from "react-reveal/Fade";

export default function SkillBean(props) {
  return (
    <div className="container">
      <div className="row">
        <ul className="skillbeans top d-flex flex-row">
          {" "}
          <Fade bottom delay={500}>
            <li className="beans">
              <Button className="btn beans lg-beans" type="button">
                HTML
              </Button>
            </li>
            <li className="beans">
              <Button className="btn beans dark-beans" type="button">
                CSS
              </Button>
            </li>
            <li className="beans">
              <Button className="btn beans lg-beans" type="button">
                Bootstrap
              </Button>
            </li>
            <li className="beans">
              <Button className="btn beans dark-beans" type="button">
                Canva
              </Button>
            </li>
          </Fade>
        </ul>
      </div>
      <div className="row">
        <ul className="skillbeans d-flex flex-row">
          <Fade bottom delay={1000}>
            <li className="beans">
              <Button className="btn beans dark-beans" type="button">
                JavaScript
              </Button>
            </li>
            <li className="beans">
              <Button className="btn beans lg-beans" type="button">
                ReactJS
              </Button>
            </li>
            <li className="beans">
              <Button className="btn beans dark-beans" type="button">
                Adobe Photoshop
              </Button>
            </li>
          </Fade>
        </ul>
      </div>
    </div>
  );
}
