import React from "react";
import Fade from "react-reveal/Fade";

export default function HeaderLine() {
  return (
    <Fade duration={1000}>
      <hr className="container hr mt-15" />
    </Fade>
  );
}
